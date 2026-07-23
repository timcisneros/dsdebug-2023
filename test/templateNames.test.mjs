import test from 'node:test';
import assert from 'node:assert/strict';
import { getAvailableTemplateNames } from '../src/utils/templateNames.js';

test('lists each case-insensitive template name exactly once', () => {
    assert.deepEqual(
        getAvailableTemplateNames(
            ['Approval', 'Review'],
            [
                { name: 'approval' },
                { name: 'Custom' },
                { name: 'CUSTOM' },
                { name: 'Second' },
            ]
        ),
        ['Approval', 'Review', 'Custom', 'Second']
    );
});
