const Caver = require("caver-js");
const caver = new Caver("https://api.baobab.klaytn.net:8651/");

var abi = [
  {
    constant: true,
    inputs: [
      {
        name: "",
        type: "uint256"
      }
    ],
    name: "issues",
    outputs: [
      {
        name: "id",
        type: "uint256"
      },
      {
        name: "owner",
        type: "address"
      },
      {
        name: "repo",
        type: "string"
      },
      {
        name: "title",
        type: "string"
      },
      {
        name: "price",
        type: "uint256"
      },
      {
        name: "solved",
        type: "bool"
      },
      {
        name: "active",
        type: "bool"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        name: "github_id",
        type: "string"
      }
    ],
    name: "applyAccount",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: true,
    inputs: [
      {
        name: "",
        type: "address"
      },
      {
        name: "",
        type: "uint256"
      }
    ],
    name: "issueSolvedBy",
    outputs: [
      {
        name: "",
        type: "uint256"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        name: "new_address",
        type: "address"
      }
    ],
    name: "assignAccountToNewAddress",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "erc20",
    outputs: [
      {
        name: "",
        type: "address"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        name: "_id",
        type: "uint256"
      },
      {
        name: "repo",
        type: "string"
      },
      {
        name: "title",
        type: "string"
      },
      {
        name: "tags",
        type: "string[]"
      },
      {
        name: "active",
        type: "bool"
      }
    ],
    name: "editIssueContents",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "owner",
    outputs: [
      {
        name: "",
        type: "address"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        name: "_id",
        type: "uint256"
      },
      {
        name: "price",
        type: "uint256"
      }
    ],
    name: "editIssuePrice",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: true,
    inputs: [
      {
        name: "",
        type: "address"
      }
    ],
    name: "githubId",
    outputs: [
      {
        name: "",
        type: "string"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        name: "_id",
        type: "uint256"
      },
      {
        name: "by",
        type: "address"
      }
    ],
    name: "solve",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        name: "new_erc20",
        type: "address"
      }
    ],
    name: "changeERC20",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: true,
    inputs: [
      {
        name: "",
        type: "address"
      },
      {
        name: "",
        type: "uint256"
      }
    ],
    name: "issueMadeBy",
    outputs: [
      {
        name: "",
        type: "uint256"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        name: "repo",
        type: "string"
      },
      {
        name: "title",
        type: "string"
      },
      {
        name: "tags",
        type: "string[]"
      },
      {
        name: "price",
        type: "uint256"
      }
    ],
    name: "makeIssue",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        name: "_newOwner",
        type: "address"
      }
    ],
    name: "transferOwnership",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        name: "default_erc20",
        type: "address"
      }
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "constructor"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "previousOwner",
        type: "address"
      }
    ],
    name: "OwnershipRenounced",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "previousOwner",
        type: "address"
      },
      {
        indexed: true,
        name: "newOwner",
        type: "address"
      }
    ],
    name: "OwnershipTransferred",
    type: "event"
  }
];

var contractAddress = "0x5881083Fbcc8b99192e93958A2Ac6d21D9fe73b3";
var myContract = new caver.klay.Contract(abi, contractAddress, {
  from: "0x1234567890123456789012345678901234567891", // default from address
  gasPrice: "25000000000" // default gas price in peb, 25 Gpeb in this case
});

export function loadOpenedIssues(callback) {
  loadIssue(0, callback);
}

function loadIssue(idx, callback) {
  myContract.methods
    .issues(idx)
    .call({ from: contractAddress }, function(error, result) {
      if (result !== undefined) {
        if (callback) callback(result);
        else console.log(result);
        loadIssue(idx + 1);
      }
    });
}
