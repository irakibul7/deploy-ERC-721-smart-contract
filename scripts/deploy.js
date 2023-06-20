require('dotenv').config();
const hre = require('hardhat');

const { ethers } = hre;
async function main() {
  const MyNFT = await hre.ethers.getContractFactory('SwopAstro');
  // const gas = await hre.ethers.provider.getGasPrice();

  const gasPrice = ethers.utils.parseUnits('162', 'gwei');
  // console.log('Current gas price:', gasPrice);
  const myNFT = await MyNFT.deploy({ gasPrice });
  await myNFT.deployed();
  console.log('Contract deployed to address:', myNFT.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
