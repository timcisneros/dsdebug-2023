const containerTypes = new Set(['springcm.Group', 'springcm.Lane']);

const getCellName = (cell) => cell.name?.value ?? cell.name ?? cell.id ?? '';

const createNodeSummary = (node, depth) => ({
    id: node.id,
    name: getCellName(node),
    activityName: node.activityName ?? '',
    depth,
});

const traceDirection = (nodesById, links, startId, direction) => {
    const linksByNode = new Map();
    links.forEach((link) => {
        const key = direction === 'upstream' ? link.target.id : link.source.id;
        const connectedLinks = linksByNode.get(key) ?? [];
        connectedLinks.push(link);
        linksByNode.set(key, connectedLinks);
    });

    const visitedNodeIds = new Set();
    const visitedLinkIds = new Set();
    const tracedNodes = [];
    const tracedLinks = [];
    const pending = [{ id: startId, depth: 0 }];
    let pendingIndex = 0;

    while (pendingIndex < pending.length) {
        const current = pending[pendingIndex];
        pendingIndex++;
        if (visitedNodeIds.has(current.id)) continue;
        visitedNodeIds.add(current.id);

        const node = nodesById.get(current.id);
        if (node) tracedNodes.push(createNodeSummary(node, current.depth));

        (linksByNode.get(current.id) ?? []).forEach((link) => {
            if (!visitedLinkIds.has(link.id)) {
                visitedLinkIds.add(link.id);
                tracedLinks.push({
                    id: link.id,
                    name: getCellName(link),
                    source: link.source.id,
                    target: link.target.id,
                });
            }
            const connectedNodeId =
                direction === 'upstream'
                    ? link.source.id
                    : link.target.id;
            if (!visitedNodeIds.has(connectedNodeId)) {
                pending.push({ id: connectedNodeId, depth: current.depth + 1 });
            }
        });
    }

    return { nodes: tracedNodes, links: tracedLinks };
};

export const traceWorkflowGraph = (data, startId, direction = 'both') => {
    const nodes = (data?.cells ?? []).filter(
        (cell) => cell.type !== 'springcm.Link'
    );
    const nodesById = new Map(nodes.map((node) => [node.id, node]));
    if (!nodesById.has(startId)) return null;

    const links = (data?.cells ?? []).filter(
        (cell) =>
            cell.type === 'springcm.Link' &&
            nodesById.has(cell.source?.id) &&
            nodesById.has(cell.target?.id)
    );
    const result = {
        root: createNodeSummary(nodesById.get(startId), 0),
    };
    if (direction === 'upstream' || direction === 'both') {
        result.upstream = traceDirection(
            nodesById,
            links,
            startId,
            'upstream'
        );
    }
    if (direction === 'downstream' || direction === 'both') {
        result.downstream = traceDirection(
            nodesById,
            links,
            startId,
            'downstream'
        );
    }
    return result;
};

const findExecutionCycles = (nodes, links) => {
    const executableNodeIds = new Set(
        nodes
            .filter((node) => !containerTypes.has(node.type))
            .map(({ id }) => id)
    );
    const adjacency = new Map(
        [...executableNodeIds].map((id) => [id, []])
    );
    links.forEach((link) => {
        if (
            executableNodeIds.has(link.source.id) &&
            executableNodeIds.has(link.target.id)
        ) {
            adjacency.get(link.source.id).push(link.target.id);
        }
    });

    let nextIndex = 0;
    const indexById = new Map();
    const lowLinkById = new Map();
    const stack = [];
    const onStack = new Set();
    const cycles = [];

    const visit = (nodeId) => {
        indexById.set(nodeId, nextIndex);
        lowLinkById.set(nodeId, nextIndex);
        nextIndex++;
        stack.push(nodeId);
        onStack.add(nodeId);

        adjacency.get(nodeId).forEach((targetId) => {
            if (!indexById.has(targetId)) {
                visit(targetId);
                lowLinkById.set(
                    nodeId,
                    Math.min(
                        lowLinkById.get(nodeId),
                        lowLinkById.get(targetId)
                    )
                );
            } else if (onStack.has(targetId)) {
                lowLinkById.set(
                    nodeId,
                    Math.min(
                        lowLinkById.get(nodeId),
                        indexById.get(targetId)
                    )
                );
            }
        });

        if (lowLinkById.get(nodeId) !== indexById.get(nodeId)) return;
        const component = [];
        let memberId;
        do {
            memberId = stack.pop();
            onStack.delete(memberId);
            component.push(memberId);
        } while (memberId !== nodeId);

        const hasSelfLoop =
            component.length === 1 &&
            adjacency.get(component[0]).includes(component[0]);
        if (component.length > 1 || hasSelfLoop) cycles.push(component);
    };

    executableNodeIds.forEach((nodeId) => {
        if (!indexById.has(nodeId)) visit(nodeId);
    });
    return cycles;
};

