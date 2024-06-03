//0x5fd4e5c38c327e34be551014db937cb91c1bb511

const{ethers} = require("ethers");
const provider = new ethers.providers.JsonRpcProvider("https://sepolia.infura.io/v3/bcace98d7a364ecba7f9021a2500c832");
const walletAddress = "0x5fd4e5c38c327e34be551014db937cb91c1bb511";
const walletAbi = [
	{
		"inputs": [],
		"name": "sendEthContract",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_user",
				"type": "address"
			}
		],
		"name": "sendEther",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_num",
				"type": "uint256"
			}
		],
		"name": "setvalue",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_address",
				"type": "address"
			}
		],
		"name": "accountBalance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "contractBalance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getvalue",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "name",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]

const contractInteraction=async()=>{
    const walletContract = new ethers.Contract(walletAddress, walletAbi, provider);
    const contractName = await walletContract.name();
    console.log("Contract Name is: ", contractName);

    const num = await walletContract.getvalue();
    console.log("number value: ", num);
    const actualNum = ethers.utils.formatEther(num);
    console.log("Actual Number is: ", actualNum);

    const contractBalance = await walletContract.contractBalance();
    console.log("Balance: ", contractBalance);
    const actualBalance = ethers.utils.formatEther(contractBalance);
    console.log("Actual Balance is: ", actualBalance);


    const userBalance = await walletContract.accountBalance("0xaEE5daA35681147D1Ef3969f86684D0D53a7FF22");
    console.log("User Balance: ", userBalance);
    const actualUserBalance = ethers.utils.formatEther(userBalance);
    console.log("Actual User Balance is : ", actualUserBalance);
};
contractInteraction();