require('dotenv').config();
const hre = require('hardhat');

const { ethers } = hre;
async function main() {
  const MyNFT = await hre.ethers.getContractFactory('SwopAstro');
  const gasPrice = ethers.utils.parseUnits('162', 'gwei');
  const myNFT = await MyNFT.deploy({ gasPrice });
  await myNFT.deployed();
  console.log('Contract deployed to address:', myNFT.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