export const validateWorkflowGraph = (data) => {
    if (!data || !Array.isArray(data.cells)) {
        return [
            {
                code: 'invalid-workflow',
                severity: 'error',
                message: 'Workflow data does not contain a cells array.',
            },
        ];
    }

    const issues = [];
    const idCounts = new Map();
    data.cells.forEach((cell) => {
        if (!cell.id) {
            issues.push({
                code: 'missing-id',
                severity: 'error',
                message: `A ${
                    cell.type === 'springcm.Link' ? 'link' : 'step'
                } is missing an id.`,
            });
            return;
        }
        idCounts.set(cell.id, (idCounts.get(cell.id) ?? 0) + 1);
    });
    idCounts.forEach((count, id) => {
        if (count > 1) {
            issues.push({
                code: 'duplicate-id',
                severity: 'error',
                id,
                message: `Id '${id}' is used by ${count} workflow items.`,
            });
        }
    });

    const nodes = data.cells.filter(
        (cell) => cell.type !== 'springcm.Link'
    );
    const links = data.cells.filter(
        (cell) => cell.type === 'springcm.Link'
    );
    const nodeIds = new Set(nodes.map(({ id }) => id).filter(Boolean));
    const starts = nodes.filter(
        (node) => node.activityName === 'StartActivity'
    );

    if (starts.length === 0) {
        issues.push({
            code: 'missing-start',
            severity: 'error',
            message: 'Workflow does not contain a Start activity.',
        });
    } else if (starts.length > 1) {
        issues.push({
            code: 'multiple-starts',
            severity: 'error',
            ids: starts.map(({ id }) => id),
            message: `Workflow contains ${starts.length} Start activities.`,
        });
    }

    const validLinks = [];
    links.forEach((link) => {
        const sourceId = link.source?.id;
        const targetId = link.target?.id;
        const missingEndpoints = [];
        if (!sourceId || !nodeIds.has(sourceId)) missingEndpoints.push('source');
        if (!targetId || !nodeIds.has(targetId)) missingEndpoints.push('target');

        if (missingEndpoints.length > 0) {
            issues.push({
                code: 'dangling-link',
                severity: 'error',
                id: link.id,
                source: sourceId ?? null,
                target: targetId ?? null,
                message: `Link '${getCellName(link)}' has a missing ${missingEndpoints.join(
                    ' and '
                )}.`,
            });
            return;
        }
        validLinks.push(link);
    });

    if (starts.length === 1) {
        const adjacency = new Map();
        validLinks.forEach((link) => {
            const targets = adjacency.get(link.source.id) ?? [];
            targets.push(link.target.id);
            adjacency.set(link.source.id, targets);
        });

        const reachable = new Set();
        const pending = [starts[0].id];
        while (pending.length > 0) {
            const nodeId = pending.pop();
            if (reachable.has(nodeId)) continue;
            reachable.add(nodeId);
            (adjacency.get(nodeId) ?? []).forEach((targetId) => {
                if (!reachable.has(targetId)) pending.push(targetId);
            });
        }

        nodes
            .filter(
                (node) =>
                    !containerTypes.has(node.type) &&
                    !reachable.has(node.id)
            )
            .forEach((node) => {
                issues.push({
                    code: 'unreachable-step',
                    severity: 'error',
                    id: node.id,
                    name: getCellName(node),
                    activityName: node.activityName ?? '',
                    message: `Step '${getCellName(
                        node
                    )}' is not reachable from Start.`,
                });
            });
    }

    const nodesById = new Map(nodes.map((node) => [node.id, node]));
    findExecutionCycles(nodes, validLinks).forEach((ids) => {
        const names = ids.map((id) => getCellName(nodesById.get(id)));
        issues.push({
            code: 'execution-cycle',
            severity: 'warning',
            ids,
            names,
            message: `Execution cycle detected: ${names.join(' -> ')}.`,
        });
    });

    return issues;
};
