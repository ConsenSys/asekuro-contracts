export const IERC721Enumerable = 
{
  "contractName": "IERC721Enumerable",
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
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "getApproved",
      "outputs": [
        {
          "name": "operator",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "to",
          "type": "address"
        },
        {
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "approve",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "from",
          "type": "address"
        },
        {
          "name": "to",
          "type": "address"
        },
        {
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "transferFrom",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "from",
          "type": "address"
        },
        {
          "name": "to",
          "type": "address"
        },
        {
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "safeTransferFrom",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "ownerOf",
      "outputs": [
        {
          "name": "owner",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "owner",
          "type": "address"
        }
      ],
      "name": "balanceOf",
      "outputs": [
        {
          "name": "balance",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "operator",
          "type": "address"
        },
        {
          "name": "_approved",
          "type": "bool"
        }
      ],
      "name": "setApprovalForAll",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "from",
          "type": "address"
        },
        {
          "name": "to",
          "type": "address"
        },
        {
          "name": "tokenId",
          "type": "uint256"
        },
        {
          "name": "data",
          "type": "bytes"
        }
      ],
      "name": "safeTransferFrom",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "owner",
          "type": "address"
        },
        {
          "name": "operator",
          "type": "address"
        }
      ],
      "name": "isApprovedForAll",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "from",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "to",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "Transfer",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "approved",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "Approval",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "operator",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "approved",
          "type": "bool"
        }
      ],
      "name": "ApprovalForAll",
      "type": "event"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "totalSupply",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "owner",
          "type": "address"
        },
        {
          "name": "index",
          "type": "uint256"
        }
      ],
      "name": "tokenOfOwnerByIndex",
      "outputs": [
        {
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "index",
          "type": "uint256"
        }
      ],
      "name": "tokenByIndex",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
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
  "source": "pragma solidity ^0.4.24;\n\nimport \"./IERC721.sol\";\n\n\n/**\n * @title ERC-721 Non-Fungible Token Standard, optional enumeration extension\n * @dev See https://github.com/ethereum/EIPs/blob/master/EIPS/eip-721.md\n */\ncontract IERC721Enumerable is IERC721 {\n  function totalSupply() public view returns (uint256);\n  function tokenOfOwnerByIndex(\n    address owner,\n    uint256 index\n  )\n    public\n    view\n    returns (uint256 tokenId);\n\n  function tokenByIndex(uint256 index) public view returns (uint256);\n}\n",
  "sourcePath": "/Users/tyndall/Documents/Projects/asekuro-contracts-reloaded/node_modules/openzeppelin-solidity/contracts/token/ERC721/IERC721Enumerable.sol",
  "ast": {
    "absolutePath": "/Users/tyndall/Documents/Projects/asekuro-contracts-reloaded/node_modules/openzeppelin-solidity/contracts/token/ERC721/IERC721Enumerable.sol",
    "exportedSymbols": {
      "IERC721Enumerable": [
        4550
      ]
    },
    "id": 4551,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 4525,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:27"
      },
      {
        "absolutePath": "/Users/tyndall/Documents/Projects/asekuro-contracts-reloaded/node_modules/openzeppelin-solidity/contracts/token/ERC721/IERC721.sol",
        "file": "./IERC721.sol",
        "id": 4526,
        "nodeType": "ImportDirective",
        "scope": 4551,
        "sourceUnit": 4524,
        "src": "26:23:27",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 4527,
              "name": "IERC721",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 4523,
              "src": "241:7:27",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_IERC721_$4523",
                "typeString": "contract IERC721"
              }
            },
            "id": 4528,
            "nodeType": "InheritanceSpecifier",
            "src": "241:7:27"
          }
        ],
        "contractDependencies": [
          2475,
          4523
        ],
        "contractKind": "contract",
        "documentation": "@title ERC-721 Non-Fungible Token Standard, optional enumeration extension\n@dev See https://github.com/ethereum/EIPs/blob/master/EIPS/eip-721.md",
        "fullyImplemented": false,
        "id": 4550,
        "linearizedBaseContracts": [
          4550,
          4523,
          2475
        ],
        "name": "IERC721Enumerable",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "documentation": null,
            "id": 4533,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "totalSupply",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 4529,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "273:2:27"
            },
            "payable": false,
            "returnParameters": {
              "id": 4532,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 4531,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 4533,
                  "src": "297:7:27",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 4530,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "297:7:27",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "296:9:27"
            },
            "scope": 4550,
            "src": "253:53:27",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": null,
            "documentation": null,
            "id": 4542,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "tokenOfOwnerByIndex",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 4538,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 4535,
                  "name": "owner",
                  "nodeType": "VariableDeclaration",
                  "scope": 4542,
                  "src": "343:13:27",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 4534,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "343:7:27",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 4537,
                  "name": "index",
                  "nodeType": "VariableDeclaration",
                  "scope": 4542,
                  "src": "362:13:27",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 4536,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "362:7:27",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "337:42:27"
            },
            "payable": false,
            "returnParameters": {
              "id": 4541,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 4540,
                  "name": "tokenId",
                  "nodeType": "VariableDeclaration",
                  "scope": 4542,
                  "src": "413:15:27",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 4539,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "413:7:27",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "412:17:27"
            },
            "scope": 4550,
            "src": "309:121:27",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": null,
            "documentation": null,
            "id": 4549,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "tokenByIndex",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 4545,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 4544,
                  "name": "index",
                  "nodeType": "VariableDeclaration",
                  "scope": 4549,
                  "src": "456:13:27",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 4543,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "456:7:27",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "455:15:27"
            },
            "payable": false,
            "returnParameters": {
              "id": 4548,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 4547,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 4549,
                  "src": "492:7:27",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 4546,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "492:7:27",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "491:9:27"
            },
            "scope": 4550,
            "src": "434:67:27",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 4551,
        "src": "211:292:27"
      }
    ],
    "src": "0:504:27"
  },
  "legacyAST": {
    "absolutePath": "/Users/tyndall/Documents/Projects/asekuro-contracts-reloaded/node_modules/openzeppelin-solidity/contracts/token/ERC721/IERC721Enumerable.sol",
    "exportedSymbols": {
      "IERC721Enumerable": [
        4550
      ]
    },
    "id": 4551,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 4525,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:27"
      },
      {
        "absolutePath": "/Users/tyndall/Documents/Projects/asekuro-contracts-reloaded/node_modules/openzeppelin-solidity/contracts/token/ERC721/IERC721.sol",
        "file": "./IERC721.sol",
        "id": 4526,
        "nodeType": "ImportDirective",
        "scope": 4551,
        "sourceUnit": 4524,
        "src": "26:23:27",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 4527,
              "name": "IERC721",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 4523,
              "src": "241:7:27",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_IERC721_$4523",
                "typeString": "contract IERC721"
              }
            },
            "id": 4528,
            "nodeType": "InheritanceSpecifier",
            "src": "241:7:27"
          }
        ],
        "contractDependencies": [
          2475,
          4523
        ],
        "contractKind": "contract",
        "documentation": "@title ERC-721 Non-Fungible Token Standard, optional enumeration extension\n@dev See https://github.com/ethereum/EIPs/blob/master/EIPS/eip-721.md",
        "fullyImplemented": false,
        "id": 4550,
        "linearizedBaseContracts": [
          4550,
          4523,
          2475
        ],
        "name": "IERC721Enumerable",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "documentation": null,
            "id": 4533,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "totalSupply",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 4529,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "273:2:27"
            },
            "payable": false,
            "returnParameters": {
              "id": 4532,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 4531,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 4533,
                  "src": "297:7:27",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 4530,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "297:7:27",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "296:9:27"
            },
            "scope": 4550,
            "src": "253:53:27",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": null,
            "documentation": null,
            "id": 4542,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "tokenOfOwnerByIndex",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 4538,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 4535,
                  "name": "owner",
                  "nodeType": "VariableDeclaration",
                  "scope": 4542,
                  "src": "343:13:27",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 4534,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "343:7:27",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 4537,
                  "name": "index",
                  "nodeType": "VariableDeclaration",
                  "scope": 4542,
                  "src": "362:13:27",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 4536,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "362:7:27",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "337:42:27"
            },
            "payable": false,
            "returnParameters": {
              "id": 4541,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 4540,
                  "name": "tokenId",
                  "nodeType": "VariableDeclaration",
                  "scope": 4542,
                  "src": "413:15:27",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 4539,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "413:7:27",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "412:17:27"
            },
            "scope": 4550,
            "src": "309:121:27",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": null,
            "documentation": null,
            "id": 4549,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "tokenByIndex",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 4545,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 4544,
                  "name": "index",
                  "nodeType": "VariableDeclaration",
                  "scope": 4549,
                  "src": "456:13:27",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 4543,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "456:7:27",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "455:15:27"
            },
            "payable": false,
            "returnParameters": {
              "id": 4548,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 4547,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 4549,
                  "src": "492:7:27",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 4546,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "492:7:27",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "491:9:27"
            },
            "scope": 4550,
            "src": "434:67:27",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 4551,
        "src": "211:292:27"
      }
    ],
    "src": "0:504:27"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.25+commit.59dbf8f1.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "3.0.0-beta.1",
  "updatedAt": "2018-10-19T20:14:01.435Z"
}