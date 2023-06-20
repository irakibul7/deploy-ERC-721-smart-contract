require('dotenv').config();
const hre = require('hardhat');
const ContractJson = require('../artifacts/contracts/SPToken.sol/SwopAstro.json');

const abi = ContractJson.abi;

async function main() {
  const [deployer] = await hre.ethers.getSigners();
  const contractAddress = process.env.CONTRACT_ADDRESS;
  const contract = new hre.ethers.Contract(
    contractAddress,
    abi,
    deployer
  );
  const gasPrice = hre.ethers.utils.parseUnits('150', 'gwei');
  const tokenURI = process.env.TOKEN_URI;
  const tx = await contract.safeMint(deployer.address, tokenURI, {
    gasPrice,
  });
  await tx.wait();
  console.log(`NFT minted: ${tx}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
