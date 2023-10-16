import React from 'react';

const VariableInput = () => {
    return (
        <Flex flexDirection="column" position="relative" pb={4}>
            <form onSubmit={handleSubmit}>
                <FormControl isInvalid={!!error}>
                    {error && (
                        <Text
                            position="absolute"
                            top="-17px"
                            fontSize="xs"
                            color="red"
                        >
                            {error}
                        </Text>
                    )}
                    <InputGroup zIndex={1}>
                        <InputLeftElement pointerEvents="none">
                            {definedVariables ? (
                                <ReactSVG
                                    beforeInjection={(svg) => {
                                        svg.setAttribute('width', '24px');
                                        svg.setAttribute('height', '24px');
                                        svg.setAttribute('color', '#ccc');
                                    }}
                                    src="var.svg"
                                />
                            ) : (
                                <SearchIcon color="gray.300" />
                            )}
                        </InputLeftElement>
                        <Input
                            spellCheck="false"
                            disabled={definedVariables ? false : true}
                            autoComplete="off"
                            variant="outline"
                            backgroundColor="white"
                            type="text"
                            value={searchTerm}
                            onChange={handleSearch}
                            ref={inputRef}
                            placeholder={
                                definedVariables ? 'Create Variable' : 'Search'
                            }
                        />
                        {definedVariables && (
                            <InputRightAddon padding={0}>
                                <Menu>
                                    <MenuButton
                                        variant="outline"
                                        borderLeft={0}
                                        borderLeftRadius={0}
                                        as={IconButton}
                                        icon={variableTypeImage}
                                        aria-label="Variable Type"
                                    />
                                    <MenuList>
                                        <MenuItem
                                            onClick={() =>
                                                handleSetVariableType('Actor')
                                            }
                                            icon={varDataMapping['Actor'].icon}
                                        >
                                            Actor
                                        </MenuItem>
                                        <MenuItem
                                            onClick={() =>
                                                handleSetVariableType(
                                                    'CustomXml'
                                                )
                                            }
                                            icon={
                                                varDataMapping['CustomXml'].icon
                                            }
                                        >
                                            Custom XML
                                        </MenuItem>
                                        <MenuItem
                                            onClick={() =>
                                                handleSetVariableType(
                                                    'Document'
                                                )
                                            }
                                            icon={
                                                varDataMapping['Document'].icon
                                            }
                                        >
                                            Document
                                        </MenuItem>
                                    </MenuList>
                                </Menu>
                            </InputRightAddon>
                        )}
                    </InputGroup>
                </FormControl>
            </form>
        </Flex>
    );
};

export default VariableInput;
