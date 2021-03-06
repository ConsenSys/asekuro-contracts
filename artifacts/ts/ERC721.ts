export const ERC721 = 
{
  "contractName": "ERC721",
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
      "inputs": [
        {
          "name": "owner",
          "type": "address"
        }
      ],
      "name": "balanceOf",
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
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "ownerOf",
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
          "name": "",
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
          "name": "approved",
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
          "name": "_data",
          "type": "bytes"
        }
      ],
      "name": "safeTransferFrom",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ],
  "bytecode": "0x608060405234801561001057600080fd5b5061004c6301ffc9a77c01000000000000000000000000000000000000000000000000000000000261008c640100000000026401000000009004565b6100876380ac58cd7c01000000000000000000000000000000000000000000000000000000000261008c640100000000026401000000009004565b610149565b63ffffffff7c010000000000000000000000000000000000000000000000000000000002817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916141515156100dd57600080fd5b6001600080837bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060006101000a81548160ff02191690831515021790555050565b6111ff806101586000396000f3006080604052600436106100a4576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806301ffc9a7146100a9578063081812fc1461010d578063095ea7b31461017a57806323b872dd146101c757806342842e0e146102345780636352211e146102a157806370a082311461030e578063a22cb46514610365578063b88d4fde146103b4578063e985e9c514610467575b600080fd5b3480156100b557600080fd5b506100f360048036038101908080357bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191690602001909291905050506104e2565b604051808215151515815260200191505060405180910390f35b34801561011957600080fd5b5061013860048036038101908080359060200190929190505050610549565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561018657600080fd5b506101c5600480360381019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019092919050505061059a565b005b3480156101d357600080fd5b50610232600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050506106df565b005b34801561024057600080fd5b5061029f600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050506107ae565b005b3480156102ad57600080fd5b506102cc600480360381019080803590602001909291905050506107cf565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561031a57600080fd5b5061034f600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061084d565b6040518082815260200191505060405180910390f35b34801561037157600080fd5b506103b2600480360381019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035151590602001909291905050506108d1565b005b3480156103c057600080fd5b50610465600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509192919290505050610a0d565b005b34801561047357600080fd5b506104c8600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610a35565b604051808215151515815260200191505060405180910390f35b6000806000837bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060009054906101000a900460ff169050919050565b600061055482610ac9565b151561055f57600080fd5b6002600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b60006105a5826107cf565b90508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16141515156105e257600080fd5b8073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16148061062257506106218133610a35565b5b151561062d57600080fd5b826002600084815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550818373ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a4505050565b6106e93382610b3b565b15156106f457600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415151561073057600080fd5b61073a8382610bd0565b6107448382610cd3565b61074e8282610e02565b808273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4505050565b6107ca8383836020604051908101604052806000815250610a0d565b505050565b6000806001600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415151561084457600080fd5b80915050919050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415151561088a57600080fd5b600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b3373ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415151561090c57600080fd5b80600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c3183604051808215151515815260200191505060405180910390a35050565b610a188484846106df565b610a2484848484610f5c565b1515610a2f57600080fd5b50505050565b6000600460008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b6000806001600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415915050919050565b600080610b47836107cf565b90508073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161480610bb657508373ffffffffffffffffffffffffffffffffffffffff16610b9e84610549565b73ffffffffffffffffffffffffffffffffffffffff16145b80610bc75750610bc68185610a35565b5b91505092915050565b8173ffffffffffffffffffffffffffffffffffffffff16610bf0826107cf565b73ffffffffffffffffffffffffffffffffffffffff16141515610c1257600080fd5b600073ffffffffffffffffffffffffffffffffffffffff166002600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16141515610ccf5760006002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505b5050565b8173ffffffffffffffffffffffffffffffffffffffff16610cf3826107cf565b73ffffffffffffffffffffffffffffffffffffffff16141515610d1557600080fd5b610d686001600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461117e90919063ffffffff16565b600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555060006001600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505050565b600073ffffffffffffffffffffffffffffffffffffffff166001600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16141515610e7057600080fd5b816001600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550610f156001600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461119f90919063ffffffff16565b600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055505050565b600080610f7e8573ffffffffffffffffffffffffffffffffffffffff166111c0565b1515610f8d5760019150611175565b8473ffffffffffffffffffffffffffffffffffffffff1663150b7a02338887876040518563ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b83811015611082578082015181840152602081019050611067565b50505050905090810190601f1680156110af5780820380516001836020036101000a031916815260200191505b5095505050505050602060405180830381600087803b1580156110d157600080fd5b505af11580156110e5573d6000803e3d6000fd5b505050506040513d60208110156110fb57600080fd5b8101908080519060200190929190505050905063150b7a027c0100000000000000000000000000000000000000000000000000000000027bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161491505b50949350505050565b60008083831115151561119057600080fd5b82840390508091505092915050565b60008082840190508381101515156111b657600080fd5b8091505092915050565b600080823b9050600081119150509190505600a165627a7a72305820409508abfe7a571c9d05f9df0d4f92f3d90e58c0e8bb16c314ad20f54a46ccbb0029",
  "deployedBytecode": "0x6080604052600436106100a4576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806301ffc9a7146100a9578063081812fc1461010d578063095ea7b31461017a57806323b872dd146101c757806342842e0e146102345780636352211e146102a157806370a082311461030e578063a22cb46514610365578063b88d4fde146103b4578063e985e9c514610467575b600080fd5b3480156100b557600080fd5b506100f360048036038101908080357bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191690602001909291905050506104e2565b604051808215151515815260200191505060405180910390f35b34801561011957600080fd5b5061013860048036038101908080359060200190929190505050610549565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561018657600080fd5b506101c5600480360381019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019092919050505061059a565b005b3480156101d357600080fd5b50610232600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050506106df565b005b34801561024057600080fd5b5061029f600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050506107ae565b005b3480156102ad57600080fd5b506102cc600480360381019080803590602001909291905050506107cf565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561031a57600080fd5b5061034f600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061084d565b6040518082815260200191505060405180910390f35b34801561037157600080fd5b506103b2600480360381019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035151590602001909291905050506108d1565b005b3480156103c057600080fd5b50610465600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509192919290505050610a0d565b005b34801561047357600080fd5b506104c8600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610a35565b604051808215151515815260200191505060405180910390f35b6000806000837bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060009054906101000a900460ff169050919050565b600061055482610ac9565b151561055f57600080fd5b6002600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b60006105a5826107cf565b90508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16141515156105e257600080fd5b8073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16148061062257506106218133610a35565b5b151561062d57600080fd5b826002600084815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550818373ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a4505050565b6106e93382610b3b565b15156106f457600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415151561073057600080fd5b61073a8382610bd0565b6107448382610cd3565b61074e8282610e02565b808273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4505050565b6107ca8383836020604051908101604052806000815250610a0d565b505050565b6000806001600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415151561084457600080fd5b80915050919050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415151561088a57600080fd5b600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b3373ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415151561090c57600080fd5b80600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c3183604051808215151515815260200191505060405180910390a35050565b610a188484846106df565b610a2484848484610f5c565b1515610a2f57600080fd5b50505050565b6000600460008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b6000806001600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415915050919050565b600080610b47836107cf565b90508073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161480610bb657508373ffffffffffffffffffffffffffffffffffffffff16610b9e84610549565b73ffffffffffffffffffffffffffffffffffffffff16145b80610bc75750610bc68185610a35565b5b91505092915050565b8173ffffffffffffffffffffffffffffffffffffffff16610bf0826107cf565b73ffffffffffffffffffffffffffffffffffffffff16141515610c1257600080fd5b600073ffffffffffffffffffffffffffffffffffffffff166002600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16141515610ccf5760006002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505b5050565b8173ffffffffffffffffffffffffffffffffffffffff16610cf3826107cf565b73ffffffffffffffffffffffffffffffffffffffff16141515610d1557600080fd5b610d686001600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461117e90919063ffffffff16565b600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555060006001600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505050565b600073ffffffffffffffffffffffffffffffffffffffff166001600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16141515610e7057600080fd5b816001600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550610f156001600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461119f90919063ffffffff16565b600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055505050565b600080610f7e8573ffffffffffffffffffffffffffffffffffffffff166111c0565b1515610f8d5760019150611175565b8473ffffffffffffffffffffffffffffffffffffffff1663150b7a02338887876040518563ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b83811015611082578082015181840152602081019050611067565b50505050905090810190601f1680156110af5780820380516001836020036101000a031916815260200191505b5095505050505050602060405180830381600087803b1580156110d157600080fd5b505af11580156110e5573d6000803e3d6000fd5b505050506040513d60208110156110fb57600080fd5b8101908080519060200190929190505050905063150b7a027c0100000000000000000000000000000000000000000000000000000000027bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161491505b50949350505050565b60008083831115151561119057600080fd5b82840390508091505092915050565b60008082840190508381101515156111b657600080fd5b8091505092915050565b600080823b9050600081119150509190505600a165627a7a72305820409508abfe7a571c9d05f9df0d4f92f3d90e58c0e8bb16c314ad20f54a46ccbb0029",
  "sourceMap": "340:10914:22:-;;;1727:150;8:9:-1;5:2;;;30:1;27;20:12;5:2;1727:150:22;612:39:13;236:10;631:19;;612:18;;;:39;;;:::i;:::-;1833::22;1137:10;1852:19;;1833:18;;;:39;;;:::i;:::-;340:10914;;950:154:13;1042:10;1027:25;;:11;:25;;;;;1019:34;;;;;;;;1095:4;1059:20;:33;1080:11;1059:33;;;;;;;;;;;;;;;;;;:40;;;;;;;;;;;;;;;;;;950:154;:::o;340:10914:22:-;;;;;;;",
  "deployedSourceMap": "340:10914:22:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;739:141:13;;8:9:-1;5:2;;;30:1;27;20:12;5:2;739:141:13;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3527::22;;8:9:-1;5:2;;;30:1;27;20:12;5:2;3527:141:22;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2986:270;;8:9:-1;5:2;;;30:1;27;20:12;5:2;2986:270:22;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;5032:326;;8:9:-1;5:2;;;30:1;27;20:12;5:2;5032:326:22;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;5971:193;;8:9:-1;5:2;;;30:1;27;20:12;5:2;5971:193:22;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2420:163;;8:9:-1;5:2;;;30:1;27;20:12;5:2;2420:163:22;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2068:140;;8:9:-1;5:2;;;30:1;27;20:12;5:2;2068:140:22;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3946:199;;8:9:-1;5:2;;;30:1;27;20:12;5:2;3946:199:22;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;6843:268;;8:9:-1;5:2;;;30:1;27;20:12;5:2;6843:268:22;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4452:165;;8:9:-1;5:2;;;30:1;27;20:12;5:2;4452:165:22;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;739:141:13;821:4;842:20;:33;863:11;842:33;;;;;;;;;;;;;;;;;;;;;;;;;;;835:40;;739:141;;;:::o;3527::22:-;3586:7;3609:16;3617:7;3609;:16::i;:::-;3601:25;;;;;;;;3639:15;:24;3655:7;3639:24;;;;;;;;;;;;;;;;;;;;;3632:31;;3527:141;;;:::o;2986:270::-;3045:13;3061:16;3069:7;3061;:16::i;:::-;3045:32;;3097:5;3091:11;;:2;:11;;;;3083:20;;;;;;;;3131:5;3117:19;;:10;:19;;;:58;;;;3140:35;3157:5;3164:10;3140:16;:35::i;:::-;3117:58;3109:67;;;;;;;;3210:2;3183:15;:24;3199:7;3183:24;;;;;;;;;;;;:29;;;;;;;;;;;;;;;;;;3243:7;3239:2;3223:28;;3232:5;3223:28;;;;;;;;;;;;2986:270;;;:::o;5032:326::-;5140:39;5159:10;5171:7;5140:18;:39::i;:::-;5132:48;;;;;;;;5208:1;5194:16;;:2;:16;;;;5186:25;;;;;;;;5218:29;5233:4;5239:7;5218:14;:29::i;:::-;5253:31;5270:4;5276:7;5253:16;:31::i;:::-;5290:24;5302:2;5306:7;5290:11;:24::i;:::-;5345:7;5341:2;5326:27;;5335:4;5326:27;;;;;;;;;;;;5032:326;;;:::o;5971:193::-;6120:39;6137:4;6143:2;6147:7;6120:39;;;;;;;;;;;;;:16;:39::i;:::-;5971:193;;;:::o;2420:163::-;2475:7;2490:13;2506:11;:20;2518:7;2506:20;;;;;;;;;;;;;;;;;;;;;2490:36;;2557:1;2540:19;;:5;:19;;;;2532:28;;;;;;;;2573:5;2566:12;;2420:163;;;;:::o;2068:140::-;2123:7;2163:1;2146:19;;:5;:19;;;;2138:28;;;;;;;;2179:17;:24;2197:5;2179:24;;;;;;;;;;;;;;;;2172:31;;2068:140;;;:::o;3946:199::-;4027:10;4021:16;;:2;:16;;;;4013:25;;;;;;;;4081:8;4044:18;:30;4063:10;4044:30;;;;;;;;;;;;;;;:34;4075:2;4044:34;;;;;;;;;;;;;;;;:45;;;;;;;;;;;;;;;;;;4127:2;4100:40;;4115:10;4100:40;;;4131:8;4100:40;;;;;;;;;;;;;;;;;;;;;;3946:199;;:::o;6843:268::-;6964:31;6977:4;6983:2;6987:7;6964:12;:31::i;:::-;7054:51;7080:4;7086:2;7090:7;7099:5;7054:25;:51::i;:::-;7046:60;;;;;;;;6843:268;;;;:::o;4452:165::-;4556:4;4577:18;:25;4596:5;4577:25;;;;;;;;;;;;;;;:35;4603:8;4577:35;;;;;;;;;;;;;;;;;;;;;;;;;4570:42;;4452:165;;;;:::o;7288:142::-;7345:4;7357:13;7373:11;:20;7385:7;7373:20;;;;;;;;;;;;;;;;;;;;;7357:36;;7423:1;7406:19;;:5;:19;;;;7399:26;;7288:142;;;;:::o;7775:432::-;7884:4;7898:13;7914:16;7922:7;7914;:16::i;:::-;7898:32;;8108:5;8097:16;;:7;:16;;;:57;;;;8147:7;8123:31;;:20;8135:7;8123:11;:20::i;:::-;:31;;;8097:57;:99;;;;8164:32;8181:5;8188:7;8164:16;:32::i;:::-;8097:99;8082:120;;7775:432;;;;;:::o;9244:211::-;9343:5;9323:25;;:16;9331:7;9323;:16::i;:::-;:25;;;9315:34;;;;;;;;9395:1;9359:38;;:15;:24;9375:7;9359:24;;;;;;;;;;;;;;;;;;;;;:38;;;;9355:96;;;9442:1;9407:15;:24;9423:7;9407:24;;;;;;;;;;;;:37;;;;;;;;;;;;;;;;;;9355:96;9244:211;;:::o;10195:::-;10295:4;10275:24;;:16;10283:7;10275;:16::i;:::-;:24;;;10267:33;;;;;;;;10332:30;10360:1;10332:17;:23;10350:4;10332:23;;;;;;;;;;;;;;;;:27;;:30;;;;:::i;:::-;10306:17;:23;10324:4;10306:23;;;;;;;;;;;;;;;:56;;;;10399:1;10368:11;:20;10380:7;10368:20;;;;;;;;;;;;:33;;;;;;;;;;;;;;;;;;10195:211;;:::o;9716:202::-;9821:1;9789:34;;:11;:20;9801:7;9789:20;;;;;;;;;;;;;;;;;;;;;:34;;;9781:43;;;;;;;;9853:2;9830:11;:20;9842:7;9830:20;;;;;;;;;;;;:25;;;;;;;;;;;;;;;;;;9885:28;9911:1;9885:17;:21;9903:2;9885:21;;;;;;;;;;;;;;;;:25;;:28;;;;:::i;:::-;9861:17;:21;9879:2;9861:21;;;;;;;;;;;;;;;:52;;;;9716:202;;:::o;10909:343::-;11046:4;11113:13;11065:15;:2;:13;;;:15::i;:::-;11064:16;11060:48;;;11097:4;11090:11;;;;11060:48;11145:2;11129:36;;;11173:10;11185:4;11191:7;11200:5;11129:77;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;11129:77:22;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;11129:77:22;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;11129:77:22;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;11129:77:22;;;;;;;;;;;;;;;;11113:93;;651:10;11230:16;;11220:26;;;:6;:26;;;;11212:35;;10909:343;;;;;;;;:::o;1079:131:16:-;1137:7;1173:9;1165:1;1160;:6;;1152:15;;;;;;;;1189:1;1185;:5;1173:17;;1204:1;1197:8;;1079:131;;;;;:::o;1273:::-;1331:7;1346:9;1362:1;1358;:5;1346:17;;1382:1;1377;:6;;1369:15;;;;;;;;1398:1;1391:8;;1273:131;;;;;:::o;450:582:30:-;510:4;522:12;997:7;985:20;977:28;;1026:1;1019:4;:8;1012:15;;450:582;;;;:::o",
  "source": "pragma solidity ^0.4.24;\n\nimport \"./IERC721.sol\";\nimport \"./IERC721Receiver.sol\";\nimport \"../../math/SafeMath.sol\";\nimport \"../../utils/Address.sol\";\nimport \"../../introspection/ERC165.sol\";\n\n\n/**\n * @title ERC721 Non-Fungible Token Standard basic implementation\n * @dev see https://github.com/ethereum/EIPs/blob/master/EIPS/eip-721.md\n */\ncontract ERC721 is ERC165, IERC721 {\n\n  using SafeMath for uint256;\n  using Address for address;\n\n  // Equals to `bytes4(keccak256(\"onERC721Received(address,address,uint256,bytes)\"))`\n  // which can be also obtained as `IERC721Receiver(0).onERC721Received.selector`\n  bytes4 private constant _ERC721_RECEIVED = 0x150b7a02;\n\n  // Mapping from token ID to owner\n  mapping (uint256 => address) private _tokenOwner;\n\n  // Mapping from token ID to approved address\n  mapping (uint256 => address) private _tokenApprovals;\n\n  // Mapping from owner to number of owned token\n  mapping (address => uint256) private _ownedTokensCount;\n\n  // Mapping from owner to operator approvals\n  mapping (address => mapping (address => bool)) private _operatorApprovals;\n\n  bytes4 private constant _InterfaceId_ERC721 = 0x80ac58cd;\n  /*\n   * 0x80ac58cd ===\n   *   bytes4(keccak256('balanceOf(address)')) ^\n   *   bytes4(keccak256('ownerOf(uint256)')) ^\n   *   bytes4(keccak256('approve(address,uint256)')) ^\n   *   bytes4(keccak256('getApproved(uint256)')) ^\n   *   bytes4(keccak256('setApprovalForAll(address,bool)')) ^\n   *   bytes4(keccak256('isApprovedForAll(address,address)')) ^\n   *   bytes4(keccak256('transferFrom(address,address,uint256)')) ^\n   *   bytes4(keccak256('safeTransferFrom(address,address,uint256)')) ^\n   *   bytes4(keccak256('safeTransferFrom(address,address,uint256,bytes)'))\n   */\n\n  constructor()\n    public\n  {\n    // register the supported interfaces to conform to ERC721 via ERC165\n    _registerInterface(_InterfaceId_ERC721);\n  }\n\n  /**\n   * @dev Gets the balance of the specified address\n   * @param owner address to query the balance of\n   * @return uint256 representing the amount owned by the passed address\n   */\n  function balanceOf(address owner) public view returns (uint256) {\n    require(owner != address(0));\n    return _ownedTokensCount[owner];\n  }\n\n  /**\n   * @dev Gets the owner of the specified token ID\n   * @param tokenId uint256 ID of the token to query the owner of\n   * @return owner address currently marked as the owner of the given token ID\n   */\n  function ownerOf(uint256 tokenId) public view returns (address) {\n    address owner = _tokenOwner[tokenId];\n    require(owner != address(0));\n    return owner;\n  }\n\n  /**\n   * @dev Approves another address to transfer the given token ID\n   * The zero address indicates there is no approved address.\n   * There can only be one approved address per token at a given time.\n   * Can only be called by the token owner or an approved operator.\n   * @param to address to be approved for the given token ID\n   * @param tokenId uint256 ID of the token to be approved\n   */\n  function approve(address to, uint256 tokenId) public {\n    address owner = ownerOf(tokenId);\n    require(to != owner);\n    require(msg.sender == owner || isApprovedForAll(owner, msg.sender));\n\n    _tokenApprovals[tokenId] = to;\n    emit Approval(owner, to, tokenId);\n  }\n\n  /**\n   * @dev Gets the approved address for a token ID, or zero if no address set\n   * Reverts if the token ID does not exist.\n   * @param tokenId uint256 ID of the token to query the approval of\n   * @return address currently approved for the given token ID\n   */\n  function getApproved(uint256 tokenId) public view returns (address) {\n    require(_exists(tokenId));\n    return _tokenApprovals[tokenId];\n  }\n\n  /**\n   * @dev Sets or unsets the approval of a given operator\n   * An operator is allowed to transfer all tokens of the sender on their behalf\n   * @param to operator address to set the approval\n   * @param approved representing the status of the approval to be set\n   */\n  function setApprovalForAll(address to, bool approved) public {\n    require(to != msg.sender);\n    _operatorApprovals[msg.sender][to] = approved;\n    emit ApprovalForAll(msg.sender, to, approved);\n  }\n\n  /**\n   * @dev Tells whether an operator is approved by a given owner\n   * @param owner owner address which you want to query the approval of\n   * @param operator operator address which you want to query the approval of\n   * @return bool whether the given operator is approved by the given owner\n   */\n  function isApprovedForAll(\n    address owner,\n    address operator\n  )\n    public\n    view\n    returns (bool)\n  {\n    return _operatorApprovals[owner][operator];\n  }\n\n  /**\n   * @dev Transfers the ownership of a given token ID to another address\n   * Usage of this method is discouraged, use `safeTransferFrom` whenever possible\n   * Requires the msg sender to be the owner, approved, or operator\n   * @param from current owner of the token\n   * @param to address to receive the ownership of the given token ID\n   * @param tokenId uint256 ID of the token to be transferred\n  */\n  function transferFrom(\n    address from,\n    address to,\n    uint256 tokenId\n  )\n    public\n  {\n    require(_isApprovedOrOwner(msg.sender, tokenId));\n    require(to != address(0));\n\n    _clearApproval(from, tokenId);\n    _removeTokenFrom(from, tokenId);\n    _addTokenTo(to, tokenId);\n\n    emit Transfer(from, to, tokenId);\n  }\n\n  /**\n   * @dev Safely transfers the ownership of a given token ID to another address\n   * If the target address is a contract, it must implement `onERC721Received`,\n   * which is called upon a safe transfer, and return the magic value\n   * `bytes4(keccak256(\"onERC721Received(address,address,uint256,bytes)\"))`; otherwise,\n   * the transfer is reverted.\n   *\n   * Requires the msg sender to be the owner, approved, or operator\n   * @param from current owner of the token\n   * @param to address to receive the ownership of the given token ID\n   * @param tokenId uint256 ID of the token to be transferred\n  */\n  function safeTransferFrom(\n    address from,\n    address to,\n    uint256 tokenId\n  )\n    public\n  {\n    // solium-disable-next-line arg-overflow\n    safeTransferFrom(from, to, tokenId, \"\");\n  }\n\n  /**\n   * @dev Safely transfers the ownership of a given token ID to another address\n   * If the target address is a contract, it must implement `onERC721Received`,\n   * which is called upon a safe transfer, and return the magic value\n   * `bytes4(keccak256(\"onERC721Received(address,address,uint256,bytes)\"))`; otherwise,\n   * the transfer is reverted.\n   * Requires the msg sender to be the owner, approved, or operator\n   * @param from current owner of the token\n   * @param to address to receive the ownership of the given token ID\n   * @param tokenId uint256 ID of the token to be transferred\n   * @param _data bytes data to send along with a safe transfer check\n   */\n  function safeTransferFrom(\n    address from,\n    address to,\n    uint256 tokenId,\n    bytes _data\n  )\n    public\n  {\n    transferFrom(from, to, tokenId);\n    // solium-disable-next-line arg-overflow\n    require(_checkAndCallSafeTransfer(from, to, tokenId, _data));\n  }\n\n  /**\n   * @dev Returns whether the specified token exists\n   * @param tokenId uint256 ID of the token to query the existence of\n   * @return whether the token exists\n   */\n  function _exists(uint256 tokenId) internal view returns (bool) {\n    address owner = _tokenOwner[tokenId];\n    return owner != address(0);\n  }\n\n  /**\n   * @dev Returns whether the given spender can transfer a given token ID\n   * @param spender address of the spender to query\n   * @param tokenId uint256 ID of the token to be transferred\n   * @return bool whether the msg.sender is approved for the given token ID,\n   *  is an operator of the owner, or is the owner of the token\n   */\n  function _isApprovedOrOwner(\n    address spender,\n    uint256 tokenId\n  )\n    internal\n    view\n    returns (bool)\n  {\n    address owner = ownerOf(tokenId);\n    // Disable solium check because of\n    // https://github.com/duaraghav8/Solium/issues/175\n    // solium-disable-next-line operator-whitespace\n    return (\n      spender == owner ||\n      getApproved(tokenId) == spender ||\n      isApprovedForAll(owner, spender)\n    );\n  }\n\n  /**\n   * @dev Internal function to mint a new token\n   * Reverts if the given token ID already exists\n   * @param to The address that will own the minted token\n   * @param tokenId uint256 ID of the token to be minted by the msg.sender\n   */\n  function _mint(address to, uint256 tokenId) internal {\n    require(to != address(0));\n    _addTokenTo(to, tokenId);\n    emit Transfer(address(0), to, tokenId);\n  }\n\n  /**\n   * @dev Internal function to burn a specific token\n   * Reverts if the token does not exist\n   * @param tokenId uint256 ID of the token being burned by the msg.sender\n   */\n  function _burn(address owner, uint256 tokenId) internal {\n    _clearApproval(owner, tokenId);\n    _removeTokenFrom(owner, tokenId);\n    emit Transfer(owner, address(0), tokenId);\n  }\n\n  /**\n   * @dev Internal function to clear current approval of a given token ID\n   * Reverts if the given address is not indeed the owner of the token\n   * @param owner owner of the token\n   * @param tokenId uint256 ID of the token to be transferred\n   */\n  function _clearApproval(address owner, uint256 tokenId) internal {\n    require(ownerOf(tokenId) == owner);\n    if (_tokenApprovals[tokenId] != address(0)) {\n      _tokenApprovals[tokenId] = address(0);\n    }\n  }\n\n  /**\n   * @dev Internal function to add a token ID to the list of a given address\n   * @param to address representing the new owner of the given token ID\n   * @param tokenId uint256 ID of the token to be added to the tokens list of the given address\n   */\n  function _addTokenTo(address to, uint256 tokenId) internal {\n    require(_tokenOwner[tokenId] == address(0));\n    _tokenOwner[tokenId] = to;\n    _ownedTokensCount[to] = _ownedTokensCount[to].add(1);\n  }\n\n  /**\n   * @dev Internal function to remove a token ID from the list of a given address\n   * @param from address representing the previous owner of the given token ID\n   * @param tokenId uint256 ID of the token to be removed from the tokens list of the given address\n   */\n  function _removeTokenFrom(address from, uint256 tokenId) internal {\n    require(ownerOf(tokenId) == from);\n    _ownedTokensCount[from] = _ownedTokensCount[from].sub(1);\n    _tokenOwner[tokenId] = address(0);\n  }\n\n  /**\n   * @dev Internal function to invoke `onERC721Received` on a target address\n   * The call is not executed if the target address is not a contract\n   * @param from address representing the previous owner of the given token ID\n   * @param to target address that will receive the tokens\n   * @param tokenId uint256 ID of the token to be transferred\n   * @param _data bytes optional data to send along with the call\n   * @return whether the call correctly returned the expected magic value\n   */\n  function _checkAndCallSafeTransfer(\n    address from,\n    address to,\n    uint256 tokenId,\n    bytes _data\n  )\n    internal\n    returns (bool)\n  {\n    if (!to.isContract()) {\n      return true;\n    }\n    bytes4 retval = IERC721Receiver(to).onERC721Received(\n      msg.sender, from, tokenId, _data);\n    return (retval == _ERC721_RECEIVED);\n  }\n}\n",
  "sourcePath": "/Users/tyndall/Documents/Projects/asekuro-contracts-reloaded/node_modules/openzeppelin-solidity/contracts/token/ERC721/ERC721.sol",
  "ast": {
    "absolutePath": "/Users/tyndall/Documents/Projects/asekuro-contracts-reloaded/node_modules/openzeppelin-solidity/contracts/token/ERC721/ERC721.sol",
    "exportedSymbols": {
      "ERC721": [
        3986
      ]
    },
    "id": 3987,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 3443,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:22"
      },
      {
        "absolutePath": "/Users/tyndall/Documents/Projects/asekuro-contracts-reloaded/node_modules/openzeppelin-solidity/contracts/token/ERC721/IERC721.sol",
        "file": "./IERC721.sol",
        "id": 3444,
        "nodeType": "ImportDirective",
        "scope": 3987,
        "sourceUnit": 4524,
        "src": "26:23:22",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/Users/tyndall/Documents/Projects/asekuro-contracts-reloaded/node_modules/openzeppelin-solidity/contracts/token/ERC721/IERC721Receiver.sol",
        "file": "./IERC721Receiver.sol",
        "id": 3445,
        "nodeType": "ImportDirective",
        "scope": 3987,
        "sourceUnit": 4590,
        "src": "50:31:22",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/Users/tyndall/Documents/Projects/asekuro-contracts-reloaded/node_modules/openzeppelin-solidity/contracts/math/SafeMath.sol",
        "file": "../../math/SafeMath.sol",
        "id": 3446,
        "nodeType": "ImportDirective",
        "scope": 3987,
        "sourceUnit": 2672,
        "src": "82:33:22",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/Users/tyndall/Documents/Projects/asekuro-contracts-reloaded/node_modules/openzeppelin-solidity/contracts/utils/Address.sol",
        "file": "../../utils/Address.sol",
        "id": 3447,
        "nodeType": "ImportDirective",
        "scope": 3987,
        "sourceUnit": 4609,
        "src": "116:33:22",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/Users/tyndall/Documents/Projects/asekuro-contracts-reloaded/node_modules/openzeppelin-solidity/contracts/introspection/ERC165.sol",
        "file": "../../introspection/ERC165.sol",
        "id": 3448,
        "nodeType": "ImportDirective",
        "scope": 3987,
        "sourceUnit": 2466,
        "src": "150:40:22",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 3449,
              "name": "ERC165",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 2465,
              "src": "359:6:22",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_ERC165_$2465",
                "typeString": "contract ERC165"
              }
            },
            "id": 3450,
            "nodeType": "InheritanceSpecifier",
            "src": "359:6:22"
          },
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 3451,
              "name": "IERC721",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 4523,
              "src": "367:7:22",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_IERC721_$4523",
                "typeString": "contract IERC721"
              }
            },
            "id": 3452,
            "nodeType": "InheritanceSpecifier",
            "src": "367:7:22"
          }
        ],
        "contractDependencies": [
          2465,
          2475,
          4523
        ],
        "contractKind": "contract",
        "documentation": "@title ERC721 Non-Fungible Token Standard basic implementation\n@dev see https://github.com/ethereum/EIPs/blob/master/EIPS/eip-721.md",
        "fullyImplemented": true,
        "id": 3986,
        "linearizedBaseContracts": [
          3986,
          4523,
          2465,
          2475
        ],
        "name": "ERC721",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "id": 3455,
            "libraryName": {
              "contractScope": null,
              "id": 3453,
              "name": "SafeMath",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 2671,
              "src": "386:8:22",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_SafeMath_$2671",
                "typeString": "library SafeMath"
              }
            },
            "nodeType": "UsingForDirective",
            "src": "380:27:22",
            "typeName": {
              "id": 3454,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "399:7:22",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            }
          },
          {
            "id": 3458,
            "libraryName": {
              "contractScope": null,
              "id": 3456,
              "name": "Address",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 4608,
              "src": "416:7:22",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_Address_$4608",
                "typeString": "library Address"
              }
            },
            "nodeType": "UsingForDirective",
            "src": "410:26:22",
            "typeName": {
              "id": 3457,
              "name": "address",
              "nodeType": "ElementaryTypeName",
              "src": "428:7:22",
              "typeDescriptions": {
                "typeIdentifier": "t_address",
                "typeString": "address"
              }
            }
          },
          {
            "constant": true,
            "id": 3461,
            "name": "_ERC721_RECEIVED",
            "nodeType": "VariableDeclaration",
            "scope": 3986,
            "src": "608:53:22",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_bytes4",
              "typeString": "bytes4"
            },
            "typeName": {
              "id": 3459,
              "name": "bytes4",
              "nodeType": "ElementaryTypeName",
              "src": "608:6:22",
              "typeDescriptions": {
                "typeIdentifier": "t_bytes4",
                "typeString": "bytes4"
              }
            },
            "value": {
              "argumentTypes": null,
              "hexValue": "30783135306237613032",
              "id": 3460,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "651:10:22",
              "subdenomination": null,
              "typeDescriptions": {
                "typeIdentifier": "t_rational_353073666_by_1",
                "typeString": "int_const 353073666"
              },
              "value": "0x150b7a02"
            },
            "visibility": "private"
          },
          {
            "constant": false,
            "id": 3465,
            "name": "_tokenOwner",
            "nodeType": "VariableDeclaration",
            "scope": 3986,
            "src": "702:48:22",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_uint256_$_t_address_$",
              "typeString": "mapping(uint256 => address)"
            },
            "typeName": {
              "id": 3464,
              "keyType": {
                "id": 3462,
                "name": "uint256",
                "nodeType": "ElementaryTypeName",
                "src": "711:7:22",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              },
              "nodeType": "Mapping",
              "src": "702:28:22",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_uint256_$_t_address_$",
                "typeString": "mapping(uint256 => address)"
              },
              "valueType": {
                "id": 3463,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "722:7:22",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              }
            },
            "value": null,
            "visibility": "private"
          },
          {
            "constant": false,
            "id": 3469,
            "name": "_tokenApprovals",
            "nodeType": "VariableDeclaration",
            "scope": 3986,
            "src": "802:52:22",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_uint256_$_t_address_$",
              "typeString": "mapping(uint256 => address)"
            },
            "typeName": {
              "id": 3468,
              "keyType": {
                "id": 3466,
                "name": "uint256",
                "nodeType": "ElementaryTypeName",
                "src": "811:7:22",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              },
              "nodeType": "Mapping",
              "src": "802:28:22",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_uint256_$_t_address_$",
                "typeString": "mapping(uint256 => address)"
              },
              "valueType": {
                "id": 3467,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "822:7:22",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              }
            },
            "value": null,
            "visibility": "private"
          },
          {
            "constant": false,
            "id": 3473,
            "name": "_ownedTokensCount",
            "nodeType": "VariableDeclaration",
            "scope": 3986,
            "src": "908:54:22",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
              "typeString": "mapping(address => uint256)"
            },
            "typeName": {
              "id": 3472,
              "keyType": {
                "id": 3470,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "917:7:22",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "nodeType": "Mapping",
              "src": "908:28:22",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                "typeString": "mapping(address => uint256)"
              },
              "valueType": {
                "id": 3471,
                "name": "uint256",
                "nodeType": "ElementaryTypeName",
                "src": "928:7:22",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              }
            },
            "value": null,
            "visibility": "private"
          },
          {
            "constant": false,
            "id": 3479,
            "name": "_operatorApprovals",
            "nodeType": "VariableDeclaration",
            "scope": 3986,
            "src": "1013:73:22",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_address_$_t_bool_$_$",
              "typeString": "mapping(address => mapping(address => bool))"
            },
            "typeName": {
              "id": 3478,
              "keyType": {
                "id": 3474,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "1022:7:22",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "nodeType": "Mapping",
              "src": "1013:46:22",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_address_$_t_bool_$_$",
                "typeString": "mapping(address => mapping(address => bool))"
              },
              "valueType": {
                "id": 3477,
                "keyType": {
                  "id": 3475,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "1042:7:22",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  }
                },
                "nodeType": "Mapping",
                "src": "1033:25:22",
                "typeDescriptions": {
                  "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                  "typeString": "mapping(address => bool)"
                },
                "valueType": {
                  "id": 3476,
                  "name": "bool",
                  "nodeType": "ElementaryTypeName",
                  "src": "1053:4:22",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  }
                }
              }
            },
            "value": null,
            "visibility": "private"
          },
          {
            "constant": true,
            "id": 3482,
            "name": "_InterfaceId_ERC721",
            "nodeType": "VariableDeclaration",
            "scope": 3986,
            "src": "1091:56:22",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_bytes4",
              "typeString": "bytes4"
            },
            "typeName": {
              "id": 3480,
              "name": "bytes4",
              "nodeType": "ElementaryTypeName",
              "src": "1091:6:22",
              "typeDescriptions": {
                "typeIdentifier": "t_bytes4",
                "typeString": "bytes4"
              }
            },
            "value": {
              "argumentTypes": null,
              "hexValue": "30783830616335386364",
              "id": 3481,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "1137:10:22",
              "subdenomination": null,
              "typeDescriptions": {
                "typeIdentifier": "t_rational_2158778573_by_1",
                "typeString": "int_const 2158778573"
              },
              "value": "0x80ac58cd"
            },
            "visibility": "private"
          },
          {
            "body": {
              "id": 3489,
              "nodeType": "Block",
              "src": "1754:123:22",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 3486,
                        "name": "_InterfaceId_ERC721",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3482,
                        "src": "1852:19:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes4",
                          "typeString": "bytes4"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bytes4",
                          "typeString": "bytes4"
                        }
                      ],
                      "id": 3485,
                      "name": "_registerInterface",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 2464,
                      "src": "1833:18:22",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_bytes4_$returns$__$",
                        "typeString": "function (bytes4)"
                      }
                    },
                    "id": 3487,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1833:39:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 3488,
                  "nodeType": "ExpressionStatement",
                  "src": "1833:39:22"
                }
              ]
            },
            "documentation": null,
            "id": 3490,
            "implemented": true,
            "isConstructor": true,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 3483,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1738:2:22"
            },
            "payable": false,
            "returnParameters": {
              "id": 3484,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1754:0:22"
            },
            "scope": 3986,
            "src": "1727:150:22",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 3509,
              "nodeType": "Block",
              "src": "2132:76:22",
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
                        "id": 3502,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 3498,
                          "name": "owner",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 3492,
                          "src": "2146:5:22",
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
                              "id": 3500,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "2163:1:22",
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
                            "id": 3499,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "2155:7:22",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_address_$",
                              "typeString": "type(address)"
                            },
                            "typeName": "address"
                          },
                          "id": 3501,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2155:10:22",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "src": "2146:19:22",
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
                      "id": 3497,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        4626,
                        4627
                      ],
                      "referencedDeclaration": 4626,
                      "src": "2138:7:22",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 3503,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2138:28:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 3504,
                  "nodeType": "ExpressionStatement",
                  "src": "2138:28:22"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "baseExpression": {
                      "argumentTypes": null,
                      "id": 3505,
                      "name": "_ownedTokensCount",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 3473,
                      "src": "2179:17:22",
                      "typeDescriptions": {
                        "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                        "typeString": "mapping(address => uint256)"
                      }
                    },
                    "id": 3507,
                    "indexExpression": {
                      "argumentTypes": null,
                      "id": 3506,
                      "name": "owner",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 3492,
                      "src": "2197:5:22",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "IndexAccess",
                    "src": "2179:24:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 3496,
                  "id": 3508,
                  "nodeType": "Return",
                  "src": "2172:31:22"
                }
              ]
            },
            "documentation": "@dev Gets the balance of the specified address\n@param owner address to query the balance of\n@return uint256 representing the amount owned by the passed address",
            "id": 3510,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "balanceOf",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 3493,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3492,
                  "name": "owner",
                  "nodeType": "VariableDeclaration",
                  "scope": 3510,
                  "src": "2087:13:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 3491,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2087:7:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2086:15:22"
            },
            "payable": false,
            "returnParameters": {
              "id": 3496,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3495,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 3510,
                  "src": "2123:7:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 3494,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2123:7:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2122:9:22"
            },
            "scope": 3986,
            "src": "2068:140:22",
            "stateMutability": "view",
            "superFunction": 4456,
            "visibility": "public"
          },
          {
            "body": {
              "id": 3533,
              "nodeType": "Block",
              "src": "2484:99:22",
              "statements": [
                {
                  "assignments": [
                    3518
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 3518,
                      "name": "owner",
                      "nodeType": "VariableDeclaration",
                      "scope": 3534,
                      "src": "2490:13:22",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      },
                      "typeName": {
                        "id": 3517,
                        "name": "address",
                        "nodeType": "ElementaryTypeName",
                        "src": "2490:7:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 3522,
                  "initialValue": {
                    "argumentTypes": null,
                    "baseExpression": {
                      "argumentTypes": null,
                      "id": 3519,
                      "name": "_tokenOwner",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 3465,
                      "src": "2506:11:22",
                      "typeDescriptions": {
                        "typeIdentifier": "t_mapping$_t_uint256_$_t_address_$",
                        "typeString": "mapping(uint256 => address)"
                      }
                    },
                    "id": 3521,
                    "indexExpression": {
                      "argumentTypes": null,
                      "id": 3520,
                      "name": "tokenId",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 3512,
                      "src": "2518:7:22",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "IndexAccess",
                    "src": "2506:20:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2490:36:22"
                },
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
                        "id": 3528,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 3524,
                          "name": "owner",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 3518,
                          "src": "2540:5:22",
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
                              "id": 3526,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "2557:1:22",
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
                            "id": 3525,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "2549:7:22",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_address_$",
                              "typeString": "type(address)"
                            },
                            "typeName": "address"
                          },
                          "id": 3527,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2549:10:22",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "src": "2540:19:22",
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
                      "id": 3523,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        4626,
                        4627
                      ],
                      "referencedDeclaration": 4626,
                      "src": "2532:7:22",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 3529,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2532:28:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 3530,
                  "nodeType": "ExpressionStatement",
                  "src": "2532:28:22"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 3531,
                    "name": "owner",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 3518,
                    "src": "2573:5:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "functionReturnParameters": 3516,
                  "id": 3532,
                  "nodeType": "Return",
                  "src": "2566:12:22"
                }
              ]
            },
            "documentation": "@dev Gets the owner of the specified token ID\n@param tokenId uint256 ID of the token to query the owner of\n@return owner address currently marked as the owner of the given token ID",
            "id": 3534,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "ownerOf",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 3513,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3512,
                  "name": "tokenId",
                  "nodeType": "VariableDeclaration",
                  "scope": 3534,
                  "src": "2437:15:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 3511,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2437:7:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2436:17:22"
            },
            "payable": false,
            "returnParameters": {
              "id": 3516,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3515,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 3534,
                  "src": "2475:7:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 3514,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2475:7:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2474:9:22"
            },
            "scope": 3986,
            "src": "2420:163:22",
            "stateMutability": "view",
            "superFunction": 4463,
            "visibility": "public"
          },
          {
            "body": {
              "id": 3578,
              "nodeType": "Block",
              "src": "3039:217:22",
              "statements": [
                {
                  "assignments": [
                    3542
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 3542,
                      "name": "owner",
                      "nodeType": "VariableDeclaration",
                      "scope": 3579,
                      "src": "3045:13:22",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      },
                      "typeName": {
                        "id": 3541,
                        "name": "address",
                        "nodeType": "ElementaryTypeName",
                        "src": "3045:7:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 3546,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 3544,
                        "name": "tokenId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3538,
                        "src": "3069:7:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 3543,
                      "name": "ownerOf",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        3534
                      ],
                      "referencedDeclaration": 3534,
                      "src": "3061:7:22",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$_t_uint256_$returns$_t_address_$",
                        "typeString": "function (uint256) view returns (address)"
                      }
                    },
                    "id": 3545,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3061:16:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "3045:32:22"
                },
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
                        "id": 3550,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 3548,
                          "name": "to",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 3536,
                          "src": "3091:2:22",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "!=",
                        "rightExpression": {
                          "argumentTypes": null,
                          "id": 3549,
                          "name": "owner",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 3542,
                          "src": "3097:5:22",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "src": "3091:11:22",
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
                      "id": 3547,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        4626,
                        4627
                      ],
                      "referencedDeclaration": 4626,
                      "src": "3083:7:22",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 3551,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3083:20:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 3552,
                  "nodeType": "ExpressionStatement",
                  "src": "3083:20:22"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        "id": 3563,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          "id": 3557,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 3554,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 4623,
                              "src": "3117:3:22",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 3555,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "3117:10:22",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "==",
                          "rightExpression": {
                            "argumentTypes": null,
                            "id": 3556,
                            "name": "owner",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 3542,
                            "src": "3131:5:22",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "src": "3117:19:22",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "||",
                        "rightExpression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "id": 3559,
                              "name": "owner",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 3542,
                              "src": "3157:5:22",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            {
                              "argumentTypes": null,
                              "expression": {
                                "argumentTypes": null,
                                "id": 3560,
                                "name": "msg",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 4623,
                                "src": "3164:3:22",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_message",
                                  "typeString": "msg"
                                }
                              },
                              "id": 3561,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "sender",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "3164:10:22",
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
                            "id": 3558,
                            "name": "isApprovedForAll",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [
                              3644
                            ],
                            "referencedDeclaration": 3644,
                            "src": "3140:16:22",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_view$_t_address_$_t_address_$returns$_t_bool_$",
                              "typeString": "function (address,address) view returns (bool)"
                            }
                          },
                          "id": 3562,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "3140:35:22",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "src": "3117:58:22",
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
                      "id": 3553,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        4626,
                        4627
                      ],
                      "referencedDeclaration": 4626,
                      "src": "3109:7:22",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 3564,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3109:67:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 3565,
                  "nodeType": "ExpressionStatement",
                  "src": "3109:67:22"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 3570,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 3566,
                        "name": "_tokenApprovals",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3469,
                        "src": "3183:15:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_uint256_$_t_address_$",
                          "typeString": "mapping(uint256 => address)"
                        }
                      },
                      "id": 3568,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 3567,
                        "name": "tokenId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3538,
                        "src": "3199:7:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "3183:24:22",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 3569,
                      "name": "to",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 3536,
                      "src": "3210:2:22",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "3183:29:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 3571,
                  "nodeType": "ExpressionStatement",
                  "src": "3183:29:22"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 3573,
                        "name": "owner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3542,
                        "src": "3232:5:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 3574,
                        "name": "to",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3536,
                        "src": "3239:2:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 3575,
                        "name": "tokenId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3538,
                        "src": "3243:7:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
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
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 3572,
                      "name": "Approval",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 4441,
                      "src": "3223:8:22",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,address,uint256)"
                      }
                    },
                    "id": 3576,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3223:28:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 3577,
                  "nodeType": "EmitStatement",
                  "src": "3218:33:22"
                }
              ]
            },
            "documentation": "@dev Approves another address to transfer the given token ID\nThe zero address indicates there is no approved address.\nThere can only be one approved address per token at a given time.\nCan only be called by the token owner or an approved operator.\n@param to address to be approved for the given token ID\n@param tokenId uint256 ID of the token to be approved",
            "id": 3579,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "approve",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 3539,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3536,
                  "name": "to",
                  "nodeType": "VariableDeclaration",
                  "scope": 3579,
                  "src": "3003:10:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 3535,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3003:7:22",
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
                  "id": 3538,
                  "name": "tokenId",
                  "nodeType": "VariableDeclaration",
                  "scope": 3579,
                  "src": "3015:15:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 3537,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3015:7:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3002:29:22"
            },
            "payable": false,
            "returnParameters": {
              "id": 3540,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3039:0:22"
            },
            "scope": 3986,
            "src": "2986:270:22",
            "stateMutability": "nonpayable",
            "superFunction": 4470,
            "visibility": "public"
          },
          {
            "body": {
              "id": 3596,
              "nodeType": "Block",
              "src": "3595:73:22",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 3588,
                            "name": "tokenId",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 3581,
                            "src": "3617:7:22",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          ],
                          "id": 3587,
                          "name": "_exists",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 3755,
                          "src": "3609:7:22",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_view$_t_uint256_$returns$_t_bool_$",
                            "typeString": "function (uint256) view returns (bool)"
                          }
                        },
                        "id": 3589,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "3609:16:22",
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
                      "id": 3586,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        4626,
                        4627
                      ],
                      "referencedDeclaration": 4626,
                      "src": "3601:7:22",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 3590,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3601:25:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 3591,
                  "nodeType": "ExpressionStatement",
                  "src": "3601:25:22"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "baseExpression": {
                      "argumentTypes": null,
                      "id": 3592,
                      "name": "_tokenApprovals",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 3469,
                      "src": "3639:15:22",
                      "typeDescriptions": {
                        "typeIdentifier": "t_mapping$_t_uint256_$_t_address_$",
                        "typeString": "mapping(uint256 => address)"
                      }
                    },
                    "id": 3594,
                    "indexExpression": {
                      "argumentTypes": null,
                      "id": 3593,
                      "name": "tokenId",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 3581,
                      "src": "3655:7:22",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "IndexAccess",
                    "src": "3639:24:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "functionReturnParameters": 3585,
                  "id": 3595,
                  "nodeType": "Return",
                  "src": "3632:31:22"
                }
              ]
            },
            "documentation": "@dev Gets the approved address for a token ID, or zero if no address set\nReverts if the token ID does not exist.\n@param tokenId uint256 ID of the token to query the approval of\n@return address currently approved for the given token ID",
            "id": 3597,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getApproved",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 3582,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3581,
                  "name": "tokenId",
                  "nodeType": "VariableDeclaration",
                  "scope": 3597,
                  "src": "3548:15:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 3580,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3548:7:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3547:17:22"
            },
            "payable": false,
            "returnParameters": {
              "id": 3585,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3584,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 3597,
                  "src": "3586:7:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 3583,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3586:7:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3585:9:22"
            },
            "scope": 3986,
            "src": "3527:141:22",
            "stateMutability": "view",
            "superFunction": 4477,
            "visibility": "public"
          },
          {
            "body": {
              "id": 3627,
              "nodeType": "Block",
              "src": "4007:138:22",
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
                        "id": 3608,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 3605,
                          "name": "to",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 3599,
                          "src": "4021:2:22",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "!=",
                        "rightExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 3606,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 4623,
                            "src": "4027:3:22",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 3607,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "4027:10:22",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "src": "4021:16:22",
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
                      "id": 3604,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        4626,
                        4627
                      ],
                      "referencedDeclaration": 4626,
                      "src": "4013:7:22",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 3609,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4013:25:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 3610,
                  "nodeType": "ExpressionStatement",
                  "src": "4013:25:22"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 3618,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 3611,
                          "name": "_operatorApprovals",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 3479,
                          "src": "4044:18:22",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_address_$_t_bool_$_$",
                            "typeString": "mapping(address => mapping(address => bool))"
                          }
                        },
                        "id": 3615,
                        "indexExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 3612,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 4623,
                            "src": "4063:3:22",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 3613,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "4063:10:22",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "4044:30:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                          "typeString": "mapping(address => bool)"
                        }
                      },
                      "id": 3616,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 3614,
                        "name": "to",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3599,
                        "src": "4075:2:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "4044:34:22",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 3617,
                      "name": "approved",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 3601,
                      "src": "4081:8:22",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "src": "4044:45:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 3619,
                  "nodeType": "ExpressionStatement",
                  "src": "4044:45:22"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 3621,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4623,
                          "src": "4115:3:22",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 3622,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "4115:10:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 3623,
                        "name": "to",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3599,
                        "src": "4127:2:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 3624,
                        "name": "approved",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3601,
                        "src": "4131:8:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
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
                        },
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 3620,
                      "name": "ApprovalForAll",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 4449,
                      "src": "4100:14:22",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$_t_bool_$returns$__$",
                        "typeString": "function (address,address,bool)"
                      }
                    },
                    "id": 3625,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4100:40:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 3626,
                  "nodeType": "EmitStatement",
                  "src": "4095:45:22"
                }
              ]
            },
            "documentation": "@dev Sets or unsets the approval of a given operator\nAn operator is allowed to transfer all tokens of the sender on their behalf\n@param to operator address to set the approval\n@param approved representing the status of the approval to be set",
            "id": 3628,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "setApprovalForAll",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 3602,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3599,
                  "name": "to",
                  "nodeType": "VariableDeclaration",
                  "scope": 3628,
                  "src": "3973:10:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 3598,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3973:7:22",
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
                  "id": 3601,
                  "name": "approved",
                  "nodeType": "VariableDeclaration",
                  "scope": 3628,
                  "src": "3985:13:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 3600,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "3985:4:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3972:27:22"
            },
            "payable": false,
            "returnParameters": {
              "id": 3603,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "4007:0:22"
            },
            "scope": 3986,
            "src": "3946:199:22",
            "stateMutability": "nonpayable",
            "superFunction": 4484,
            "visibility": "public"
          },
          {
            "body": {
              "id": 3643,
              "nodeType": "Block",
              "src": "4564:53:22",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "baseExpression": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 3637,
                        "name": "_operatorApprovals",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3479,
                        "src": "4577:18:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_address_$_t_bool_$_$",
                          "typeString": "mapping(address => mapping(address => bool))"
                        }
                      },
                      "id": 3639,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 3638,
                        "name": "owner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3630,
                        "src": "4596:5:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "IndexAccess",
                      "src": "4577:25:22",
                      "typeDescriptions": {
                        "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                        "typeString": "mapping(address => bool)"
                      }
                    },
                    "id": 3641,
                    "indexExpression": {
                      "argumentTypes": null,
                      "id": 3640,
                      "name": "operator",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 3632,
                      "src": "4603:8:22",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "IndexAccess",
                    "src": "4577:35:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 3636,
                  "id": 3642,
                  "nodeType": "Return",
                  "src": "4570:42:22"
                }
              ]
            },
            "documentation": "@dev Tells whether an operator is approved by a given owner\n@param owner owner address which you want to query the approval of\n@param operator operator address which you want to query the approval of\n@return bool whether the given operator is approved by the given owner",
            "id": 3644,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "isApprovedForAll",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 3633,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3630,
                  "name": "owner",
                  "nodeType": "VariableDeclaration",
                  "scope": 3644,
                  "src": "4483:13:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 3629,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "4483:7:22",
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
                  "id": 3632,
                  "name": "operator",
                  "nodeType": "VariableDeclaration",
                  "scope": 3644,
                  "src": "4502:16:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 3631,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "4502:7:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "4477:45:22"
            },
            "payable": false,
            "returnParameters": {
              "id": 3636,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3635,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 3644,
                  "src": "4556:4:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 3634,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "4556:4:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "4555:6:22"
            },
            "scope": 3986,
            "src": "4452:165:22",
            "stateMutability": "view",
            "superFunction": 4493,
            "visibility": "public"
          },
          {
            "body": {
              "id": 3690,
              "nodeType": "Block",
              "src": "5126:232:22",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 3655,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 4623,
                              "src": "5159:3:22",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 3656,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "5159:10:22",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 3657,
                            "name": "tokenId",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 3650,
                            "src": "5171:7:22",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
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
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          ],
                          "id": 3654,
                          "name": "_isApprovedOrOwner",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 3787,
                          "src": "5140:18:22",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_view$_t_address_$_t_uint256_$returns$_t_bool_$",
                            "typeString": "function (address,uint256) view returns (bool)"
                          }
                        },
                        "id": 3658,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "5140:39:22",
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
                      "id": 3653,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        4626,
                        4627
                      ],
                      "referencedDeclaration": 4626,
                      "src": "5132:7:22",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 3659,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5132:48:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 3660,
                  "nodeType": "ExpressionStatement",
                  "src": "5132:48:22"
                },
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
                        "id": 3666,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 3662,
                          "name": "to",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 3648,
                          "src": "5194:2:22",
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
                              "id": 3664,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "5208:1:22",
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
                            "id": 3663,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "5200:7:22",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_address_$",
                              "typeString": "type(address)"
                            },
                            "typeName": "address"
                          },
                          "id": 3665,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "5200:10:22",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "src": "5194:16:22",
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
                      "id": 3661,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        4626,
                        4627
                      ],
                      "referencedDeclaration": 4626,
                      "src": "5186:7:22",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 3667,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5186:25:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 3668,
                  "nodeType": "ExpressionStatement",
                  "src": "5186:25:22"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 3670,
                        "name": "from",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3646,
                        "src": "5233:4:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 3671,
                        "name": "tokenId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3650,
                        "src": "5239:7:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
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
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 3669,
                      "name": "_clearApproval",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 3875,
                      "src": "5218:14:22",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,uint256)"
                      }
                    },
                    "id": 3672,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5218:29:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 3673,
                  "nodeType": "ExpressionStatement",
                  "src": "5218:29:22"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 3675,
                        "name": "from",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3646,
                        "src": "5270:4:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 3676,
                        "name": "tokenId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3650,
                        "src": "5276:7:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
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
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 3674,
                      "name": "_removeTokenFrom",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 3945,
                      "src": "5253:16:22",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,uint256)"
                      }
                    },
                    "id": 3677,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5253:31:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 3678,
                  "nodeType": "ExpressionStatement",
                  "src": "5253:31:22"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 3680,
                        "name": "to",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3648,
                        "src": "5302:2:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 3681,
                        "name": "tokenId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3650,
                        "src": "5306:7:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
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
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 3679,
                      "name": "_addTokenTo",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 3910,
                      "src": "5290:11:22",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,uint256)"
                      }
                    },
                    "id": 3682,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5290:24:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 3683,
                  "nodeType": "ExpressionStatement",
                  "src": "5290:24:22"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 3685,
                        "name": "from",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3646,
                        "src": "5335:4:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 3686,
                        "name": "to",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3648,
                        "src": "5341:2:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 3687,
                        "name": "tokenId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3650,
                        "src": "5345:7:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
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
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 3684,
                      "name": "Transfer",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 4433,
                      "src": "5326:8:22",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,address,uint256)"
                      }
                    },
                    "id": 3688,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5326:27:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 3689,
                  "nodeType": "EmitStatement",
                  "src": "5321:32:22"
                }
              ]
            },
            "documentation": "@dev Transfers the ownership of a given token ID to another address\nUsage of this method is discouraged, use `safeTransferFrom` whenever possible\nRequires the msg sender to be the owner, approved, or operator\n@param from current owner of the token\n@param to address to receive the ownership of the given token ID\n@param tokenId uint256 ID of the token to be transferred",
            "id": 3691,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "transferFrom",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 3651,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3646,
                  "name": "from",
                  "nodeType": "VariableDeclaration",
                  "scope": 3691,
                  "src": "5059:12:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 3645,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "5059:7:22",
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
                  "id": 3648,
                  "name": "to",
                  "nodeType": "VariableDeclaration",
                  "scope": 3691,
                  "src": "5077:10:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 3647,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "5077:7:22",
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
                  "id": 3650,
                  "name": "tokenId",
                  "nodeType": "VariableDeclaration",
                  "scope": 3691,
                  "src": "5093:15:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 3649,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "5093:7:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "5053:59:22"
            },
            "payable": false,
            "returnParameters": {
              "id": 3652,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "5126:0:22"
            },
            "scope": 3986,
            "src": "5032:326:22",
            "stateMutability": "nonpayable",
            "superFunction": 4502,
            "visibility": "public"
          },
          {
            "body": {
              "id": 3707,
              "nodeType": "Block",
              "src": "6069:95:22",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 3701,
                        "name": "from",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3693,
                        "src": "6137:4:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 3702,
                        "name": "to",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3695,
                        "src": "6143:2:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 3703,
                        "name": "tokenId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3697,
                        "src": "6147:7:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "",
                        "id": 3704,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "6156:2:22",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",
                          "typeString": "literal_string \"\""
                        },
                        "value": ""
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
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",
                          "typeString": "literal_string \"\""
                        }
                      ],
                      "id": 3700,
                      "name": "safeTransferFrom",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        3708,
                        3735
                      ],
                      "referencedDeclaration": 3735,
                      "src": "6120:16:22",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_address_$_t_uint256_$_t_bytes_memory_ptr_$returns$__$",
                        "typeString": "function (address,address,uint256,bytes memory)"
                      }
                    },
                    "id": 3705,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6120:39:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 3706,
                  "nodeType": "ExpressionStatement",
                  "src": "6120:39:22"
                }
              ]
            },
            "documentation": "@dev Safely transfers the ownership of a given token ID to another address\nIf the target address is a contract, it must implement `onERC721Received`,\nwhich is called upon a safe transfer, and return the magic value\n`bytes4(keccak256(\"onERC721Received(address,address,uint256,bytes)\"))`; otherwise,\nthe transfer is reverted.\n   * Requires the msg sender to be the owner, approved, or operator\n@param from current owner of the token\n@param to address to receive the ownership of the given token ID\n@param tokenId uint256 ID of the token to be transferred",
            "id": 3708,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "safeTransferFrom",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 3698,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3693,
                  "name": "from",
                  "nodeType": "VariableDeclaration",
                  "scope": 3708,
                  "src": "6002:12:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 3692,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "6002:7:22",
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
                  "id": 3695,
                  "name": "to",
                  "nodeType": "VariableDeclaration",
                  "scope": 3708,
                  "src": "6020:10:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 3694,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "6020:7:22",
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
                  "id": 3697,
                  "name": "tokenId",
                  "nodeType": "VariableDeclaration",
                  "scope": 3708,
                  "src": "6036:15:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 3696,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "6036:7:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "5996:59:22"
            },
            "payable": false,
            "returnParameters": {
              "id": 3699,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "6069:0:22"
            },
            "scope": 3986,
            "src": "5971:193:22",
            "stateMutability": "nonpayable",
            "superFunction": 4511,
            "visibility": "public"
          },
          {
            "body": {
              "id": 3734,
              "nodeType": "Block",
              "src": "6958:153:22",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 3720,
                        "name": "from",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3710,
                        "src": "6977:4:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 3721,
                        "name": "to",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3712,
                        "src": "6983:2:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 3722,
                        "name": "tokenId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3714,
                        "src": "6987:7:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
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
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 3719,
                      "name": "transferFrom",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        3691
                      ],
                      "referencedDeclaration": 3691,
                      "src": "6964:12:22",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,address,uint256)"
                      }
                    },
                    "id": 3723,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6964:31:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 3724,
                  "nodeType": "ExpressionStatement",
                  "src": "6964:31:22"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 3727,
                            "name": "from",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 3710,
                            "src": "7080:4:22",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 3728,
                            "name": "to",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 3712,
                            "src": "7086:2:22",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 3729,
                            "name": "tokenId",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 3714,
                            "src": "7090:7:22",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 3730,
                            "name": "_data",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 3716,
                            "src": "7099:5:22",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes_memory_ptr",
                              "typeString": "bytes memory"
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
                            },
                            {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            {
                              "typeIdentifier": "t_bytes_memory_ptr",
                              "typeString": "bytes memory"
                            }
                          ],
                          "id": 3726,
                          "name": "_checkAndCallSafeTransfer",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 3985,
                          "src": "7054:25:22",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_address_$_t_uint256_$_t_bytes_memory_ptr_$returns$_t_bool_$",
                            "typeString": "function (address,address,uint256,bytes memory) returns (bool)"
                          }
                        },
                        "id": 3731,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "7054:51:22",
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
                      "id": 3725,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        4626,
                        4627
                      ],
                      "referencedDeclaration": 4626,
                      "src": "7046:7:22",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 3732,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "7046:60:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 3733,
                  "nodeType": "ExpressionStatement",
                  "src": "7046:60:22"
                }
              ]
            },
            "documentation": "@dev Safely transfers the ownership of a given token ID to another address\nIf the target address is a contract, it must implement `onERC721Received`,\nwhich is called upon a safe transfer, and return the magic value\n`bytes4(keccak256(\"onERC721Received(address,address,uint256,bytes)\"))`; otherwise,\nthe transfer is reverted.\nRequires the msg sender to be the owner, approved, or operator\n@param from current owner of the token\n@param to address to receive the ownership of the given token ID\n@param tokenId uint256 ID of the token to be transferred\n@param _data bytes data to send along with a safe transfer check",
            "id": 3735,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "safeTransferFrom",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 3717,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3710,
                  "name": "from",
                  "nodeType": "VariableDeclaration",
                  "scope": 3735,
                  "src": "6874:12:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 3709,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "6874:7:22",
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
                  "id": 3712,
                  "name": "to",
                  "nodeType": "VariableDeclaration",
                  "scope": 3735,
                  "src": "6892:10:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 3711,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "6892:7:22",
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
                  "id": 3714,
                  "name": "tokenId",
                  "nodeType": "VariableDeclaration",
                  "scope": 3735,
                  "src": "6908:15:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 3713,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "6908:7:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 3716,
                  "name": "_data",
                  "nodeType": "VariableDeclaration",
                  "scope": 3735,
                  "src": "6929:11:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 3715,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "6929:5:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "6868:76:22"
            },
            "payable": false,
            "returnParameters": {
              "id": 3718,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "6958:0:22"
            },
            "scope": 3986,
            "src": "6843:268:22",
            "stateMutability": "nonpayable",
            "superFunction": 4522,
            "visibility": "public"
          },
          {
            "body": {
              "id": 3754,
              "nodeType": "Block",
              "src": "7351:79:22",
              "statements": [
                {
                  "assignments": [
                    3743
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 3743,
                      "name": "owner",
                      "nodeType": "VariableDeclaration",
                      "scope": 3755,
                      "src": "7357:13:22",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      },
                      "typeName": {
                        "id": 3742,
                        "name": "address",
                        "nodeType": "ElementaryTypeName",
                        "src": "7357:7:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 3747,
                  "initialValue": {
                    "argumentTypes": null,
                    "baseExpression": {
                      "argumentTypes": null,
                      "id": 3744,
                      "name": "_tokenOwner",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 3465,
                      "src": "7373:11:22",
                      "typeDescriptions": {
                        "typeIdentifier": "t_mapping$_t_uint256_$_t_address_$",
                        "typeString": "mapping(uint256 => address)"
                      }
                    },
                    "id": 3746,
                    "indexExpression": {
                      "argumentTypes": null,
                      "id": 3745,
                      "name": "tokenId",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 3737,
                      "src": "7385:7:22",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "IndexAccess",
                    "src": "7373:20:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "7357:36:22"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "id": 3752,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "id": 3748,
                      "name": "owner",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 3743,
                      "src": "7406:5:22",
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
                          "id": 3750,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "7423:1:22",
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
                        "id": 3749,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "7415:7:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_address_$",
                          "typeString": "type(address)"
                        },
                        "typeName": "address"
                      },
                      "id": 3751,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "7415:10:22",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "7406:19:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 3741,
                  "id": 3753,
                  "nodeType": "Return",
                  "src": "7399:26:22"
                }
              ]
            },
            "documentation": "@dev Returns whether the specified token exists\n@param tokenId uint256 ID of the token to query the existence of\n@return whether the token exists",
            "id": 3755,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "_exists",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 3738,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3737,
                  "name": "tokenId",
                  "nodeType": "VariableDeclaration",
                  "scope": 3755,
                  "src": "7305:15:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 3736,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "7305:7:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "7304:17:22"
            },
            "payable": false,
            "returnParameters": {
              "id": 3741,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3740,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 3755,
                  "src": "7345:4:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 3739,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "7345:4:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "7344:6:22"
            },
            "scope": 3986,
            "src": "7288:142:22",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 3786,
              "nodeType": "Block",
              "src": "7892:315:22",
              "statements": [
                {
                  "assignments": [
                    3765
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 3765,
                      "name": "owner",
                      "nodeType": "VariableDeclaration",
                      "scope": 3787,
                      "src": "7898:13:22",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      },
                      "typeName": {
                        "id": 3764,
                        "name": "address",
                        "nodeType": "ElementaryTypeName",
                        "src": "7898:7:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 3769,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 3767,
                        "name": "tokenId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3759,
                        "src": "7922:7:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 3766,
                      "name": "ownerOf",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        3534
                      ],
                      "referencedDeclaration": 3534,
                      "src": "7914:7:22",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$_t_uint256_$returns$_t_address_$",
                        "typeString": "function (uint256) view returns (address)"
                      }
                    },
                    "id": 3768,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "7914:16:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "7898:32:22"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "components": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        "id": 3783,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          "id": 3778,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "commonType": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            },
                            "id": 3772,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "argumentTypes": null,
                              "id": 3770,
                              "name": "spender",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 3757,
                              "src": "8097:7:22",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "==",
                            "rightExpression": {
                              "argumentTypes": null,
                              "id": 3771,
                              "name": "owner",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 3765,
                              "src": "8108:5:22",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "src": "8097:16:22",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "||",
                          "rightExpression": {
                            "argumentTypes": null,
                            "commonType": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            },
                            "id": 3777,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "argumentTypes": null,
                              "arguments": [
                                {
                                  "argumentTypes": null,
                                  "id": 3774,
                                  "name": "tokenId",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 3759,
                                  "src": "8135:7:22",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                ],
                                "id": 3773,
                                "name": "getApproved",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [
                                  3597
                                ],
                                "referencedDeclaration": 3597,
                                "src": "8123:11:22",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_internal_view$_t_uint256_$returns$_t_address_$",
                                  "typeString": "function (uint256) view returns (address)"
                                }
                              },
                              "id": 3775,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "8123:20:22",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "==",
                            "rightExpression": {
                              "argumentTypes": null,
                              "id": 3776,
                              "name": "spender",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 3757,
                              "src": "8147:7:22",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "src": "8123:31:22",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          "src": "8097:57:22",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "||",
                        "rightExpression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "id": 3780,
                              "name": "owner",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 3765,
                              "src": "8181:5:22",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            {
                              "argumentTypes": null,
                              "id": 3781,
                              "name": "spender",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 3757,
                              "src": "8188:7:22",
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
                            "id": 3779,
                            "name": "isApprovedForAll",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [
                              3644
                            ],
                            "referencedDeclaration": 3644,
                            "src": "8164:16:22",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_view$_t_address_$_t_address_$returns$_t_bool_$",
                              "typeString": "function (address,address) view returns (bool)"
                            }
                          },
                          "id": 3782,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "8164:32:22",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "src": "8097:99:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "id": 3784,
                    "isConstant": false,
                    "isInlineArray": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "TupleExpression",
                    "src": "8089:113:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 3763,
                  "id": 3785,
                  "nodeType": "Return",
                  "src": "8082:120:22"
                }
              ]
            },
            "documentation": "@dev Returns whether the given spender can transfer a given token ID\n@param spender address of the spender to query\n@param tokenId uint256 ID of the token to be transferred\n@return bool whether the msg.sender is approved for the given token ID,\n is an operator of the owner, or is the owner of the token",
            "id": 3787,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "_isApprovedOrOwner",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 3760,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3757,
                  "name": "spender",
                  "nodeType": "VariableDeclaration",
                  "scope": 3787,
                  "src": "7808:15:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 3756,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "7808:7:22",
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
                  "id": 3759,
                  "name": "tokenId",
                  "nodeType": "VariableDeclaration",
                  "scope": 3787,
                  "src": "7829:15:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 3758,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "7829:7:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "7802:46:22"
            },
            "payable": false,
            "returnParameters": {
              "id": 3763,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3762,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 3787,
                  "src": "7884:4:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 3761,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "7884:4:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "7883:6:22"
            },
            "scope": 3986,
            "src": "7775:432:22",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 3815,
              "nodeType": "Block",
              "src": "8507:110:22",
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
                        "id": 3799,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 3795,
                          "name": "to",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 3789,
                          "src": "8521:2:22",
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
                              "id": 3797,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "8535:1:22",
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
                            "id": 3796,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "8527:7:22",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_address_$",
                              "typeString": "type(address)"
                            },
                            "typeName": "address"
                          },
                          "id": 3798,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "8527:10:22",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "src": "8521:16:22",
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
                      "id": 3794,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        4626,
                        4627
                      ],
                      "referencedDeclaration": 4626,
                      "src": "8513:7:22",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 3800,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "8513:25:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 3801,
                  "nodeType": "ExpressionStatement",
                  "src": "8513:25:22"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 3803,
                        "name": "to",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3789,
                        "src": "8556:2:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 3804,
                        "name": "tokenId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3791,
                        "src": "8560:7:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
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
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 3802,
                      "name": "_addTokenTo",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 3910,
                      "src": "8544:11:22",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,uint256)"
                      }
                    },
                    "id": 3805,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "8544:24:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 3806,
                  "nodeType": "ExpressionStatement",
                  "src": "8544:24:22"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "hexValue": "30",
                            "id": 3809,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "8596:1:22",
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
                          "id": 3808,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "8588:7:22",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_address_$",
                            "typeString": "type(address)"
                          },
                          "typeName": "address"
                        },
                        "id": 3810,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "8588:10:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 3811,
                        "name": "to",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3789,
                        "src": "8600:2:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 3812,
                        "name": "tokenId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3791,
                        "src": "8604:7:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
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
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 3807,
                      "name": "Transfer",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 4433,
                      "src": "8579:8:22",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,address,uint256)"
                      }
                    },
                    "id": 3813,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "8579:33:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 3814,
                  "nodeType": "EmitStatement",
                  "src": "8574:38:22"
                }
              ]
            },
            "documentation": "@dev Internal function to mint a new token\nReverts if the given token ID already exists\n@param to The address that will own the minted token\n@param tokenId uint256 ID of the token to be minted by the msg.sender",
            "id": 3816,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "_mint",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 3792,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3789,
                  "name": "to",
                  "nodeType": "VariableDeclaration",
                  "scope": 3816,
                  "src": "8469:10:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 3788,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "8469:7:22",
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
                  "id": 3791,
                  "name": "tokenId",
                  "nodeType": "VariableDeclaration",
                  "scope": 3816,
                  "src": "8481:15:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 3790,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "8481:7:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "8468:29:22"
            },
            "payable": false,
            "returnParameters": {
              "id": 3793,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "8507:0:22"
            },
            "scope": 3986,
            "src": "8454:163:22",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 3841,
              "nodeType": "Block",
              "src": "8858:126:22",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 3824,
                        "name": "owner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3818,
                        "src": "8879:5:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 3825,
                        "name": "tokenId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3820,
                        "src": "8886:7:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
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
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 3823,
                      "name": "_clearApproval",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 3875,
                      "src": "8864:14:22",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,uint256)"
                      }
                    },
                    "id": 3826,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "8864:30:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 3827,
                  "nodeType": "ExpressionStatement",
                  "src": "8864:30:22"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 3829,
                        "name": "owner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3818,
                        "src": "8917:5:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 3830,
                        "name": "tokenId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3820,
                        "src": "8924:7:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
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
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 3828,
                      "name": "_removeTokenFrom",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 3945,
                      "src": "8900:16:22",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,uint256)"
                      }
                    },
                    "id": 3831,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "8900:32:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 3832,
                  "nodeType": "ExpressionStatement",
                  "src": "8900:32:22"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 3834,
                        "name": "owner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3818,
                        "src": "8952:5:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "hexValue": "30",
                            "id": 3836,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "8967:1:22",
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
                          "id": 3835,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "8959:7:22",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_address_$",
                            "typeString": "type(address)"
                          },
                          "typeName": "address"
                        },
                        "id": 3837,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "8959:10:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 3838,
                        "name": "tokenId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3820,
                        "src": "8971:7:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
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
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 3833,
                      "name": "Transfer",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 4433,
                      "src": "8943:8:22",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,address,uint256)"
                      }
                    },
                    "id": 3839,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "8943:36:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 3840,
                  "nodeType": "EmitStatement",
                  "src": "8938:41:22"
                }
              ]
            },
            "documentation": "@dev Internal function to burn a specific token\nReverts if the token does not exist\n@param tokenId uint256 ID of the token being burned by the msg.sender",
            "id": 3842,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "_burn",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 3821,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3818,
                  "name": "owner",
                  "nodeType": "VariableDeclaration",
                  "scope": 3842,
                  "src": "8817:13:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 3817,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "8817:7:22",
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
                  "id": 3820,
                  "name": "tokenId",
                  "nodeType": "VariableDeclaration",
                  "scope": 3842,
                  "src": "8832:15:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 3819,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "8832:7:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "8816:32:22"
            },
            "payable": false,
            "returnParameters": {
              "id": 3822,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "8858:0:22"
            },
            "scope": 3986,
            "src": "8802:182:22",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 3874,
              "nodeType": "Block",
              "src": "9309:146:22",
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
                        "id": 3854,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "id": 3851,
                              "name": "tokenId",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 3846,
                              "src": "9331:7:22",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            ],
                            "id": 3850,
                            "name": "ownerOf",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [
                              3534
                            ],
                            "referencedDeclaration": 3534,
                            "src": "9323:7:22",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_view$_t_uint256_$returns$_t_address_$",
                              "typeString": "function (uint256) view returns (address)"
                            }
                          },
                          "id": 3852,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "9323:16:22",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "==",
                        "rightExpression": {
                          "argumentTypes": null,
                          "id": 3853,
                          "name": "owner",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 3844,
                          "src": "9343:5:22",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "src": "9323:25:22",
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
                      "id": 3849,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        4626,
                        4627
                      ],
                      "referencedDeclaration": 4626,
                      "src": "9315:7:22",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 3855,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "9315:34:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 3856,
                  "nodeType": "ExpressionStatement",
                  "src": "9315:34:22"
                },
                {
                  "condition": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "id": 3863,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 3857,
                        "name": "_tokenApprovals",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3469,
                        "src": "9359:15:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_uint256_$_t_address_$",
                          "typeString": "mapping(uint256 => address)"
                        }
                      },
                      "id": 3859,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 3858,
                        "name": "tokenId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3846,
                        "src": "9375:7:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "IndexAccess",
                      "src": "9359:24:22",
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
                          "id": 3861,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "9395:1:22",
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
                        "id": 3860,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "9387:7:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_address_$",
                          "typeString": "type(address)"
                        },
                        "typeName": "address"
                      },
                      "id": 3862,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "9387:10:22",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "9359:38:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": null,
                  "id": 3873,
                  "nodeType": "IfStatement",
                  "src": "9355:96:22",
                  "trueBody": {
                    "id": 3872,
                    "nodeType": "Block",
                    "src": "9399:52:22",
                    "statements": [
                      {
                        "expression": {
                          "argumentTypes": null,
                          "id": 3870,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 3864,
                              "name": "_tokenApprovals",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 3469,
                              "src": "9407:15:22",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_uint256_$_t_address_$",
                                "typeString": "mapping(uint256 => address)"
                              }
                            },
                            "id": 3866,
                            "indexExpression": {
                              "argumentTypes": null,
                              "id": 3865,
                              "name": "tokenId",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 3846,
                              "src": "9423:7:22",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": true,
                            "nodeType": "IndexAccess",
                            "src": "9407:24:22",
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
                                "id": 3868,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "9442:1:22",
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
                              "id": 3867,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "nodeType": "ElementaryTypeNameExpression",
                              "src": "9434:7:22",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_address_$",
                                "typeString": "type(address)"
                              },
                              "typeName": "address"
                            },
                            "id": 3869,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "typeConversion",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "9434:10:22",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "src": "9407:37:22",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "id": 3871,
                        "nodeType": "ExpressionStatement",
                        "src": "9407:37:22"
                      }
                    ]
                  }
                }
              ]
            },
            "documentation": "@dev Internal function to clear current approval of a given token ID\nReverts if the given address is not indeed the owner of the token\n@param owner owner of the token\n@param tokenId uint256 ID of the token to be transferred",
            "id": 3875,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "_clearApproval",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 3847,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3844,
                  "name": "owner",
                  "nodeType": "VariableDeclaration",
                  "scope": 3875,
                  "src": "9268:13:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 3843,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "9268:7:22",
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
                  "id": 3846,
                  "name": "tokenId",
                  "nodeType": "VariableDeclaration",
                  "scope": 3875,
                  "src": "9283:15:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 3845,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "9283:7:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "9267:32:22"
            },
            "payable": false,
            "returnParameters": {
              "id": 3848,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "9309:0:22"
            },
            "scope": 3986,
            "src": "9244:211:22",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 3909,
              "nodeType": "Block",
              "src": "9775:143:22",
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
                        "id": 3889,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "id": 3883,
                            "name": "_tokenOwner",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 3465,
                            "src": "9789:11:22",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_uint256_$_t_address_$",
                              "typeString": "mapping(uint256 => address)"
                            }
                          },
                          "id": 3885,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 3884,
                            "name": "tokenId",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 3879,
                            "src": "9801:7:22",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "9789:20:22",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "==",
                        "rightExpression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "hexValue": "30",
                              "id": 3887,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "9821:1:22",
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
                            "id": 3886,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "9813:7:22",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_address_$",
                              "typeString": "type(address)"
                            },
                            "typeName": "address"
                          },
                          "id": 3888,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "9813:10:22",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "src": "9789:34:22",
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
                      "id": 3882,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        4626,
                        4627
                      ],
                      "referencedDeclaration": 4626,
                      "src": "9781:7:22",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 3890,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "9781:43:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 3891,
                  "nodeType": "ExpressionStatement",
                  "src": "9781:43:22"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 3896,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 3892,
                        "name": "_tokenOwner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3465,
                        "src": "9830:11:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_uint256_$_t_address_$",
                          "typeString": "mapping(uint256 => address)"
                        }
                      },
                      "id": 3894,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 3893,
                        "name": "tokenId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3879,
                        "src": "9842:7:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "9830:20:22",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 3895,
                      "name": "to",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 3877,
                      "src": "9853:2:22",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "9830:25:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 3897,
                  "nodeType": "ExpressionStatement",
                  "src": "9830:25:22"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 3907,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 3898,
                        "name": "_ownedTokensCount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3473,
                        "src": "9861:17:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                          "typeString": "mapping(address => uint256)"
                        }
                      },
                      "id": 3900,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 3899,
                        "name": "to",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3877,
                        "src": "9879:2:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "9861:21:22",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "hexValue": "31",
                          "id": 3905,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "9911:1:22",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_1_by_1",
                            "typeString": "int_const 1"
                          },
                          "value": "1"
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_rational_1_by_1",
                            "typeString": "int_const 1"
                          }
                        ],
                        "expression": {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "id": 3901,
                            "name": "_ownedTokensCount",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 3473,
                            "src": "9885:17:22",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                              "typeString": "mapping(address => uint256)"
                            }
                          },
                          "id": 3903,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 3902,
                            "name": "to",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 3877,
                            "src": "9903:2:22",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "9885:21:22",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 3904,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "add",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 2650,
                        "src": "9885:25:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                          "typeString": "function (uint256,uint256) pure returns (uint256)"
                        }
                      },
                      "id": 3906,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "9885:28:22",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "9861:52:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 3908,
                  "nodeType": "ExpressionStatement",
                  "src": "9861:52:22"
                }
              ]
            },
            "documentation": "@dev Internal function to add a token ID to the list of a given address\n@param to address representing the new owner of the given token ID\n@param tokenId uint256 ID of the token to be added to the tokens list of the given address",
            "id": 3910,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "_addTokenTo",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 3880,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3877,
                  "name": "to",
                  "nodeType": "VariableDeclaration",
                  "scope": 3910,
                  "src": "9737:10:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 3876,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "9737:7:22",
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
                  "id": 3879,
                  "name": "tokenId",
                  "nodeType": "VariableDeclaration",
                  "scope": 3910,
                  "src": "9749:15:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 3878,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "9749:7:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "9736:29:22"
            },
            "payable": false,
            "returnParameters": {
              "id": 3881,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "9775:0:22"
            },
            "scope": 3986,
            "src": "9716:202:22",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 3944,
              "nodeType": "Block",
              "src": "10261:145:22",
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
                        "id": 3922,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "id": 3919,
                              "name": "tokenId",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 3914,
                              "src": "10283:7:22",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            ],
                            "id": 3918,
                            "name": "ownerOf",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [
                              3534
                            ],
                            "referencedDeclaration": 3534,
                            "src": "10275:7:22",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_view$_t_uint256_$returns$_t_address_$",
                              "typeString": "function (uint256) view returns (address)"
                            }
                          },
                          "id": 3920,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "10275:16:22",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "==",
                        "rightExpression": {
                          "argumentTypes": null,
                          "id": 3921,
                          "name": "from",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 3912,
                          "src": "10295:4:22",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "src": "10275:24:22",
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
                      "id": 3917,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        4626,
                        4627
                      ],
                      "referencedDeclaration": 4626,
                      "src": "10267:7:22",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 3923,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "10267:33:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 3924,
                  "nodeType": "ExpressionStatement",
                  "src": "10267:33:22"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 3934,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 3925,
                        "name": "_ownedTokensCount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3473,
                        "src": "10306:17:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                          "typeString": "mapping(address => uint256)"
                        }
                      },
                      "id": 3927,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 3926,
                        "name": "from",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3912,
                        "src": "10324:4:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "10306:23:22",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "hexValue": "31",
                          "id": 3932,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "10360:1:22",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_1_by_1",
                            "typeString": "int_const 1"
                          },
                          "value": "1"
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_rational_1_by_1",
                            "typeString": "int_const 1"
                          }
                        ],
                        "expression": {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "id": 3928,
                            "name": "_ownedTokensCount",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 3473,
                            "src": "10332:17:22",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                              "typeString": "mapping(address => uint256)"
                            }
                          },
                          "id": 3930,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 3929,
                            "name": "from",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 3912,
                            "src": "10350:4:22",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "10332:23:22",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 3931,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sub",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 2626,
                        "src": "10332:27:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                          "typeString": "function (uint256,uint256) pure returns (uint256)"
                        }
                      },
                      "id": 3933,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "10332:30:22",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "10306:56:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 3935,
                  "nodeType": "ExpressionStatement",
                  "src": "10306:56:22"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 3942,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 3936,
                        "name": "_tokenOwner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3465,
                        "src": "10368:11:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_uint256_$_t_address_$",
                          "typeString": "mapping(uint256 => address)"
                        }
                      },
                      "id": 3938,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 3937,
                        "name": "tokenId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3914,
                        "src": "10380:7:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "10368:20:22",
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
                          "id": 3940,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "10399:1:22",
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
                        "id": 3939,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "10391:7:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_address_$",
                          "typeString": "type(address)"
                        },
                        "typeName": "address"
                      },
                      "id": 3941,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "10391:10:22",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "10368:33:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 3943,
                  "nodeType": "ExpressionStatement",
                  "src": "10368:33:22"
                }
              ]
            },
            "documentation": "@dev Internal function to remove a token ID from the list of a given address\n@param from address representing the previous owner of the given token ID\n@param tokenId uint256 ID of the token to be removed from the tokens list of the given address",
            "id": 3945,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "_removeTokenFrom",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 3915,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3912,
                  "name": "from",
                  "nodeType": "VariableDeclaration",
                  "scope": 3945,
                  "src": "10221:12:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 3911,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "10221:7:22",
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
                  "id": 3914,
                  "name": "tokenId",
                  "nodeType": "VariableDeclaration",
                  "scope": 3945,
                  "src": "10235:15:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 3913,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "10235:7:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "10220:31:22"
            },
            "payable": false,
            "returnParameters": {
              "id": 3916,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "10261:0:22"
            },
            "scope": 3986,
            "src": "10195:211:22",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 3984,
              "nodeType": "Block",
              "src": "11054:198:22",
              "statements": [
                {
                  "condition": {
                    "argumentTypes": null,
                    "id": 3961,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "UnaryOperation",
                    "operator": "!",
                    "prefix": true,
                    "src": "11064:16:22",
                    "subExpression": {
                      "argumentTypes": null,
                      "arguments": [],
                      "expression": {
                        "argumentTypes": [],
                        "expression": {
                          "argumentTypes": null,
                          "id": 3958,
                          "name": "to",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 3949,
                          "src": "11065:2:22",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "id": 3959,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "isContract",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 4607,
                        "src": "11065:13:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_view$_t_address_$returns$_t_bool_$bound_to$_t_address_$",
                          "typeString": "function (address) view returns (bool)"
                        }
                      },
                      "id": 3960,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "11065:15:22",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": null,
                  "id": 3965,
                  "nodeType": "IfStatement",
                  "src": "11060:48:22",
                  "trueBody": {
                    "id": 3964,
                    "nodeType": "Block",
                    "src": "11082:26:22",
                    "statements": [
                      {
                        "expression": {
                          "argumentTypes": null,
                          "hexValue": "74727565",
                          "id": 3962,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "bool",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "11097:4:22",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          "value": "true"
                        },
                        "functionReturnParameters": 3957,
                        "id": 3963,
                        "nodeType": "Return",
                        "src": "11090:11:22"
                      }
                    ]
                  }
                },
                {
                  "assignments": [
                    3967
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 3967,
                      "name": "retval",
                      "nodeType": "VariableDeclaration",
                      "scope": 3985,
                      "src": "11113:13:22",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes4",
                        "typeString": "bytes4"
                      },
                      "typeName": {
                        "id": 3966,
                        "name": "bytes4",
                        "nodeType": "ElementaryTypeName",
                        "src": "11113:6:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes4",
                          "typeString": "bytes4"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 3978,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 3972,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4623,
                          "src": "11173:3:22",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 3973,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "11173:10:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 3974,
                        "name": "from",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3947,
                        "src": "11185:4:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 3975,
                        "name": "tokenId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3951,
                        "src": "11191:7:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 3976,
                        "name": "_data",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3953,
                        "src": "11200:5:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
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
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 3969,
                            "name": "to",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 3949,
                            "src": "11145:2:22",
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
                          "id": 3968,
                          "name": "IERC721Receiver",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4589,
                          "src": "11129:15:22",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_contract$_IERC721Receiver_$4589_$",
                            "typeString": "type(contract IERC721Receiver)"
                          }
                        },
                        "id": 3970,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "11129:19:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_IERC721Receiver_$4589",
                          "typeString": "contract IERC721Receiver"
                        }
                      },
                      "id": 3971,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "onERC721Received",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 4588,
                      "src": "11129:36:22",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_address_$_t_uint256_$_t_bytes_memory_ptr_$returns$_t_bytes4_$",
                        "typeString": "function (address,address,uint256,bytes memory) external returns (bytes4)"
                      }
                    },
                    "id": 3977,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "11129:77:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes4",
                      "typeString": "bytes4"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "11113:93:22"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "components": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_bytes4",
                          "typeString": "bytes4"
                        },
                        "id": 3981,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 3979,
                          "name": "retval",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 3967,
                          "src": "11220:6:22",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes4",
                            "typeString": "bytes4"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "==",
                        "rightExpression": {
                          "argumentTypes": null,
                          "id": 3980,
                          "name": "_ERC721_RECEIVED",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 3461,
                          "src": "11230:16:22",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes4",
                            "typeString": "bytes4"
                          }
                        },
                        "src": "11220:26:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "id": 3982,
                    "isConstant": false,
                    "isInlineArray": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "TupleExpression",
                    "src": "11219:28:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 3957,
                  "id": 3983,
                  "nodeType": "Return",
                  "src": "11212:35:22"
                }
              ]
            },
            "documentation": "@dev Internal function to invoke `onERC721Received` on a target address\nThe call is not executed if the target address is not a contract\n@param from address representing the previous owner of the given token ID\n@param to target address that will receive the tokens\n@param tokenId uint256 ID of the token to be transferred\n@param _data bytes optional data to send along with the call\n@return whether the call correctly returned the expected magic value",
            "id": 3985,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "_checkAndCallSafeTransfer",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 3954,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3947,
                  "name": "from",
                  "nodeType": "VariableDeclaration",
                  "scope": 3985,
                  "src": "10949:12:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 3946,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "10949:7:22",
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
                  "id": 3949,
                  "name": "to",
                  "nodeType": "VariableDeclaration",
                  "scope": 3985,
                  "src": "10967:10:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 3948,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "10967:7:22",
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
                  "id": 3951,
                  "name": "tokenId",
                  "nodeType": "VariableDeclaration",
                  "scope": 3985,
                  "src": "10983:15:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 3950,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "10983:7:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 3953,
                  "name": "_data",
                  "nodeType": "VariableDeclaration",
                  "scope": 3985,
                  "src": "11004:11:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 3952,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "11004:5:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "10943:76:22"
            },
            "payable": false,
            "returnParameters": {
              "id": 3957,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3956,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 3985,
                  "src": "11046:4:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 3955,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "11046:4:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "11045:6:22"
            },
            "scope": 3986,
            "src": "10909:343:22",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "internal"
          }
        ],
        "scope": 3987,
        "src": "340:10914:22"
      }
    ],
    "src": "0:11255:22"
  },
  "legacyAST": {
    "absolutePath": "/Users/tyndall/Documents/Projects/asekuro-contracts-reloaded/node_modules/openzeppelin-solidity/contracts/token/ERC721/ERC721.sol",
    "exportedSymbols": {
      "ERC721": [
        3986
      ]
    },
    "id": 3987,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 3443,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:22"
      },
      {
        "absolutePath": "/Users/tyndall/Documents/Projects/asekuro-contracts-reloaded/node_modules/openzeppelin-solidity/contracts/token/ERC721/IERC721.sol",
        "file": "./IERC721.sol",
        "id": 3444,
        "nodeType": "ImportDirective",
        "scope": 3987,
        "sourceUnit": 4524,
        "src": "26:23:22",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/Users/tyndall/Documents/Projects/asekuro-contracts-reloaded/node_modules/openzeppelin-solidity/contracts/token/ERC721/IERC721Receiver.sol",
        "file": "./IERC721Receiver.sol",
        "id": 3445,
        "nodeType": "ImportDirective",
        "scope": 3987,
        "sourceUnit": 4590,
        "src": "50:31:22",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/Users/tyndall/Documents/Projects/asekuro-contracts-reloaded/node_modules/openzeppelin-solidity/contracts/math/SafeMath.sol",
        "file": "../../math/SafeMath.sol",
        "id": 3446,
        "nodeType": "ImportDirective",
        "scope": 3987,
        "sourceUnit": 2672,
        "src": "82:33:22",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/Users/tyndall/Documents/Projects/asekuro-contracts-reloaded/node_modules/openzeppelin-solidity/contracts/utils/Address.sol",
        "file": "../../utils/Address.sol",
        "id": 3447,
        "nodeType": "ImportDirective",
        "scope": 3987,
        "sourceUnit": 4609,
        "src": "116:33:22",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/Users/tyndall/Documents/Projects/asekuro-contracts-reloaded/node_modules/openzeppelin-solidity/contracts/introspection/ERC165.sol",
        "file": "../../introspection/ERC165.sol",
        "id": 3448,
        "nodeType": "ImportDirective",
        "scope": 3987,
        "sourceUnit": 2466,
        "src": "150:40:22",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 3449,
              "name": "ERC165",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 2465,
              "src": "359:6:22",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_ERC165_$2465",
                "typeString": "contract ERC165"
              }
            },
            "id": 3450,
            "nodeType": "InheritanceSpecifier",
            "src": "359:6:22"
          },
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 3451,
              "name": "IERC721",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 4523,
              "src": "367:7:22",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_IERC721_$4523",
                "typeString": "contract IERC721"
              }
            },
            "id": 3452,
            "nodeType": "InheritanceSpecifier",
            "src": "367:7:22"
          }
        ],
        "contractDependencies": [
          2465,
          2475,
          4523
        ],
        "contractKind": "contract",
        "documentation": "@title ERC721 Non-Fungible Token Standard basic implementation\n@dev see https://github.com/ethereum/EIPs/blob/master/EIPS/eip-721.md",
        "fullyImplemented": true,
        "id": 3986,
        "linearizedBaseContracts": [
          3986,
          4523,
          2465,
          2475
        ],
        "name": "ERC721",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "id": 3455,
            "libraryName": {
              "contractScope": null,
              "id": 3453,
              "name": "SafeMath",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 2671,
              "src": "386:8:22",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_SafeMath_$2671",
                "typeString": "library SafeMath"
              }
            },
            "nodeType": "UsingForDirective",
            "src": "380:27:22",
            "typeName": {
              "id": 3454,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "399:7:22",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            }
          },
          {
            "id": 3458,
            "libraryName": {
              "contractScope": null,
              "id": 3456,
              "name": "Address",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 4608,
              "src": "416:7:22",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_Address_$4608",
                "typeString": "library Address"
              }
            },
            "nodeType": "UsingForDirective",
            "src": "410:26:22",
            "typeName": {
              "id": 3457,
              "name": "address",
              "nodeType": "ElementaryTypeName",
              "src": "428:7:22",
              "typeDescriptions": {
                "typeIdentifier": "t_address",
                "typeString": "address"
              }
            }
          },
          {
            "constant": true,
            "id": 3461,
            "name": "_ERC721_RECEIVED",
            "nodeType": "VariableDeclaration",
            "scope": 3986,
            "src": "608:53:22",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_bytes4",
              "typeString": "bytes4"
            },
            "typeName": {
              "id": 3459,
              "name": "bytes4",
              "nodeType": "ElementaryTypeName",
              "src": "608:6:22",
              "typeDescriptions": {
                "typeIdentifier": "t_bytes4",
                "typeString": "bytes4"
              }
            },
            "value": {
              "argumentTypes": null,
              "hexValue": "30783135306237613032",
              "id": 3460,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "651:10:22",
              "subdenomination": null,
              "typeDescriptions": {
                "typeIdentifier": "t_rational_353073666_by_1",
                "typeString": "int_const 353073666"
              },
              "value": "0x150b7a02"
            },
            "visibility": "private"
          },
          {
            "constant": false,
            "id": 3465,
            "name": "_tokenOwner",
            "nodeType": "VariableDeclaration",
            "scope": 3986,
            "src": "702:48:22",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_uint256_$_t_address_$",
              "typeString": "mapping(uint256 => address)"
            },
            "typeName": {
              "id": 3464,
              "keyType": {
                "id": 3462,
                "name": "uint256",
                "nodeType": "ElementaryTypeName",
                "src": "711:7:22",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              },
              "nodeType": "Mapping",
              "src": "702:28:22",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_uint256_$_t_address_$",
                "typeString": "mapping(uint256 => address)"
              },
              "valueType": {
                "id": 3463,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "722:7:22",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              }
            },
            "value": null,
            "visibility": "private"
          },
          {
            "constant": false,
            "id": 3469,
            "name": "_tokenApprovals",
            "nodeType": "VariableDeclaration",
            "scope": 3986,
            "src": "802:52:22",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_uint256_$_t_address_$",
              "typeString": "mapping(uint256 => address)"
            },
            "typeName": {
              "id": 3468,
              "keyType": {
                "id": 3466,
                "name": "uint256",
                "nodeType": "ElementaryTypeName",
                "src": "811:7:22",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              },
              "nodeType": "Mapping",
              "src": "802:28:22",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_uint256_$_t_address_$",
                "typeString": "mapping(uint256 => address)"
              },
              "valueType": {
                "id": 3467,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "822:7:22",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              }
            },
            "value": null,
            "visibility": "private"
          },
          {
            "constant": false,
            "id": 3473,
            "name": "_ownedTokensCount",
            "nodeType": "VariableDeclaration",
            "scope": 3986,
            "src": "908:54:22",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
              "typeString": "mapping(address => uint256)"
            },
            "typeName": {
              "id": 3472,
              "keyType": {
                "id": 3470,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "917:7:22",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "nodeType": "Mapping",
              "src": "908:28:22",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                "typeString": "mapping(address => uint256)"
              },
              "valueType": {
                "id": 3471,
                "name": "uint256",
                "nodeType": "ElementaryTypeName",
                "src": "928:7:22",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              }
            },
            "value": null,
            "visibility": "private"
          },
          {
            "constant": false,
            "id": 3479,
            "name": "_operatorApprovals",
            "nodeType": "VariableDeclaration",
            "scope": 3986,
            "src": "1013:73:22",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_address_$_t_bool_$_$",
              "typeString": "mapping(address => mapping(address => bool))"
            },
            "typeName": {
              "id": 3478,
              "keyType": {
                "id": 3474,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "1022:7:22",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "nodeType": "Mapping",
              "src": "1013:46:22",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_address_$_t_bool_$_$",
                "typeString": "mapping(address => mapping(address => bool))"
              },
              "valueType": {
                "id": 3477,
                "keyType": {
                  "id": 3475,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "1042:7:22",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  }
                },
                "nodeType": "Mapping",
                "src": "1033:25:22",
                "typeDescriptions": {
                  "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                  "typeString": "mapping(address => bool)"
                },
                "valueType": {
                  "id": 3476,
                  "name": "bool",
                  "nodeType": "ElementaryTypeName",
                  "src": "1053:4:22",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  }
                }
              }
            },
            "value": null,
            "visibility": "private"
          },
          {
            "constant": true,
            "id": 3482,
            "name": "_InterfaceId_ERC721",
            "nodeType": "VariableDeclaration",
            "scope": 3986,
            "src": "1091:56:22",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_bytes4",
              "typeString": "bytes4"
            },
            "typeName": {
              "id": 3480,
              "name": "bytes4",
              "nodeType": "ElementaryTypeName",
              "src": "1091:6:22",
              "typeDescriptions": {
                "typeIdentifier": "t_bytes4",
                "typeString": "bytes4"
              }
            },
            "value": {
              "argumentTypes": null,
              "hexValue": "30783830616335386364",
              "id": 3481,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "1137:10:22",
              "subdenomination": null,
              "typeDescriptions": {
                "typeIdentifier": "t_rational_2158778573_by_1",
                "typeString": "int_const 2158778573"
              },
              "value": "0x80ac58cd"
            },
            "visibility": "private"
          },
          {
            "body": {
              "id": 3489,
              "nodeType": "Block",
              "src": "1754:123:22",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 3486,
                        "name": "_InterfaceId_ERC721",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3482,
                        "src": "1852:19:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes4",
                          "typeString": "bytes4"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bytes4",
                          "typeString": "bytes4"
                        }
                      ],
                      "id": 3485,
                      "name": "_registerInterface",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 2464,
                      "src": "1833:18:22",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_bytes4_$returns$__$",
                        "typeString": "function (bytes4)"
                      }
                    },
                    "id": 3487,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1833:39:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 3488,
                  "nodeType": "ExpressionStatement",
                  "src": "1833:39:22"
                }
              ]
            },
            "documentation": null,
            "id": 3490,
            "implemented": true,
            "isConstructor": true,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 3483,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1738:2:22"
            },
            "payable": false,
            "returnParameters": {
              "id": 3484,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1754:0:22"
            },
            "scope": 3986,
            "src": "1727:150:22",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 3509,
              "nodeType": "Block",
              "src": "2132:76:22",
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
                        "id": 3502,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 3498,
                          "name": "owner",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 3492,
                          "src": "2146:5:22",
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
                              "id": 3500,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "2163:1:22",
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
                            "id": 3499,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "2155:7:22",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_address_$",
                              "typeString": "type(address)"
                            },
                            "typeName": "address"
                          },
                          "id": 3501,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2155:10:22",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "src": "2146:19:22",
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
                      "id": 3497,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        4626,
                        4627
                      ],
                      "referencedDeclaration": 4626,
                      "src": "2138:7:22",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 3503,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2138:28:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 3504,
                  "nodeType": "ExpressionStatement",
                  "src": "2138:28:22"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "baseExpression": {
                      "argumentTypes": null,
                      "id": 3505,
                      "name": "_ownedTokensCount",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 3473,
                      "src": "2179:17:22",
                      "typeDescriptions": {
                        "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                        "typeString": "mapping(address => uint256)"
                      }
                    },
                    "id": 3507,
                    "indexExpression": {
                      "argumentTypes": null,
                      "id": 3506,
                      "name": "owner",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 3492,
                      "src": "2197:5:22",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "IndexAccess",
                    "src": "2179:24:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 3496,
                  "id": 3508,
                  "nodeType": "Return",
                  "src": "2172:31:22"
                }
              ]
            },
            "documentation": "@dev Gets the balance of the specified address\n@param owner address to query the balance of\n@return uint256 representing the amount owned by the passed address",
            "id": 3510,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "balanceOf",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 3493,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3492,
                  "name": "owner",
                  "nodeType": "VariableDeclaration",
                  "scope": 3510,
                  "src": "2087:13:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 3491,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2087:7:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2086:15:22"
            },
            "payable": false,
            "returnParameters": {
              "id": 3496,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3495,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 3510,
                  "src": "2123:7:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 3494,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2123:7:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2122:9:22"
            },
            "scope": 3986,
            "src": "2068:140:22",
            "stateMutability": "view",
            "superFunction": 4456,
            "visibility": "public"
          },
          {
            "body": {
              "id": 3533,
              "nodeType": "Block",
              "src": "2484:99:22",
              "statements": [
                {
                  "assignments": [
                    3518
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 3518,
                      "name": "owner",
                      "nodeType": "VariableDeclaration",
                      "scope": 3534,
                      "src": "2490:13:22",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      },
                      "typeName": {
                        "id": 3517,
                        "name": "address",
                        "nodeType": "ElementaryTypeName",
                        "src": "2490:7:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 3522,
                  "initialValue": {
                    "argumentTypes": null,
                    "baseExpression": {
                      "argumentTypes": null,
                      "id": 3519,
                      "name": "_tokenOwner",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 3465,
                      "src": "2506:11:22",
                      "typeDescriptions": {
                        "typeIdentifier": "t_mapping$_t_uint256_$_t_address_$",
                        "typeString": "mapping(uint256 => address)"
                      }
                    },
                    "id": 3521,
                    "indexExpression": {
                      "argumentTypes": null,
                      "id": 3520,
                      "name": "tokenId",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 3512,
                      "src": "2518:7:22",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "IndexAccess",
                    "src": "2506:20:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2490:36:22"
                },
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
                        "id": 3528,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 3524,
                          "name": "owner",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 3518,
                          "src": "2540:5:22",
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
                              "id": 3526,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "2557:1:22",
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
                            "id": 3525,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "2549:7:22",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_address_$",
                              "typeString": "type(address)"
                            },
                            "typeName": "address"
                          },
                          "id": 3527,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2549:10:22",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "src": "2540:19:22",
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
                      "id": 3523,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        4626,
                        4627
                      ],
                      "referencedDeclaration": 4626,
                      "src": "2532:7:22",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 3529,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2532:28:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 3530,
                  "nodeType": "ExpressionStatement",
                  "src": "2532:28:22"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 3531,
                    "name": "owner",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 3518,
                    "src": "2573:5:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "functionReturnParameters": 3516,
                  "id": 3532,
                  "nodeType": "Return",
                  "src": "2566:12:22"
                }
              ]
            },
            "documentation": "@dev Gets the owner of the specified token ID\n@param tokenId uint256 ID of the token to query the owner of\n@return owner address currently marked as the owner of the given token ID",
            "id": 3534,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "ownerOf",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 3513,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3512,
                  "name": "tokenId",
                  "nodeType": "VariableDeclaration",
                  "scope": 3534,
                  "src": "2437:15:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 3511,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2437:7:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2436:17:22"
            },
            "payable": false,
            "returnParameters": {
              "id": 3516,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3515,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 3534,
                  "src": "2475:7:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 3514,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2475:7:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2474:9:22"
            },
            "scope": 3986,
            "src": "2420:163:22",
            "stateMutability": "view",
            "superFunction": 4463,
            "visibility": "public"
          },
          {
            "body": {
              "id": 3578,
              "nodeType": "Block",
              "src": "3039:217:22",
              "statements": [
                {
                  "assignments": [
                    3542
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 3542,
                      "name": "owner",
                      "nodeType": "VariableDeclaration",
                      "scope": 3579,
                      "src": "3045:13:22",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      },
                      "typeName": {
                        "id": 3541,
                        "name": "address",
                        "nodeType": "ElementaryTypeName",
                        "src": "3045:7:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 3546,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 3544,
                        "name": "tokenId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3538,
                        "src": "3069:7:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 3543,
                      "name": "ownerOf",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        3534
                      ],
                      "referencedDeclaration": 3534,
                      "src": "3061:7:22",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$_t_uint256_$returns$_t_address_$",
                        "typeString": "function (uint256) view returns (address)"
                      }
                    },
                    "id": 3545,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3061:16:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "3045:32:22"
                },
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
                        "id": 3550,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 3548,
                          "name": "to",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 3536,
                          "src": "3091:2:22",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "!=",
                        "rightExpression": {
                          "argumentTypes": null,
                          "id": 3549,
                          "name": "owner",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 3542,
                          "src": "3097:5:22",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "src": "3091:11:22",
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
                      "id": 3547,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        4626,
                        4627
                      ],
                      "referencedDeclaration": 4626,
                      "src": "3083:7:22",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 3551,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3083:20:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 3552,
                  "nodeType": "ExpressionStatement",
                  "src": "3083:20:22"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        "id": 3563,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          "id": 3557,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 3554,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 4623,
                              "src": "3117:3:22",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 3555,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "3117:10:22",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "==",
                          "rightExpression": {
                            "argumentTypes": null,
                            "id": 3556,
                            "name": "owner",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 3542,
                            "src": "3131:5:22",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "src": "3117:19:22",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "||",
                        "rightExpression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "id": 3559,
                              "name": "owner",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 3542,
                              "src": "3157:5:22",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            {
                              "argumentTypes": null,
                              "expression": {
                                "argumentTypes": null,
                                "id": 3560,
                                "name": "msg",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 4623,
                                "src": "3164:3:22",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_message",
                                  "typeString": "msg"
                                }
                              },
                              "id": 3561,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "sender",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "3164:10:22",
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
                            "id": 3558,
                            "name": "isApprovedForAll",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [
                              3644
                            ],
                            "referencedDeclaration": 3644,
                            "src": "3140:16:22",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_view$_t_address_$_t_address_$returns$_t_bool_$",
                              "typeString": "function (address,address) view returns (bool)"
                            }
                          },
                          "id": 3562,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "3140:35:22",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "src": "3117:58:22",
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
                      "id": 3553,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        4626,
                        4627
                      ],
                      "referencedDeclaration": 4626,
                      "src": "3109:7:22",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 3564,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3109:67:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 3565,
                  "nodeType": "ExpressionStatement",
                  "src": "3109:67:22"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 3570,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 3566,
                        "name": "_tokenApprovals",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3469,
                        "src": "3183:15:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_uint256_$_t_address_$",
                          "typeString": "mapping(uint256 => address)"
                        }
                      },
                      "id": 3568,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 3567,
                        "name": "tokenId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3538,
                        "src": "3199:7:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "3183:24:22",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 3569,
                      "name": "to",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 3536,
                      "src": "3210:2:22",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "3183:29:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 3571,
                  "nodeType": "ExpressionStatement",
                  "src": "3183:29:22"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 3573,
                        "name": "owner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3542,
                        "src": "3232:5:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 3574,
                        "name": "to",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3536,
                        "src": "3239:2:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 3575,
                        "name": "tokenId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3538,
                        "src": "3243:7:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
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
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 3572,
                      "name": "Approval",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 4441,
                      "src": "3223:8:22",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,address,uint256)"
                      }
                    },
                    "id": 3576,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3223:28:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 3577,
                  "nodeType": "EmitStatement",
                  "src": "3218:33:22"
                }
              ]
            },
            "documentation": "@dev Approves another address to transfer the given token ID\nThe zero address indicates there is no approved address.\nThere can only be one approved address per token at a given time.\nCan only be called by the token owner or an approved operator.\n@param to address to be approved for the given token ID\n@param tokenId uint256 ID of the token to be approved",
            "id": 3579,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "approve",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 3539,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3536,
                  "name": "to",
                  "nodeType": "VariableDeclaration",
                  "scope": 3579,
                  "src": "3003:10:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 3535,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3003:7:22",
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
                  "id": 3538,
                  "name": "tokenId",
                  "nodeType": "VariableDeclaration",
                  "scope": 3579,
                  "src": "3015:15:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 3537,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3015:7:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3002:29:22"
            },
            "payable": false,
            "returnParameters": {
              "id": 3540,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3039:0:22"
            },
            "scope": 3986,
            "src": "2986:270:22",
            "stateMutability": "nonpayable",
            "superFunction": 4470,
            "visibility": "public"
          },
          {
            "body": {
              "id": 3596,
              "nodeType": "Block",
              "src": "3595:73:22",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 3588,
                            "name": "tokenId",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 3581,
                            "src": "3617:7:22",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          ],
                          "id": 3587,
                          "name": "_exists",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 3755,
                          "src": "3609:7:22",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_view$_t_uint256_$returns$_t_bool_$",
                            "typeString": "function (uint256) view returns (bool)"
                          }
                        },
                        "id": 3589,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "3609:16:22",
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
                      "id": 3586,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        4626,
                        4627
                      ],
                      "referencedDeclaration": 4626,
                      "src": "3601:7:22",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 3590,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3601:25:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 3591,
                  "nodeType": "ExpressionStatement",
                  "src": "3601:25:22"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "baseExpression": {
                      "argumentTypes": null,
                      "id": 3592,
                      "name": "_tokenApprovals",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 3469,
                      "src": "3639:15:22",
                      "typeDescriptions": {
                        "typeIdentifier": "t_mapping$_t_uint256_$_t_address_$",
                        "typeString": "mapping(uint256 => address)"
                      }
                    },
                    "id": 3594,
                    "indexExpression": {
                      "argumentTypes": null,
                      "id": 3593,
                      "name": "tokenId",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 3581,
                      "src": "3655:7:22",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "IndexAccess",
                    "src": "3639:24:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "functionReturnParameters": 3585,
                  "id": 3595,
                  "nodeType": "Return",
                  "src": "3632:31:22"
                }
              ]
            },
            "documentation": "@dev Gets the approved address for a token ID, or zero if no address set\nReverts if the token ID does not exist.\n@param tokenId uint256 ID of the token to query the approval of\n@return address currently approved for the given token ID",
            "id": 3597,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getApproved",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 3582,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3581,
                  "name": "tokenId",
                  "nodeType": "VariableDeclaration",
                  "scope": 3597,
                  "src": "3548:15:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 3580,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3548:7:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3547:17:22"
            },
            "payable": false,
            "returnParameters": {
              "id": 3585,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3584,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 3597,
                  "src": "3586:7:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 3583,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3586:7:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3585:9:22"
            },
            "scope": 3986,
            "src": "3527:141:22",
            "stateMutability": "view",
            "superFunction": 4477,
            "visibility": "public"
          },
          {
            "body": {
              "id": 3627,
              "nodeType": "Block",
              "src": "4007:138:22",
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
                        "id": 3608,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 3605,
                          "name": "to",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 3599,
                          "src": "4021:2:22",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "!=",
                        "rightExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 3606,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 4623,
                            "src": "4027:3:22",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 3607,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "4027:10:22",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "src": "4021:16:22",
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
                      "id": 3604,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        4626,
                        4627
                      ],
                      "referencedDeclaration": 4626,
                      "src": "4013:7:22",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 3609,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4013:25:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 3610,
                  "nodeType": "ExpressionStatement",
                  "src": "4013:25:22"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 3618,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 3611,
                          "name": "_operatorApprovals",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 3479,
                          "src": "4044:18:22",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_address_$_t_bool_$_$",
                            "typeString": "mapping(address => mapping(address => bool))"
                          }
                        },
                        "id": 3615,
                        "indexExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 3612,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 4623,
                            "src": "4063:3:22",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 3613,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "4063:10:22",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "4044:30:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                          "typeString": "mapping(address => bool)"
                        }
                      },
                      "id": 3616,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 3614,
                        "name": "to",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3599,
                        "src": "4075:2:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "4044:34:22",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 3617,
                      "name": "approved",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 3601,
                      "src": "4081:8:22",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "src": "4044:45:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 3619,
                  "nodeType": "ExpressionStatement",
                  "src": "4044:45:22"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 3621,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4623,
                          "src": "4115:3:22",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 3622,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "4115:10:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 3623,
                        "name": "to",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3599,
                        "src": "4127:2:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 3624,
                        "name": "approved",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3601,
                        "src": "4131:8:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
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
                        },
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 3620,
                      "name": "ApprovalForAll",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 4449,
                      "src": "4100:14:22",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$_t_bool_$returns$__$",
                        "typeString": "function (address,address,bool)"
                      }
                    },
                    "id": 3625,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4100:40:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 3626,
                  "nodeType": "EmitStatement",
                  "src": "4095:45:22"
                }
              ]
            },
            "documentation": "@dev Sets or unsets the approval of a given operator\nAn operator is allowed to transfer all tokens of the sender on their behalf\n@param to operator address to set the approval\n@param approved representing the status of the approval to be set",
            "id": 3628,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "setApprovalForAll",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 3602,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3599,
                  "name": "to",
                  "nodeType": "VariableDeclaration",
                  "scope": 3628,
                  "src": "3973:10:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 3598,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3973:7:22",
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
                  "id": 3601,
                  "name": "approved",
                  "nodeType": "VariableDeclaration",
                  "scope": 3628,
                  "src": "3985:13:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 3600,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "3985:4:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3972:27:22"
            },
            "payable": false,
            "returnParameters": {
              "id": 3603,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "4007:0:22"
            },
            "scope": 3986,
            "src": "3946:199:22",
            "stateMutability": "nonpayable",
            "superFunction": 4484,
            "visibility": "public"
          },
          {
            "body": {
              "id": 3643,
              "nodeType": "Block",
              "src": "4564:53:22",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "baseExpression": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 3637,
                        "name": "_operatorApprovals",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3479,
                        "src": "4577:18:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_address_$_t_bool_$_$",
                          "typeString": "mapping(address => mapping(address => bool))"
                        }
                      },
                      "id": 3639,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 3638,
                        "name": "owner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3630,
                        "src": "4596:5:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "IndexAccess",
                      "src": "4577:25:22",
                      "typeDescriptions": {
                        "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                        "typeString": "mapping(address => bool)"
                      }
                    },
                    "id": 3641,
                    "indexExpression": {
                      "argumentTypes": null,
                      "id": 3640,
                      "name": "operator",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 3632,
                      "src": "4603:8:22",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "IndexAccess",
                    "src": "4577:35:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 3636,
                  "id": 3642,
                  "nodeType": "Return",
                  "src": "4570:42:22"
                }
              ]
            },
            "documentation": "@dev Tells whether an operator is approved by a given owner\n@param owner owner address which you want to query the approval of\n@param operator operator address which you want to query the approval of\n@return bool whether the given operator is approved by the given owner",
            "id": 3644,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "isApprovedForAll",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 3633,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3630,
                  "name": "owner",
                  "nodeType": "VariableDeclaration",
                  "scope": 3644,
                  "src": "4483:13:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 3629,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "4483:7:22",
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
                  "id": 3632,
                  "name": "operator",
                  "nodeType": "VariableDeclaration",
                  "scope": 3644,
                  "src": "4502:16:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 3631,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "4502:7:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "4477:45:22"
            },
            "payable": false,
            "returnParameters": {
              "id": 3636,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3635,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 3644,
                  "src": "4556:4:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 3634,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "4556:4:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "4555:6:22"
            },
            "scope": 3986,
            "src": "4452:165:22",
            "stateMutability": "view",
            "superFunction": 4493,
            "visibility": "public"
          },
          {
            "body": {
              "id": 3690,
              "nodeType": "Block",
              "src": "5126:232:22",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 3655,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 4623,
                              "src": "5159:3:22",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 3656,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "5159:10:22",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 3657,
                            "name": "tokenId",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 3650,
                            "src": "5171:7:22",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
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
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          ],
                          "id": 3654,
                          "name": "_isApprovedOrOwner",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 3787,
                          "src": "5140:18:22",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_view$_t_address_$_t_uint256_$returns$_t_bool_$",
                            "typeString": "function (address,uint256) view returns (bool)"
                          }
                        },
                        "id": 3658,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "5140:39:22",
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
                      "id": 3653,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        4626,
                        4627
                      ],
                      "referencedDeclaration": 4626,
                      "src": "5132:7:22",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 3659,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5132:48:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 3660,
                  "nodeType": "ExpressionStatement",
                  "src": "5132:48:22"
                },
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
                        "id": 3666,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 3662,
                          "name": "to",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 3648,
                          "src": "5194:2:22",
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
                              "id": 3664,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "5208:1:22",
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
                            "id": 3663,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "5200:7:22",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_address_$",
                              "typeString": "type(address)"
                            },
                            "typeName": "address"
                          },
                          "id": 3665,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "5200:10:22",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "src": "5194:16:22",
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
                      "id": 3661,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        4626,
                        4627
                      ],
                      "referencedDeclaration": 4626,
                      "src": "5186:7:22",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 3667,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5186:25:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 3668,
                  "nodeType": "ExpressionStatement",
                  "src": "5186:25:22"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 3670,
                        "name": "from",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3646,
                        "src": "5233:4:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 3671,
                        "name": "tokenId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3650,
                        "src": "5239:7:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
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
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 3669,
                      "name": "_clearApproval",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 3875,
                      "src": "5218:14:22",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,uint256)"
                      }
                    },
                    "id": 3672,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5218:29:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 3673,
                  "nodeType": "ExpressionStatement",
                  "src": "5218:29:22"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 3675,
                        "name": "from",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3646,
                        "src": "5270:4:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 3676,
                        "name": "tokenId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3650,
                        "src": "5276:7:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
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
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 3674,
                      "name": "_removeTokenFrom",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 3945,
                      "src": "5253:16:22",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,uint256)"
                      }
                    },
                    "id": 3677,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5253:31:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 3678,
                  "nodeType": "ExpressionStatement",
                  "src": "5253:31:22"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 3680,
                        "name": "to",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3648,
                        "src": "5302:2:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 3681,
                        "name": "tokenId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3650,
                        "src": "5306:7:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
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
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 3679,
                      "name": "_addTokenTo",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 3910,
                      "src": "5290:11:22",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,uint256)"
                      }
                    },
                    "id": 3682,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5290:24:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 3683,
                  "nodeType": "ExpressionStatement",
                  "src": "5290:24:22"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 3685,
                        "name": "from",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3646,
                        "src": "5335:4:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 3686,
                        "name": "to",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3648,
                        "src": "5341:2:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 3687,
                        "name": "tokenId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3650,
                        "src": "5345:7:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
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
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 3684,
                      "name": "Transfer",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 4433,
                      "src": "5326:8:22",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,address,uint256)"
                      }
                    },
                    "id": 3688,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5326:27:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 3689,
                  "nodeType": "EmitStatement",
                  "src": "5321:32:22"
                }
              ]
            },
            "documentation": "@dev Transfers the ownership of a given token ID to another address\nUsage of this method is discouraged, use `safeTransferFrom` whenever possible\nRequires the msg sender to be the owner, approved, or operator\n@param from current owner of the token\n@param to address to receive the ownership of the given token ID\n@param tokenId uint256 ID of the token to be transferred",
            "id": 3691,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "transferFrom",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 3651,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3646,
                  "name": "from",
                  "nodeType": "VariableDeclaration",
                  "scope": 3691,
                  "src": "5059:12:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 3645,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "5059:7:22",
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
                  "id": 3648,
                  "name": "to",
                  "nodeType": "VariableDeclaration",
                  "scope": 3691,
                  "src": "5077:10:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 3647,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "5077:7:22",
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
                  "id": 3650,
                  "name": "tokenId",
                  "nodeType": "VariableDeclaration",
                  "scope": 3691,
                  "src": "5093:15:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 3649,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "5093:7:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "5053:59:22"
            },
            "payable": false,
            "returnParameters": {
              "id": 3652,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "5126:0:22"
            },
            "scope": 3986,
            "src": "5032:326:22",
            "stateMutability": "nonpayable",
            "superFunction": 4502,
            "visibility": "public"
          },
          {
            "body": {
              "id": 3707,
              "nodeType": "Block",
              "src": "6069:95:22",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 3701,
                        "name": "from",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3693,
                        "src": "6137:4:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 3702,
                        "name": "to",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3695,
                        "src": "6143:2:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 3703,
                        "name": "tokenId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3697,
                        "src": "6147:7:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "",
                        "id": 3704,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "6156:2:22",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",
                          "typeString": "literal_string \"\""
                        },
                        "value": ""
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
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",
                          "typeString": "literal_string \"\""
                        }
                      ],
                      "id": 3700,
                      "name": "safeTransferFrom",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        3708,
                        3735
                      ],
                      "referencedDeclaration": 3735,
                      "src": "6120:16:22",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_address_$_t_uint256_$_t_bytes_memory_ptr_$returns$__$",
                        "typeString": "function (address,address,uint256,bytes memory)"
                      }
                    },
                    "id": 3705,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6120:39:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 3706,
                  "nodeType": "ExpressionStatement",
                  "src": "6120:39:22"
                }
              ]
            },
            "documentation": "@dev Safely transfers the ownership of a given token ID to another address\nIf the target address is a contract, it must implement `onERC721Received`,\nwhich is called upon a safe transfer, and return the magic value\n`bytes4(keccak256(\"onERC721Received(address,address,uint256,bytes)\"))`; otherwise,\nthe transfer is reverted.\n   * Requires the msg sender to be the owner, approved, or operator\n@param from current owner of the token\n@param to address to receive the ownership of the given token ID\n@param tokenId uint256 ID of the token to be transferred",
            "id": 3708,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "safeTransferFrom",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 3698,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3693,
                  "name": "from",
                  "nodeType": "VariableDeclaration",
                  "scope": 3708,
                  "src": "6002:12:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 3692,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "6002:7:22",
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
                  "id": 3695,
                  "name": "to",
                  "nodeType": "VariableDeclaration",
                  "scope": 3708,
                  "src": "6020:10:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 3694,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "6020:7:22",
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
                  "id": 3697,
                  "name": "tokenId",
                  "nodeType": "VariableDeclaration",
                  "scope": 3708,
                  "src": "6036:15:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 3696,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "6036:7:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "5996:59:22"
            },
            "payable": false,
            "returnParameters": {
              "id": 3699,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "6069:0:22"
            },
            "scope": 3986,
            "src": "5971:193:22",
            "stateMutability": "nonpayable",
            "superFunction": 4511,
            "visibility": "public"
          },
          {
            "body": {
              "id": 3734,
              "nodeType": "Block",
              "src": "6958:153:22",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 3720,
                        "name": "from",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3710,
                        "src": "6977:4:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 3721,
                        "name": "to",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3712,
                        "src": "6983:2:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 3722,
                        "name": "tokenId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3714,
                        "src": "6987:7:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
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
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 3719,
                      "name": "transferFrom",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        3691
                      ],
                      "referencedDeclaration": 3691,
                      "src": "6964:12:22",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,address,uint256)"
                      }
                    },
                    "id": 3723,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6964:31:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 3724,
                  "nodeType": "ExpressionStatement",
                  "src": "6964:31:22"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 3727,
                            "name": "from",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 3710,
                            "src": "7080:4:22",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 3728,
                            "name": "to",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 3712,
                            "src": "7086:2:22",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 3729,
                            "name": "tokenId",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 3714,
                            "src": "7090:7:22",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 3730,
                            "name": "_data",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 3716,
                            "src": "7099:5:22",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes_memory_ptr",
                              "typeString": "bytes memory"
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
                            },
                            {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            {
                              "typeIdentifier": "t_bytes_memory_ptr",
                              "typeString": "bytes memory"
                            }
                          ],
                          "id": 3726,
                          "name": "_checkAndCallSafeTransfer",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 3985,
                          "src": "7054:25:22",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_address_$_t_uint256_$_t_bytes_memory_ptr_$returns$_t_bool_$",
                            "typeString": "function (address,address,uint256,bytes memory) returns (bool)"
                          }
                        },
                        "id": 3731,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "7054:51:22",
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
                      "id": 3725,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        4626,
                        4627
                      ],
                      "referencedDeclaration": 4626,
                      "src": "7046:7:22",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 3732,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "7046:60:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 3733,
                  "nodeType": "ExpressionStatement",
                  "src": "7046:60:22"
                }
              ]
            },
            "documentation": "@dev Safely transfers the ownership of a given token ID to another address\nIf the target address is a contract, it must implement `onERC721Received`,\nwhich is called upon a safe transfer, and return the magic value\n`bytes4(keccak256(\"onERC721Received(address,address,uint256,bytes)\"))`; otherwise,\nthe transfer is reverted.\nRequires the msg sender to be the owner, approved, or operator\n@param from current owner of the token\n@param to address to receive the ownership of the given token ID\n@param tokenId uint256 ID of the token to be transferred\n@param _data bytes data to send along with a safe transfer check",
            "id": 3735,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "safeTransferFrom",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 3717,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3710,
                  "name": "from",
                  "nodeType": "VariableDeclaration",
                  "scope": 3735,
                  "src": "6874:12:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 3709,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "6874:7:22",
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
                  "id": 3712,
                  "name": "to",
                  "nodeType": "VariableDeclaration",
                  "scope": 3735,
                  "src": "6892:10:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 3711,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "6892:7:22",
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
                  "id": 3714,
                  "name": "tokenId",
                  "nodeType": "VariableDeclaration",
                  "scope": 3735,
                  "src": "6908:15:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 3713,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "6908:7:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 3716,
                  "name": "_data",
                  "nodeType": "VariableDeclaration",
                  "scope": 3735,
                  "src": "6929:11:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 3715,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "6929:5:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "6868:76:22"
            },
            "payable": false,
            "returnParameters": {
              "id": 3718,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "6958:0:22"
            },
            "scope": 3986,
            "src": "6843:268:22",
            "stateMutability": "nonpayable",
            "superFunction": 4522,
            "visibility": "public"
          },
          {
            "body": {
              "id": 3754,
              "nodeType": "Block",
              "src": "7351:79:22",
              "statements": [
                {
                  "assignments": [
                    3743
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 3743,
                      "name": "owner",
                      "nodeType": "VariableDeclaration",
                      "scope": 3755,
                      "src": "7357:13:22",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      },
                      "typeName": {
                        "id": 3742,
                        "name": "address",
                        "nodeType": "ElementaryTypeName",
                        "src": "7357:7:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 3747,
                  "initialValue": {
                    "argumentTypes": null,
                    "baseExpression": {
                      "argumentTypes": null,
                      "id": 3744,
                      "name": "_tokenOwner",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 3465,
                      "src": "7373:11:22",
                      "typeDescriptions": {
                        "typeIdentifier": "t_mapping$_t_uint256_$_t_address_$",
                        "typeString": "mapping(uint256 => address)"
                      }
                    },
                    "id": 3746,
                    "indexExpression": {
                      "argumentTypes": null,
                      "id": 3745,
                      "name": "tokenId",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 3737,
                      "src": "7385:7:22",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "IndexAccess",
                    "src": "7373:20:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "7357:36:22"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "id": 3752,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "id": 3748,
                      "name": "owner",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 3743,
                      "src": "7406:5:22",
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
                          "id": 3750,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "7423:1:22",
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
                        "id": 3749,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "7415:7:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_address_$",
                          "typeString": "type(address)"
                        },
                        "typeName": "address"
                      },
                      "id": 3751,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "7415:10:22",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "7406:19:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 3741,
                  "id": 3753,
                  "nodeType": "Return",
                  "src": "7399:26:22"
                }
              ]
            },
            "documentation": "@dev Returns whether the specified token exists\n@param tokenId uint256 ID of the token to query the existence of\n@return whether the token exists",
            "id": 3755,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "_exists",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 3738,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3737,
                  "name": "tokenId",
                  "nodeType": "VariableDeclaration",
                  "scope": 3755,
                  "src": "7305:15:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 3736,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "7305:7:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "7304:17:22"
            },
            "payable": false,
            "returnParameters": {
              "id": 3741,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3740,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 3755,
                  "src": "7345:4:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 3739,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "7345:4:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "7344:6:22"
            },
            "scope": 3986,
            "src": "7288:142:22",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 3786,
              "nodeType": "Block",
              "src": "7892:315:22",
              "statements": [
                {
                  "assignments": [
                    3765
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 3765,
                      "name": "owner",
                      "nodeType": "VariableDeclaration",
                      "scope": 3787,
                      "src": "7898:13:22",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      },
                      "typeName": {
                        "id": 3764,
                        "name": "address",
                        "nodeType": "ElementaryTypeName",
                        "src": "7898:7:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 3769,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 3767,
                        "name": "tokenId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3759,
                        "src": "7922:7:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 3766,
                      "name": "ownerOf",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        3534
                      ],
                      "referencedDeclaration": 3534,
                      "src": "7914:7:22",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$_t_uint256_$returns$_t_address_$",
                        "typeString": "function (uint256) view returns (address)"
                      }
                    },
                    "id": 3768,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "7914:16:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "7898:32:22"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "components": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        "id": 3783,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          "id": 3778,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "commonType": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            },
                            "id": 3772,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "argumentTypes": null,
                              "id": 3770,
                              "name": "spender",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 3757,
                              "src": "8097:7:22",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "==",
                            "rightExpression": {
                              "argumentTypes": null,
                              "id": 3771,
                              "name": "owner",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 3765,
                              "src": "8108:5:22",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "src": "8097:16:22",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "||",
                          "rightExpression": {
                            "argumentTypes": null,
                            "commonType": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            },
                            "id": 3777,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "argumentTypes": null,
                              "arguments": [
                                {
                                  "argumentTypes": null,
                                  "id": 3774,
                                  "name": "tokenId",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 3759,
                                  "src": "8135:7:22",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                ],
                                "id": 3773,
                                "name": "getApproved",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [
                                  3597
                                ],
                                "referencedDeclaration": 3597,
                                "src": "8123:11:22",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_internal_view$_t_uint256_$returns$_t_address_$",
                                  "typeString": "function (uint256) view returns (address)"
                                }
                              },
                              "id": 3775,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "8123:20:22",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "==",
                            "rightExpression": {
                              "argumentTypes": null,
                              "id": 3776,
                              "name": "spender",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 3757,
                              "src": "8147:7:22",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "src": "8123:31:22",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          "src": "8097:57:22",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "||",
                        "rightExpression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "id": 3780,
                              "name": "owner",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 3765,
                              "src": "8181:5:22",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            {
                              "argumentTypes": null,
                              "id": 3781,
                              "name": "spender",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 3757,
                              "src": "8188:7:22",
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
                            "id": 3779,
                            "name": "isApprovedForAll",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [
                              3644
                            ],
                            "referencedDeclaration": 3644,
                            "src": "8164:16:22",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_view$_t_address_$_t_address_$returns$_t_bool_$",
                              "typeString": "function (address,address) view returns (bool)"
                            }
                          },
                          "id": 3782,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "8164:32:22",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "src": "8097:99:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "id": 3784,
                    "isConstant": false,
                    "isInlineArray": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "TupleExpression",
                    "src": "8089:113:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 3763,
                  "id": 3785,
                  "nodeType": "Return",
                  "src": "8082:120:22"
                }
              ]
            },
            "documentation": "@dev Returns whether the given spender can transfer a given token ID\n@param spender address of the spender to query\n@param tokenId uint256 ID of the token to be transferred\n@return bool whether the msg.sender is approved for the given token ID,\n is an operator of the owner, or is the owner of the token",
            "id": 3787,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "_isApprovedOrOwner",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 3760,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3757,
                  "name": "spender",
                  "nodeType": "VariableDeclaration",
                  "scope": 3787,
                  "src": "7808:15:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 3756,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "7808:7:22",
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
                  "id": 3759,
                  "name": "tokenId",
                  "nodeType": "VariableDeclaration",
                  "scope": 3787,
                  "src": "7829:15:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 3758,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "7829:7:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "7802:46:22"
            },
            "payable": false,
            "returnParameters": {
              "id": 3763,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3762,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 3787,
                  "src": "7884:4:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 3761,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "7884:4:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "7883:6:22"
            },
            "scope": 3986,
            "src": "7775:432:22",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 3815,
              "nodeType": "Block",
              "src": "8507:110:22",
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
                        "id": 3799,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 3795,
                          "name": "to",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 3789,
                          "src": "8521:2:22",
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
                              "id": 3797,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "8535:1:22",
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
                            "id": 3796,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "8527:7:22",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_address_$",
                              "typeString": "type(address)"
                            },
                            "typeName": "address"
                          },
                          "id": 3798,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "8527:10:22",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "src": "8521:16:22",
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
                      "id": 3794,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        4626,
                        4627
                      ],
                      "referencedDeclaration": 4626,
                      "src": "8513:7:22",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 3800,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "8513:25:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 3801,
                  "nodeType": "ExpressionStatement",
                  "src": "8513:25:22"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 3803,
                        "name": "to",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3789,
                        "src": "8556:2:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 3804,
                        "name": "tokenId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3791,
                        "src": "8560:7:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
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
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 3802,
                      "name": "_addTokenTo",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 3910,
                      "src": "8544:11:22",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,uint256)"
                      }
                    },
                    "id": 3805,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "8544:24:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 3806,
                  "nodeType": "ExpressionStatement",
                  "src": "8544:24:22"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "hexValue": "30",
                            "id": 3809,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "8596:1:22",
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
                          "id": 3808,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "8588:7:22",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_address_$",
                            "typeString": "type(address)"
                          },
                          "typeName": "address"
                        },
                        "id": 3810,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "8588:10:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 3811,
                        "name": "to",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3789,
                        "src": "8600:2:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 3812,
                        "name": "tokenId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3791,
                        "src": "8604:7:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
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
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 3807,
                      "name": "Transfer",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 4433,
                      "src": "8579:8:22",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,address,uint256)"
                      }
                    },
                    "id": 3813,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "8579:33:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 3814,
                  "nodeType": "EmitStatement",
                  "src": "8574:38:22"
                }
              ]
            },
            "documentation": "@dev Internal function to mint a new token\nReverts if the given token ID already exists\n@param to The address that will own the minted token\n@param tokenId uint256 ID of the token to be minted by the msg.sender",
            "id": 3816,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "_mint",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 3792,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3789,
                  "name": "to",
                  "nodeType": "VariableDeclaration",
                  "scope": 3816,
                  "src": "8469:10:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 3788,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "8469:7:22",
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
                  "id": 3791,
                  "name": "tokenId",
                  "nodeType": "VariableDeclaration",
                  "scope": 3816,
                  "src": "8481:15:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 3790,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "8481:7:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "8468:29:22"
            },
            "payable": false,
            "returnParameters": {
              "id": 3793,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "8507:0:22"
            },
            "scope": 3986,
            "src": "8454:163:22",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 3841,
              "nodeType": "Block",
              "src": "8858:126:22",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 3824,
                        "name": "owner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3818,
                        "src": "8879:5:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 3825,
                        "name": "tokenId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3820,
                        "src": "8886:7:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
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
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 3823,
                      "name": "_clearApproval",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 3875,
                      "src": "8864:14:22",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,uint256)"
                      }
                    },
                    "id": 3826,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "8864:30:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 3827,
                  "nodeType": "ExpressionStatement",
                  "src": "8864:30:22"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 3829,
                        "name": "owner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3818,
                        "src": "8917:5:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 3830,
                        "name": "tokenId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3820,
                        "src": "8924:7:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
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
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 3828,
                      "name": "_removeTokenFrom",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 3945,
                      "src": "8900:16:22",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,uint256)"
                      }
                    },
                    "id": 3831,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "8900:32:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 3832,
                  "nodeType": "ExpressionStatement",
                  "src": "8900:32:22"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 3834,
                        "name": "owner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3818,
                        "src": "8952:5:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "hexValue": "30",
                            "id": 3836,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "8967:1:22",
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
                          "id": 3835,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "8959:7:22",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_address_$",
                            "typeString": "type(address)"
                          },
                          "typeName": "address"
                        },
                        "id": 3837,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "8959:10:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 3838,
                        "name": "tokenId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3820,
                        "src": "8971:7:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
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
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 3833,
                      "name": "Transfer",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 4433,
                      "src": "8943:8:22",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,address,uint256)"
                      }
                    },
                    "id": 3839,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "8943:36:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 3840,
                  "nodeType": "EmitStatement",
                  "src": "8938:41:22"
                }
              ]
            },
            "documentation": "@dev Internal function to burn a specific token\nReverts if the token does not exist\n@param tokenId uint256 ID of the token being burned by the msg.sender",
            "id": 3842,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "_burn",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 3821,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3818,
                  "name": "owner",
                  "nodeType": "VariableDeclaration",
                  "scope": 3842,
                  "src": "8817:13:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 3817,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "8817:7:22",
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
                  "id": 3820,
                  "name": "tokenId",
                  "nodeType": "VariableDeclaration",
                  "scope": 3842,
                  "src": "8832:15:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 3819,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "8832:7:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "8816:32:22"
            },
            "payable": false,
            "returnParameters": {
              "id": 3822,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "8858:0:22"
            },
            "scope": 3986,
            "src": "8802:182:22",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 3874,
              "nodeType": "Block",
              "src": "9309:146:22",
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
                        "id": 3854,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "id": 3851,
                              "name": "tokenId",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 3846,
                              "src": "9331:7:22",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            ],
                            "id": 3850,
                            "name": "ownerOf",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [
                              3534
                            ],
                            "referencedDeclaration": 3534,
                            "src": "9323:7:22",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_view$_t_uint256_$returns$_t_address_$",
                              "typeString": "function (uint256) view returns (address)"
                            }
                          },
                          "id": 3852,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "9323:16:22",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "==",
                        "rightExpression": {
                          "argumentTypes": null,
                          "id": 3853,
                          "name": "owner",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 3844,
                          "src": "9343:5:22",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "src": "9323:25:22",
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
                      "id": 3849,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        4626,
                        4627
                      ],
                      "referencedDeclaration": 4626,
                      "src": "9315:7:22",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 3855,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "9315:34:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 3856,
                  "nodeType": "ExpressionStatement",
                  "src": "9315:34:22"
                },
                {
                  "condition": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "id": 3863,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 3857,
                        "name": "_tokenApprovals",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3469,
                        "src": "9359:15:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_uint256_$_t_address_$",
                          "typeString": "mapping(uint256 => address)"
                        }
                      },
                      "id": 3859,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 3858,
                        "name": "tokenId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3846,
                        "src": "9375:7:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "IndexAccess",
                      "src": "9359:24:22",
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
                          "id": 3861,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "9395:1:22",
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
                        "id": 3860,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "9387:7:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_address_$",
                          "typeString": "type(address)"
                        },
                        "typeName": "address"
                      },
                      "id": 3862,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "9387:10:22",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "9359:38:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": null,
                  "id": 3873,
                  "nodeType": "IfStatement",
                  "src": "9355:96:22",
                  "trueBody": {
                    "id": 3872,
                    "nodeType": "Block",
                    "src": "9399:52:22",
                    "statements": [
                      {
                        "expression": {
                          "argumentTypes": null,
                          "id": 3870,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 3864,
                              "name": "_tokenApprovals",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 3469,
                              "src": "9407:15:22",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_uint256_$_t_address_$",
                                "typeString": "mapping(uint256 => address)"
                              }
                            },
                            "id": 3866,
                            "indexExpression": {
                              "argumentTypes": null,
                              "id": 3865,
                              "name": "tokenId",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 3846,
                              "src": "9423:7:22",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": true,
                            "nodeType": "IndexAccess",
                            "src": "9407:24:22",
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
                                "id": 3868,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "9442:1:22",
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
                              "id": 3867,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "nodeType": "ElementaryTypeNameExpression",
                              "src": "9434:7:22",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_address_$",
                                "typeString": "type(address)"
                              },
                              "typeName": "address"
                            },
                            "id": 3869,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "typeConversion",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "9434:10:22",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "src": "9407:37:22",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "id": 3871,
                        "nodeType": "ExpressionStatement",
                        "src": "9407:37:22"
                      }
                    ]
                  }
                }
              ]
            },
            "documentation": "@dev Internal function to clear current approval of a given token ID\nReverts if the given address is not indeed the owner of the token\n@param owner owner of the token\n@param tokenId uint256 ID of the token to be transferred",
            "id": 3875,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "_clearApproval",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 3847,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3844,
                  "name": "owner",
                  "nodeType": "VariableDeclaration",
                  "scope": 3875,
                  "src": "9268:13:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 3843,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "9268:7:22",
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
                  "id": 3846,
                  "name": "tokenId",
                  "nodeType": "VariableDeclaration",
                  "scope": 3875,
                  "src": "9283:15:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 3845,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "9283:7:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "9267:32:22"
            },
            "payable": false,
            "returnParameters": {
              "id": 3848,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "9309:0:22"
            },
            "scope": 3986,
            "src": "9244:211:22",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 3909,
              "nodeType": "Block",
              "src": "9775:143:22",
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
                        "id": 3889,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "id": 3883,
                            "name": "_tokenOwner",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 3465,
                            "src": "9789:11:22",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_uint256_$_t_address_$",
                              "typeString": "mapping(uint256 => address)"
                            }
                          },
                          "id": 3885,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 3884,
                            "name": "tokenId",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 3879,
                            "src": "9801:7:22",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "9789:20:22",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "==",
                        "rightExpression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "hexValue": "30",
                              "id": 3887,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "9821:1:22",
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
                            "id": 3886,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "9813:7:22",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_address_$",
                              "typeString": "type(address)"
                            },
                            "typeName": "address"
                          },
                          "id": 3888,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "9813:10:22",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "src": "9789:34:22",
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
                      "id": 3882,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        4626,
                        4627
                      ],
                      "referencedDeclaration": 4626,
                      "src": "9781:7:22",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 3890,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "9781:43:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 3891,
                  "nodeType": "ExpressionStatement",
                  "src": "9781:43:22"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 3896,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 3892,
                        "name": "_tokenOwner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3465,
                        "src": "9830:11:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_uint256_$_t_address_$",
                          "typeString": "mapping(uint256 => address)"
                        }
                      },
                      "id": 3894,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 3893,
                        "name": "tokenId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3879,
                        "src": "9842:7:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "9830:20:22",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 3895,
                      "name": "to",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 3877,
                      "src": "9853:2:22",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "9830:25:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 3897,
                  "nodeType": "ExpressionStatement",
                  "src": "9830:25:22"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 3907,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 3898,
                        "name": "_ownedTokensCount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3473,
                        "src": "9861:17:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                          "typeString": "mapping(address => uint256)"
                        }
                      },
                      "id": 3900,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 3899,
                        "name": "to",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3877,
                        "src": "9879:2:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "9861:21:22",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "hexValue": "31",
                          "id": 3905,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "9911:1:22",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_1_by_1",
                            "typeString": "int_const 1"
                          },
                          "value": "1"
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_rational_1_by_1",
                            "typeString": "int_const 1"
                          }
                        ],
                        "expression": {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "id": 3901,
                            "name": "_ownedTokensCount",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 3473,
                            "src": "9885:17:22",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                              "typeString": "mapping(address => uint256)"
                            }
                          },
                          "id": 3903,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 3902,
                            "name": "to",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 3877,
                            "src": "9903:2:22",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "9885:21:22",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 3904,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "add",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 2650,
                        "src": "9885:25:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                          "typeString": "function (uint256,uint256) pure returns (uint256)"
                        }
                      },
                      "id": 3906,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "9885:28:22",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "9861:52:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 3908,
                  "nodeType": "ExpressionStatement",
                  "src": "9861:52:22"
                }
              ]
            },
            "documentation": "@dev Internal function to add a token ID to the list of a given address\n@param to address representing the new owner of the given token ID\n@param tokenId uint256 ID of the token to be added to the tokens list of the given address",
            "id": 3910,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "_addTokenTo",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 3880,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3877,
                  "name": "to",
                  "nodeType": "VariableDeclaration",
                  "scope": 3910,
                  "src": "9737:10:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 3876,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "9737:7:22",
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
                  "id": 3879,
                  "name": "tokenId",
                  "nodeType": "VariableDeclaration",
                  "scope": 3910,
                  "src": "9749:15:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 3878,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "9749:7:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "9736:29:22"
            },
            "payable": false,
            "returnParameters": {
              "id": 3881,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "9775:0:22"
            },
            "scope": 3986,
            "src": "9716:202:22",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 3944,
              "nodeType": "Block",
              "src": "10261:145:22",
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
                        "id": 3922,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "id": 3919,
                              "name": "tokenId",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 3914,
                              "src": "10283:7:22",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            ],
                            "id": 3918,
                            "name": "ownerOf",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [
                              3534
                            ],
                            "referencedDeclaration": 3534,
                            "src": "10275:7:22",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_view$_t_uint256_$returns$_t_address_$",
                              "typeString": "function (uint256) view returns (address)"
                            }
                          },
                          "id": 3920,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "10275:16:22",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "==",
                        "rightExpression": {
                          "argumentTypes": null,
                          "id": 3921,
                          "name": "from",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 3912,
                          "src": "10295:4:22",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "src": "10275:24:22",
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
                      "id": 3917,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        4626,
                        4627
                      ],
                      "referencedDeclaration": 4626,
                      "src": "10267:7:22",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 3923,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "10267:33:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 3924,
                  "nodeType": "ExpressionStatement",
                  "src": "10267:33:22"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 3934,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 3925,
                        "name": "_ownedTokensCount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3473,
                        "src": "10306:17:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                          "typeString": "mapping(address => uint256)"
                        }
                      },
                      "id": 3927,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 3926,
                        "name": "from",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3912,
                        "src": "10324:4:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "10306:23:22",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "hexValue": "31",
                          "id": 3932,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "10360:1:22",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_1_by_1",
                            "typeString": "int_const 1"
                          },
                          "value": "1"
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_rational_1_by_1",
                            "typeString": "int_const 1"
                          }
                        ],
                        "expression": {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "id": 3928,
                            "name": "_ownedTokensCount",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 3473,
                            "src": "10332:17:22",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                              "typeString": "mapping(address => uint256)"
                            }
                          },
                          "id": 3930,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 3929,
                            "name": "from",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 3912,
                            "src": "10350:4:22",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "10332:23:22",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 3931,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sub",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 2626,
                        "src": "10332:27:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                          "typeString": "function (uint256,uint256) pure returns (uint256)"
                        }
                      },
                      "id": 3933,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "10332:30:22",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "10306:56:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 3935,
                  "nodeType": "ExpressionStatement",
                  "src": "10306:56:22"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 3942,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 3936,
                        "name": "_tokenOwner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3465,
                        "src": "10368:11:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_uint256_$_t_address_$",
                          "typeString": "mapping(uint256 => address)"
                        }
                      },
                      "id": 3938,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 3937,
                        "name": "tokenId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3914,
                        "src": "10380:7:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "10368:20:22",
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
                          "id": 3940,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "10399:1:22",
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
                        "id": 3939,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "10391:7:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_address_$",
                          "typeString": "type(address)"
                        },
                        "typeName": "address"
                      },
                      "id": 3941,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "10391:10:22",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "10368:33:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 3943,
                  "nodeType": "ExpressionStatement",
                  "src": "10368:33:22"
                }
              ]
            },
            "documentation": "@dev Internal function to remove a token ID from the list of a given address\n@param from address representing the previous owner of the given token ID\n@param tokenId uint256 ID of the token to be removed from the tokens list of the given address",
            "id": 3945,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "_removeTokenFrom",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 3915,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3912,
                  "name": "from",
                  "nodeType": "VariableDeclaration",
                  "scope": 3945,
                  "src": "10221:12:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 3911,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "10221:7:22",
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
                  "id": 3914,
                  "name": "tokenId",
                  "nodeType": "VariableDeclaration",
                  "scope": 3945,
                  "src": "10235:15:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 3913,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "10235:7:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "10220:31:22"
            },
            "payable": false,
            "returnParameters": {
              "id": 3916,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "10261:0:22"
            },
            "scope": 3986,
            "src": "10195:211:22",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 3984,
              "nodeType": "Block",
              "src": "11054:198:22",
              "statements": [
                {
                  "condition": {
                    "argumentTypes": null,
                    "id": 3961,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "UnaryOperation",
                    "operator": "!",
                    "prefix": true,
                    "src": "11064:16:22",
                    "subExpression": {
                      "argumentTypes": null,
                      "arguments": [],
                      "expression": {
                        "argumentTypes": [],
                        "expression": {
                          "argumentTypes": null,
                          "id": 3958,
                          "name": "to",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 3949,
                          "src": "11065:2:22",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "id": 3959,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "isContract",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 4607,
                        "src": "11065:13:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_view$_t_address_$returns$_t_bool_$bound_to$_t_address_$",
                          "typeString": "function (address) view returns (bool)"
                        }
                      },
                      "id": 3960,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "11065:15:22",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": null,
                  "id": 3965,
                  "nodeType": "IfStatement",
                  "src": "11060:48:22",
                  "trueBody": {
                    "id": 3964,
                    "nodeType": "Block",
                    "src": "11082:26:22",
                    "statements": [
                      {
                        "expression": {
                          "argumentTypes": null,
                          "hexValue": "74727565",
                          "id": 3962,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "bool",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "11097:4:22",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          "value": "true"
                        },
                        "functionReturnParameters": 3957,
                        "id": 3963,
                        "nodeType": "Return",
                        "src": "11090:11:22"
                      }
                    ]
                  }
                },
                {
                  "assignments": [
                    3967
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 3967,
                      "name": "retval",
                      "nodeType": "VariableDeclaration",
                      "scope": 3985,
                      "src": "11113:13:22",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes4",
                        "typeString": "bytes4"
                      },
                      "typeName": {
                        "id": 3966,
                        "name": "bytes4",
                        "nodeType": "ElementaryTypeName",
                        "src": "11113:6:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes4",
                          "typeString": "bytes4"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 3978,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 3972,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4623,
                          "src": "11173:3:22",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 3973,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "11173:10:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 3974,
                        "name": "from",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3947,
                        "src": "11185:4:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 3975,
                        "name": "tokenId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3951,
                        "src": "11191:7:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 3976,
                        "name": "_data",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3953,
                        "src": "11200:5:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
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
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 3969,
                            "name": "to",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 3949,
                            "src": "11145:2:22",
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
                          "id": 3968,
                          "name": "IERC721Receiver",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4589,
                          "src": "11129:15:22",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_contract$_IERC721Receiver_$4589_$",
                            "typeString": "type(contract IERC721Receiver)"
                          }
                        },
                        "id": 3970,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "11129:19:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_IERC721Receiver_$4589",
                          "typeString": "contract IERC721Receiver"
                        }
                      },
                      "id": 3971,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "onERC721Received",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 4588,
                      "src": "11129:36:22",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_address_$_t_uint256_$_t_bytes_memory_ptr_$returns$_t_bytes4_$",
                        "typeString": "function (address,address,uint256,bytes memory) external returns (bytes4)"
                      }
                    },
                    "id": 3977,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "11129:77:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes4",
                      "typeString": "bytes4"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "11113:93:22"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "components": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_bytes4",
                          "typeString": "bytes4"
                        },
                        "id": 3981,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 3979,
                          "name": "retval",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 3967,
                          "src": "11220:6:22",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes4",
                            "typeString": "bytes4"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "==",
                        "rightExpression": {
                          "argumentTypes": null,
                          "id": 3980,
                          "name": "_ERC721_RECEIVED",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 3461,
                          "src": "11230:16:22",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes4",
                            "typeString": "bytes4"
                          }
                        },
                        "src": "11220:26:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "id": 3982,
                    "isConstant": false,
                    "isInlineArray": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "TupleExpression",
                    "src": "11219:28:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 3957,
                  "id": 3983,
                  "nodeType": "Return",
                  "src": "11212:35:22"
                }
              ]
            },
            "documentation": "@dev Internal function to invoke `onERC721Received` on a target address\nThe call is not executed if the target address is not a contract\n@param from address representing the previous owner of the given token ID\n@param to target address that will receive the tokens\n@param tokenId uint256 ID of the token to be transferred\n@param _data bytes optional data to send along with the call\n@return whether the call correctly returned the expected magic value",
            "id": 3985,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "_checkAndCallSafeTransfer",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 3954,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3947,
                  "name": "from",
                  "nodeType": "VariableDeclaration",
                  "scope": 3985,
                  "src": "10949:12:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 3946,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "10949:7:22",
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
                  "id": 3949,
                  "name": "to",
                  "nodeType": "VariableDeclaration",
                  "scope": 3985,
                  "src": "10967:10:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 3948,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "10967:7:22",
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
                  "id": 3951,
                  "name": "tokenId",
                  "nodeType": "VariableDeclaration",
                  "scope": 3985,
                  "src": "10983:15:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 3950,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "10983:7:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 3953,
                  "name": "_data",
                  "nodeType": "VariableDeclaration",
                  "scope": 3985,
                  "src": "11004:11:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 3952,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "11004:5:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "10943:76:22"
            },
            "payable": false,
            "returnParameters": {
              "id": 3957,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3956,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 3985,
                  "src": "11046:4:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 3955,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "11046:4:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "11045:6:22"
            },
            "scope": 3986,
            "src": "10909:343:22",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "internal"
          }
        ],
        "scope": 3987,
        "src": "340:10914:22"
      }
    ],
    "src": "0:11255:22"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.25+commit.59dbf8f1.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "3.0.0-beta.1",
  "updatedAt": "2018-10-19T20:14:01.433Z"
}