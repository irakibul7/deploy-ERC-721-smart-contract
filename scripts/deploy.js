// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
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
