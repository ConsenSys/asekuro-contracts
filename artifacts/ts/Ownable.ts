export const Ownable = 
{
  "contractName": "Ownable",
  "abi": [
    {
      "inputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "previousOwner",
          "type": "address"
        }
      ],
      "name": "OwnershipRenounced",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "previousOwner",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "OwnershipTransferred",
      "type": "event"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "isOwner",
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
      "constant": false,
      "inputs": [],
      "name": "renounceOwnership",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "transferOwnership",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ],
  "bytecode": "0x608060405234801561001057600080fd5b50336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506103c6806100606000396000f300608060405260043610610062576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff168063715018a6146100675780638da5cb5b1461007e5780638f32d59b146100d5578063f2fde38b14610104575b600080fd5b34801561007357600080fd5b5061007c610147565b005b34801561008a57600080fd5b50610093610201565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b3480156100e157600080fd5b506100ea61022a565b604051808215151515815260200191505060405180910390f35b34801561011057600080fd5b50610145600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610281565b005b61014f61022a565b151561015a57600080fd5b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167ff8df31144d9c2f0f6b59d69b8b98abd5459d07f2742c4df920b25aae33c6482060405160405180910390a260008060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614905090565b61028961022a565b151561029457600080fd5b61029d816102a0565b50565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141515156102dc57600080fd5b8073ffffffffffffffffffffffffffffffffffffffff166000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550505600a165627a7a72305820589e3bf2034acdaf6eb727f4edd4fe0e687e9f78a327ce31f50a7215e803b9170029",
  "deployedBytecode": "0x608060405260043610610062576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff168063715018a6146100675780638da5cb5b1461007e5780638f32d59b146100d5578063f2fde38b14610104575b600080fd5b34801561007357600080fd5b5061007c610147565b005b34801561008a57600080fd5b50610093610201565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b3480156100e157600080fd5b506100ea61022a565b604051808215151515815260200191505060405180910390f35b34801561011057600080fd5b50610145600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610281565b005b61014f61022a565b151561015a57600080fd5b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167ff8df31144d9c2f0f6b59d69b8b98abd5459d07f2742c4df920b25aae33c6482060405160405180910390a260008060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614905090565b61028961022a565b151561029457600080fd5b61029d816102a0565b50565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141515156102dc57600080fd5b8073ffffffffffffffffffffffffffffffffffffffff166000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550505600a165627a7a72305820589e3bf2034acdaf6eb727f4edd4fe0e687e9f78a327ce31f50a7215e803b9170029",
  "sourceMap": "217:1745:17:-;;;542:51;8:9:-1;5:2;;;30:1;27;20:12;5:2;542:51:17;578:10;569:6;;:19;;;;;;;;;;;;;;;;;;217:1745;;;;;;",
  "deployedSourceMap": "217:1745:17:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1282:113;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1282:113:17;;;;;;648:70;;8:9:-1;5:2;;;30:1;27;20:12;5:2;648:70:17;;;;;;;;;;;;;;;;;;;;;;;;;;;935:83;;8:9:-1;5:2;;;30:1;27;20:12;5:2;935:83:17;;;;;;;;;;;;;;;;;;;;;;;;;;;1556:101;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1556:101:17;;;;;;;;;;;;;;;;;;;;;;;;;;;;1282:113;833:9;:7;:9::i;:::-;825:18;;;;;;;;1358:6;;;;;;;;;;;1339:26;;;;;;;;;;;;1388:1;1371:6;;:19;;;;;;;;;;;;;;;;;;1282:113::o;648:70::-;685:7;707:6;;;;;;;;;;;700:13;;648:70;:::o;935:83::-;974:4;1007:6;;;;;;;;;;;993:20;;:10;:20;;;986:27;;935:83;:::o;1556:101::-;833:9;:7;:9::i;:::-;825:18;;;;;;;;1624:28;1643:8;1624:18;:28::i;:::-;1556:101;:::o;1791:169::-;1880:1;1860:22;;:8;:22;;;;1852:31;;;;;;;;1923:8;1894:38;;1915:6;;;;;;;;;;;1894:38;;;;;;;;;;;;1947:8;1938:6;;:17;;;;;;;;;;;;;;;;;;1791:169;:::o",
  "source": "pragma solidity ^0.4.24;\n\n\n/**\n * @title Ownable\n * @dev The Ownable contract has an owner address, and provides basic authorization control\n * functions, this simplifies the implementation of \"user permissions\".\n */\ncontract Ownable {\n  address private _owner;\n\n\n  event OwnershipRenounced(address indexed previousOwner);\n  event OwnershipTransferred(\n    address indexed previousOwner,\n    address indexed newOwner\n  );\n\n\n  /**\n   * @dev The Ownable constructor sets the original `owner` of the contract to the sender\n   * account.\n   */\n  constructor() public {\n    _owner = msg.sender;\n  }\n\n  /**\n   * @return the address of the owner.\n   */\n  function owner() public view returns(address) {\n    return _owner;\n  }\n\n  /**\n   * @dev Throws if called by any account other than the owner.\n   */\n  modifier onlyOwner() {\n    require(isOwner());\n    _;\n  }\n\n  /**\n   * @return true if `msg.sender` is the owner of the contract.\n   */\n  function isOwner() public view returns(bool) {\n    return msg.sender == _owner;\n  }\n\n  /**\n   * @dev Allows the current owner to relinquish control of the contract.\n   * @notice Renouncing to ownership will leave the contract without an owner.\n   * It will not be possible to call the functions with the `onlyOwner`\n   * modifier anymore.\n   */\n  function renounceOwnership() public onlyOwner {\n    emit OwnershipRenounced(_owner);\n    _owner = address(0);\n  }\n\n  /**\n   * @dev Allows the current owner to transfer control of the contract to a newOwner.\n   * @param newOwner The address to transfer ownership to.\n   */\n  function transferOwnership(address newOwner) public onlyOwner {\n    _transferOwnership(newOwner);\n  }\n\n  /**\n   * @dev Transfers control of the contract to a newOwner.\n   * @param newOwner The address to transfer ownership to.\n   */\n  function _transferOwnership(address newOwner) internal {\n    require(newOwner != address(0));\n    emit OwnershipTransferred(_owner, newOwner);\n    _owner = newOwner;\n  }\n}\n",
  "sourcePath": "/Users/tyndall/Documents/Projects/asekuro-contracts-reloaded/node_modules/openzeppelin-solidity/contracts/ownership/Ownable.sol",
  "ast": {
    "absolutePath": "/Users/tyndall/Documents/Projects/asekuro-contracts-reloaded/node_modules/openzeppelin-solidity/contracts/ownership/Ownable.sol",
    "exportedSymbols": {
      "Ownable": [
        2774
      ]
    },
    "id": 2775,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 2673,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:17"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": "@title Ownable\n@dev The Ownable contract has an owner address, and provides basic authorization control\nfunctions, this simplifies the implementation of \"user permissions\".",
        "fullyImplemented": true,
        "id": 2774,
        "linearizedBaseContracts": [
          2774
        ],
        "name": "Ownable",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": false,
            "id": 2675,
            "name": "_owner",
            "nodeType": "VariableDeclaration",
            "scope": 2774,
            "src": "238:22:17",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_address",
              "typeString": "address"
            },
            "typeName": {
              "id": 2674,
              "name": "address",
              "nodeType": "ElementaryTypeName",
              "src": "238:7:17",
              "typeDescriptions": {
                "typeIdentifier": "t_address",
                "typeString": "address"
              }
            },
            "value": null,
            "visibility": "private"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 2679,
            "name": "OwnershipRenounced",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 2678,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2677,
                  "indexed": true,
                  "name": "previousOwner",
                  "nodeType": "VariableDeclaration",
                  "scope": 2679,
                  "src": "291:29:17",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 2676,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "291:7:17",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "290:31:17"
            },
            "src": "266:56:17"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 2685,
            "name": "OwnershipTransferred",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 2684,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2681,
                  "indexed": true,
                  "name": "previousOwner",
                  "nodeType": "VariableDeclaration",
                  "scope": 2685,
                  "src": "357:29:17",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 2680,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "357:7:17",
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
                  "id": 2683,
                  "indexed": true,
                  "name": "newOwner",
                  "nodeType": "VariableDeclaration",
                  "scope": 2685,
                  "src": "392:24:17",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 2682,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "392:7:17",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "351:69:17"
            },
            "src": "325:96:17"
          },
          {
            "body": {
              "id": 2693,
              "nodeType": "Block",
              "src": "563:30:17",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 2691,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 2688,
                      "name": "_owner",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 2675,
                      "src": "569:6:17",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 2689,
                        "name": "msg",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 4623,
                        "src": "578:3:17",
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_message",
                          "typeString": "msg"
                        }
                      },
                      "id": 2690,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "sender",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "578:10:17",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "569:19:17",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 2692,
                  "nodeType": "ExpressionStatement",
                  "src": "569:19:17"
                }
              ]
            },
            "documentation": "@dev The Ownable constructor sets the original `owner` of the contract to the sender\naccount.",
            "id": 2694,
            "implemented": true,
            "isConstructor": true,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 2686,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "553:2:17"
            },
            "payable": false,
            "returnParameters": {
              "id": 2687,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "563:0:17"
            },
            "scope": 2774,
            "src": "542:51:17",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 2701,
              "nodeType": "Block",
              "src": "694:24:17",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 2699,
                    "name": "_owner",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 2675,
                    "src": "707:6:17",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "functionReturnParameters": 2698,
                  "id": 2700,
                  "nodeType": "Return",
                  "src": "700:13:17"
                }
              ]
            },
            "documentation": "@return the address of the owner.",
            "id": 2702,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "owner",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 2695,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "662:2:17"
            },
            "payable": false,
            "returnParameters": {
              "id": 2698,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2697,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 2702,
                  "src": "685:7:17",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 2696,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "685:7:17",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "684:9:17"
            },
            "scope": 2774,
            "src": "648:70:17",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 2710,
              "nodeType": "Block",
              "src": "819:36:17",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "arguments": [],
                        "expression": {
                          "argumentTypes": [],
                          "id": 2705,
                          "name": "isOwner",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 2722,
                          "src": "833:7:17",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_view$__$returns$_t_bool_$",
                            "typeString": "function () view returns (bool)"
                          }
                        },
                        "id": 2706,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "833:9:17",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 2704,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        4626,
                        4627
                      ],
                      "referencedDeclaration": 4626,
                      "src": "825:7:17",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 2707,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "825:18:17",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 2708,
                  "nodeType": "ExpressionStatement",
                  "src": "825:18:17"
                },
                {
                  "id": 2709,
                  "nodeType": "PlaceholderStatement",
                  "src": "849:1:17"
                }
              ]
            },
            "documentation": "@dev Throws if called by any account other than the owner.",
            "id": 2711,
            "name": "onlyOwner",
            "nodeType": "ModifierDefinition",
            "parameters": {
              "id": 2703,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "816:2:17"
            },
            "src": "798:57:17",
            "visibility": "internal"
          },
          {
            "body": {
              "id": 2721,
              "nodeType": "Block",
              "src": "980:38:17",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "id": 2719,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 2716,
                        "name": "msg",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 4623,
                        "src": "993:3:17",
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_message",
                          "typeString": "msg"
                        }
                      },
                      "id": 2717,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "sender",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "993:10:17",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "argumentTypes": null,
                      "id": 2718,
                      "name": "_owner",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 2675,
                      "src": "1007:6:17",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "993:20:17",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 2715,
                  "id": 2720,
                  "nodeType": "Return",
                  "src": "986:27:17"
                }
              ]
            },
            "documentation": "@return true if `msg.sender` is the owner of the contract.",
            "id": 2722,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "isOwner",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 2712,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "951:2:17"
            },
            "payable": false,
            "returnParameters": {
              "id": 2715,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2714,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 2722,
                  "src": "974:4:17",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 2713,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "974:4:17",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "973:6:17"
            },
            "scope": 2774,
            "src": "935:83:17",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 2737,
              "nodeType": "Block",
              "src": "1328:67:17",
              "statements": [
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 2728,
                        "name": "_owner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2675,
                        "src": "1358:6:17",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "id": 2727,
                      "name": "OwnershipRenounced",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 2679,
                      "src": "1339:18:17",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$returns$__$",
                        "typeString": "function (address)"
                      }
                    },
                    "id": 2729,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1339:26:17",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 2730,
                  "nodeType": "EmitStatement",
                  "src": "1334:31:17"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 2735,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 2731,
                      "name": "_owner",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 2675,
                      "src": "1371:6:17",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "hexValue": "30",
                          "id": 2733,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "1388:1:17",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          }
                        ],
                        "id": 2732,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "1380:7:17",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_address_$",
                          "typeString": "type(address)"
                        },
                        "typeName": "address"
                      },
                      "id": 2734,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1380:10:17",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "1371:19:17",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 2736,
                  "nodeType": "ExpressionStatement",
                  "src": "1371:19:17"
                }
              ]
            },
            "documentation": "@dev Allows the current owner to relinquish control of the contract.\n@notice Renouncing to ownership will leave the contract without an owner.\nIt will not be possible to call the functions with the `onlyOwner`\nmodifier anymore.",
            "id": 2738,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 2725,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 2724,
                  "name": "onlyOwner",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 2711,
                  "src": "1318:9:17",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "1318:9:17"
              }
            ],
            "name": "renounceOwnership",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 2723,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1308:2:17"
            },
            "payable": false,
            "returnParameters": {
              "id": 2726,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1328:0:17"
            },
            "scope": 2774,
            "src": "1282:113:17",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 2749,
              "nodeType": "Block",
              "src": "1618:39:17",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 2746,
                        "name": "newOwner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2740,
                        "src": "1643:8:17",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "id": 2745,
                      "name": "_transferOwnership",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 2773,
                      "src": "1624:18:17",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$returns$__$",
                        "typeString": "function (address)"
                      }
                    },
                    "id": 2747,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1624:28:17",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 2748,
                  "nodeType": "ExpressionStatement",
                  "src": "1624:28:17"
                }
              ]
            },
            "documentation": "@dev Allows the current owner to transfer control of the contract to a newOwner.\n@param newOwner The address to transfer ownership to.",
            "id": 2750,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 2743,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 2742,
                  "name": "onlyOwner",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 2711,
                  "src": "1608:9:17",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "1608:9:17"
              }
            ],
            "name": "transferOwnership",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 2741,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2740,
                  "name": "newOwner",
                  "nodeType": "VariableDeclaration",
                  "scope": 2750,
                  "src": "1583:16:17",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 2739,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1583:7:17",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1582:18:17"
            },
            "payable": false,
            "returnParameters": {
              "id": 2744,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1618:0:17"
            },
            "scope": 2774,
            "src": "1556:101:17",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 2772,
              "nodeType": "Block",
              "src": "1846:114:17",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "id": 2760,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 2756,
                          "name": "newOwner",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 2752,
                          "src": "1860:8:17",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "!=",
                        "rightExpression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "hexValue": "30",
                              "id": 2758,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "1880:1:17",
                              "subdenomination": null,
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_0_by_1",
                                "typeString": "int_const 0"
                              },
                              "value": "0"
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_rational_0_by_1",
                                "typeString": "int_const 0"
                              }
                            ],
                            "id": 2757,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "1872:7:17",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_address_$",
                              "typeString": "type(address)"
                            },
                            "typeName": "address"
                          },
                          "id": 2759,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1872:10:17",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "src": "1860:22:17",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 2755,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        4626,
                        4627
                      ],
                      "referencedDeclaration": 4626,
                      "src": "1852:7:17",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 2761,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1852:31:17",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 2762,
                  "nodeType": "ExpressionStatement",
                  "src": "1852:31:17"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 2764,
                        "name": "_owner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2675,
                        "src": "1915:6:17",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 2765,
                        "name": "newOwner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2752,
                        "src": "1923:8:17",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "id": 2763,
                      "name": "OwnershipTransferred",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 2685,
                      "src": "1894:20:17",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$returns$__$",
                        "typeString": "function (address,address)"
                      }
                    },
                    "id": 2766,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1894:38:17",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 2767,
                  "nodeType": "EmitStatement",
                  "src": "1889:43:17"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 2770,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 2768,
                      "name": "_owner",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 2675,
                      "src": "1938:6:17",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 2769,
                      "name": "newOwner",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 2752,
                      "src": "1947:8:17",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "1938:17:17",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 2771,
                  "nodeType": "ExpressionStatement",
                  "src": "1938:17:17"
                }
              ]
            },
            "documentation": "@dev Transfers control of the contract to a newOwner.\n@param newOwner The address to transfer ownership to.",
            "id": 2773,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "_transferOwnership",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 2753,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2752,
                  "name": "newOwner",
                  "nodeType": "VariableDeclaration",
                  "scope": 2773,
                  "src": "1819:16:17",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 2751,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1819:7:17",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1818:18:17"
            },
            "payable": false,
            "returnParameters": {
              "id": 2754,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1846:0:17"
            },
            "scope": 2774,
            "src": "1791:169:17",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "internal"
          }
        ],
        "scope": 2775,
        "src": "217:1745:17"
      }
    ],
    "src": "0:1963:17"
  },
  "legacyAST": {
    "absolutePath": "/Users/tyndall/Documents/Projects/asekuro-contracts-reloaded/node_modules/openzeppelin-solidity/contracts/ownership/Ownable.sol",
    "exportedSymbols": {
      "Ownable": [
        2774
      ]
    },
    "id": 2775,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 2673,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:17"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": "@title Ownable\n@dev The Ownable contract has an owner address, and provides basic authorization control\nfunctions, this simplifies the implementation of \"user permissions\".",
        "fullyImplemented": true,
        "id": 2774,
        "linearizedBaseContracts": [
          2774
        ],
        "name": "Ownable",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": false,
            "id": 2675,
            "name": "_owner",
            "nodeType": "VariableDeclaration",
            "scope": 2774,
            "src": "238:22:17",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_address",
              "typeString": "address"
            },
            "typeName": {
              "id": 2674,
              "name": "address",
              "nodeType": "ElementaryTypeName",
              "src": "238:7:17",
              "typeDescriptions": {
                "typeIdentifier": "t_address",
                "typeString": "address"
              }
            },
            "value": null,
            "visibility": "private"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 2679,
            "name": "OwnershipRenounced",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 2678,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2677,
                  "indexed": true,
                  "name": "previousOwner",
                  "nodeType": "VariableDeclaration",
                  "scope": 2679,
                  "src": "291:29:17",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 2676,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "291:7:17",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "290:31:17"
            },
            "src": "266:56:17"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 2685,
            "name": "OwnershipTransferred",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 2684,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2681,
                  "indexed": true,
                  "name": "previousOwner",
                  "nodeType": "VariableDeclaration",
                  "scope": 2685,
                  "src": "357:29:17",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 2680,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "357:7:17",
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
                  "id": 2683,
                  "indexed": true,
                  "name": "newOwner",
                  "nodeType": "VariableDeclaration",
                  "scope": 2685,
                  "src": "392:24:17",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 2682,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "392:7:17",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "351:69:17"
            },
            "src": "325:96:17"
          },
          {
            "body": {
              "id": 2693,
              "nodeType": "Block",
              "src": "563:30:17",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 2691,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 2688,
                      "name": "_owner",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 2675,
                      "src": "569:6:17",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 2689,
                        "name": "msg",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 4623,
                        "src": "578:3:17",
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_message",
                          "typeString": "msg"
                        }
                      },
                      "id": 2690,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "sender",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "578:10:17",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "569:19:17",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 2692,
                  "nodeType": "ExpressionStatement",
                  "src": "569:19:17"
                }
              ]
            },
            "documentation": "@dev The Ownable constructor sets the original `owner` of the contract to the sender\naccount.",
            "id": 2694,
            "implemented": true,
            "isConstructor": true,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 2686,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "553:2:17"
            },
            "payable": false,
            "returnParameters": {
              "id": 2687,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "563:0:17"
            },
            "scope": 2774,
            "src": "542:51:17",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 2701,
              "nodeType": "Block",
              "src": "694:24:17",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 2699,
                    "name": "_owner",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 2675,
                    "src": "707:6:17",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "functionReturnParameters": 2698,
                  "id": 2700,
                  "nodeType": "Return",
                  "src": "700:13:17"
                }
              ]
            },
            "documentation": "@return the address of the owner.",
            "id": 2702,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "owner",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 2695,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "662:2:17"
            },
            "payable": false,
            "returnParameters": {
              "id": 2698,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2697,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 2702,
                  "src": "685:7:17",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 2696,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "685:7:17",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "684:9:17"
            },
            "scope": 2774,
            "src": "648:70:17",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 2710,
              "nodeType": "Block",
              "src": "819:36:17",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "arguments": [],
                        "expression": {
                          "argumentTypes": [],
                          "id": 2705,
                          "name": "isOwner",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 2722,
                          "src": "833:7:17",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_view$__$returns$_t_bool_$",
                            "typeString": "function () view returns (bool)"
                          }
                        },
                        "id": 2706,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "833:9:17",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 2704,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        4626,
                        4627
                      ],
                      "referencedDeclaration": 4626,
                      "src": "825:7:17",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 2707,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "825:18:17",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 2708,
                  "nodeType": "ExpressionStatement",
                  "src": "825:18:17"
                },
                {
                  "id": 2709,
                  "nodeType": "PlaceholderStatement",
                  "src": "849:1:17"
                }
              ]
            },
            "documentation": "@dev Throws if called by any account other than the owner.",
            "id": 2711,
            "name": "onlyOwner",
            "nodeType": "ModifierDefinition",
            "parameters": {
              "id": 2703,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "816:2:17"
            },
            "src": "798:57:17",
            "visibility": "internal"
          },
          {
            "body": {
              "id": 2721,
              "nodeType": "Block",
              "src": "980:38:17",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "id": 2719,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 2716,
                        "name": "msg",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 4623,
                        "src": "993:3:17",
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_message",
                          "typeString": "msg"
                        }
                      },
                      "id": 2717,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "sender",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "993:10:17",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "argumentTypes": null,
                      "id": 2718,
                      "name": "_owner",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 2675,
                      "src": "1007:6:17",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "993:20:17",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 2715,
                  "id": 2720,
                  "nodeType": "Return",
                  "src": "986:27:17"
                }
              ]
            },
            "documentation": "@return true if `msg.sender` is the owner of the contract.",
            "id": 2722,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "isOwner",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 2712,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "951:2:17"
            },
            "payable": false,
            "returnParameters": {
              "id": 2715,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2714,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 2722,
                  "src": "974:4:17",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 2713,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "974:4:17",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "973:6:17"
            },
            "scope": 2774,
            "src": "935:83:17",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 2737,
              "nodeType": "Block",
              "src": "1328:67:17",
              "statements": [
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 2728,
                        "name": "_owner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2675,
                        "src": "1358:6:17",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "id": 2727,
                      "name": "OwnershipRenounced",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 2679,
                      "src": "1339:18:17",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$returns$__$",
                        "typeString": "function (address)"
                      }
                    },
                    "id": 2729,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1339:26:17",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 2730,
                  "nodeType": "EmitStatement",
                  "src": "1334:31:17"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 2735,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 2731,
                      "name": "_owner",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 2675,
                      "src": "1371:6:17",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "hexValue": "30",
                          "id": 2733,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "1388:1:17",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          }
                        ],
                        "id": 2732,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "1380:7:17",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_address_$",
                          "typeString": "type(address)"
                        },
                        "typeName": "address"
                      },
                      "id": 2734,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1380:10:17",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "1371:19:17",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 2736,
                  "nodeType": "ExpressionStatement",
                  "src": "1371:19:17"
                }
              ]
            },
            "documentation": "@dev Allows the current owner to relinquish control of the contract.\n@notice Renouncing to ownership will leave the contract without an owner.\nIt will not be possible to call the functions with the `onlyOwner`\nmodifier anymore.",
            "id": 2738,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 2725,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 2724,
                  "name": "onlyOwner",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 2711,
                  "src": "1318:9:17",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "1318:9:17"
              }
            ],
            "name": "renounceOwnership",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 2723,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1308:2:17"
            },
            "payable": false,
            "returnParameters": {
              "id": 2726,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1328:0:17"
            },
            "scope": 2774,
            "src": "1282:113:17",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 2749,
              "nodeType": "Block",
              "src": "1618:39:17",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 2746,
                        "name": "newOwner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2740,
                        "src": "1643:8:17",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "id": 2745,
                      "name": "_transferOwnership",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 2773,
                      "src": "1624:18:17",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$returns$__$",
                        "typeString": "function (address)"
                      }
                    },
                    "id": 2747,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1624:28:17",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 2748,
                  "nodeType": "ExpressionStatement",
                  "src": "1624:28:17"
                }
              ]
            },
            "documentation": "@dev Allows the current owner to transfer control of the contract to a newOwner.\n@param newOwner The address to transfer ownership to.",
            "id": 2750,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 2743,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 2742,
                  "name": "onlyOwner",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 2711,
                  "src": "1608:9:17",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "1608:9:17"
              }
            ],
            "name": "transferOwnership",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 2741,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2740,
                  "name": "newOwner",
                  "nodeType": "VariableDeclaration",
                  "scope": 2750,
                  "src": "1583:16:17",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 2739,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1583:7:17",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1582:18:17"
            },
            "payable": false,
            "returnParameters": {
              "id": 2744,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1618:0:17"
            },
            "scope": 2774,
            "src": "1556:101:17",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 2772,
              "nodeType": "Block",
              "src": "1846:114:17",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "id": 2760,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 2756,
                          "name": "newOwner",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 2752,
                          "src": "1860:8:17",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "!=",
                        "rightExpression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "hexValue": "30",
                              "id": 2758,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "1880:1:17",
                              "subdenomination": null,
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_0_by_1",
                                "typeString": "int_const 0"
                              },
                              "value": "0"
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_rational_0_by_1",
                                "typeString": "int_const 0"
                              }
                            ],
                            "id": 2757,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "1872:7:17",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_address_$",
                              "typeString": "type(address)"
                            },
                            "typeName": "address"
                          },
                          "id": 2759,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1872:10:17",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "src": "1860:22:17",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 2755,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        4626,
                        4627
                      ],
                      "referencedDeclaration": 4626,
                      "src": "1852:7:17",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 2761,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1852:31:17",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 2762,
                  "nodeType": "ExpressionStatement",
                  "src": "1852:31:17"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 2764,
                        "name": "_owner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2675,
                        "src": "1915:6:17",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 2765,
                        "name": "newOwner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2752,
                        "src": "1923:8:17",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "id": 2763,
                      "name": "OwnershipTransferred",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 2685,
                      "src": "1894:20:17",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$returns$__$",
                        "typeString": "function (address,address)"
                      }
                    },
                    "id": 2766,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1894:38:17",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 2767,
                  "nodeType": "EmitStatement",
                  "src": "1889:43:17"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 2770,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 2768,
                      "name": "_owner",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 2675,
                      "src": "1938:6:17",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 2769,
                      "name": "newOwner",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 2752,
                      "src": "1947:8:17",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "1938:17:17",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 2771,
                  "nodeType": "ExpressionStatement",
                  "src": "1938:17:17"
                }
              ]
            },
            "documentation": "@dev Transfers control of the contract to a newOwner.\n@param newOwner The address to transfer ownership to.",
            "id": 2773,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "_transferOwnership",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 2753,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2752,
                  "name": "newOwner",
                  "nodeType": "VariableDeclaration",
                  "scope": 2773,
                  "src": "1819:16:17",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 2751,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1819:7:17",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1818:18:17"
            },
            "payable": false,
            "returnParameters": {
              "id": 2754,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1846:0:17"
            },
            "scope": 2774,
            "src": "1791:169:17",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "internal"
          }
        ],
        "scope": 2775,
        "src": "217:1745:17"
      }
    ],
    "src": "0:1963:17"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.25+commit.59dbf8f1.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "3.0.0-beta.1",
  "updatedAt": "2018-10-19T20:14:01.416Z"
}