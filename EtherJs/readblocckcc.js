const{ethers} = require("ethers");
const{JsonRpcprovider} = require("ethers");
const provider = new ethers.providers.JsonRpcProvider('https://mainnet.infura.io/v3/bcace98d7a364ecba7f9021a2500c832');

const queryBlockchain=async()=>{
    const balance = await provider.getBalance("0x4838B106FCe9647Bdf1E7877BF73cE8B0BAD5f97");
    console.log("Account Balance in BN: ", balance);

    const etherBalance = ethers.utils.formatEther(balance);
    console.log("Account Balance in Ether: ", etherBalance)
}
queryBlockchain();