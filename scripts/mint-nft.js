require("dotenv").config();
const hre = require("hardhat");
const ContractJson = require("../artifacts/contracts/SPToken.sol/SwopAstro.json");

// Get contract ABI and address
const abi = ContractJson.abi;
const contractAddress = process.env.CONTRACT_ADDRESS;

// Get the NFT Metadata IPFS URL
const tokenURI = process.env.TOKEN_URI;

async function mintNFT() {
  const [deployer] = await hre.ethers.getSigners();

  // Create a contract instance
  const contract = new hre.ethers.Contract(contractAddress, abi, deployer);

  const gasPrice = hre.ethers.utils.parseUnits("150", "gwei");

  const nftTxn = await contract.safeMint(deployer.address, tokenURI, {
    gasPrice,
  });
  await nftTxn.wait();
  console.log(
    `NFT Minted! Check it out at: https://polygonscan.com/tx/${nftTxn.hash}`
  );
}

mintNFT()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
