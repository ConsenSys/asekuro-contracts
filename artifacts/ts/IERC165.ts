export const IERC165 = 
{
  "contractName": "IERC165",
  "abi": [
    {
      "constant": true,
      "inputs": [
        {
          "name": "interfaceId",
          "type": "bytes4"
        }
      ],
      "name": "supportsInterface",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    }
  ],
  "bytecode": "0x",
  "deployedBytecode": "0x",
  "sourceMap": "",
  "deployedSourceMap": "",
  "source": "pragma solidity ^0.4.24;\n\n\n/**\n * @title IERC165\n * @dev https://github.com/ethereum/EIPs/blob/master/EIPS/eip-165.md\n */\ninterface IERC165 {\n\n  /**\n   * @notice Query if a contract implements an interface\n   * @param interfaceId The interface identifier, as specified in ERC-165\n   * @dev Interface identification is specified in ERC-165. This function\n   * uses less than 30,000 gas.\n   */\n  function supportsInterface(bytes4 interfaceId)\n    external\n    view\n    returns (bool);\n}\n",
  "sourcePath": "/Users/tyndall/Documents/Projects/asekuro-contracts-reloaded/node_modules/openzeppelin-solidity/contracts/introspection/IERC165.sol",
  "ast": {
    "absolutePath": "/Users/tyndall/Documents/Projects/asekuro-contracts-reloaded/node_modules/openzeppelin-solidity/contracts/introspection/IERC165.sol",
    "exportedSymbols": {
      "IERC165": [
        2475
      ]
    },
    "id": 2476,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 2467,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:14"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "interface",
        "documentation": "@title IERC165\n@dev https://github.com/ethereum/EIPs/blob/master/EIPS/eip-165.md",
        "fullyImplemented": false,
        "id": 2475,
        "linearizedBaseContracts": [
          2475
        ],
        "name": "IERC165",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "documentation": "@notice Query if a contract implements an interface\n@param interfaceId The interface identifier, as specified in ERC-165\n@dev Interface identification is specified in ERC-165. This function\nuses less than 30,000 gas.",
            "id": 2474,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "supportsInterface",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 2470,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2469,
                  "name": "interfaceId",
                  "nodeType": "VariableDeclaration",
                  "scope": 2474,
                  "src": "421:18:14",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes4",
                    "typeString": "bytes4"
                  },
                  "typeName": {
                    "id": 2468,
                    "name": "bytes4",
                    "nodeType": "ElementaryTypeName",
                    "src": "421:6:14",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes4",
                      "typeString": "bytes4"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "420:20:14"
            },
            "payable": false,
            "returnParameters": {
              "id": 2473,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2472,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 2474,
                  "src": "476:4:14",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 2471,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "476:4:14",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "475:6:14"
            },
            "scope": 2475,
            "src": "394:88:14",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          }
        ],
        "scope": 2476,
        "src": "122:362:14"
      }
    ],
    "src": "0:485:14"
  },
  "legacyAST": {
    "absolutePath": "/Users/tyndall/Documents/Projects/asekuro-contracts-reloaded/node_modules/openzeppelin-solidity/contracts/introspection/IERC165.sol",
    "exportedSymbols": {
      "IERC165": [
        2475
      ]
    },
    "id": 2476,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 2467,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:14"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "interface",
        "documentation": "@title IERC165\n@dev https://github.com/ethereum/EIPs/blob/master/EIPS/eip-165.md",
        "fullyImplemented": false,
        "id": 2475,
        "linearizedBaseContracts": [
          2475
        ],
        "name": "IERC165",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "documentation": "@notice Query if a contract implements an interface\n@param interfaceId The interface identifier, as specified in ERC-165\n@dev Interface identification is specified in ERC-165. This function\nuses less than 30,000 gas.",
            "id": 2474,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "supportsInterface",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 2470,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2469,
                  "name": "interfaceId",
                  "nodeType": "VariableDeclaration",
                  "scope": 2474,
                  "src": "421:18:14",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes4",
                    "typeString": "bytes4"
                  },
                  "typeName": {
                    "id": 2468,
                    "name": "bytes4",
                    "nodeType": "ElementaryTypeName",
                    "src": "421:6:14",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes4",
                      "typeString": "bytes4"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "420:20:14"
            },
            "payable": false,
            "returnParameters": {
              "id": 2473,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2472,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 2474,
                  "src": "476:4:14",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 2471,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "476:4:14",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "475:6:14"
            },
            "scope": 2475,
            "src": "394:88:14",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          }
        ],
        "scope": 2476,
        "src": "122:362:14"
      }
    ],
    "src": "0:485:14"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.25+commit.59dbf8f1.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "3.0.0-beta.1",
  "updatedAt": "2018-10-19T20:14:01.414Z"
}