import { ethers } from "hardhat";

async function main() {
  const deployerAddr = "0x0e78aBCda7D494c24c9bcB0747A97a74cab8c164";
  const deployer = await ethers.getSigner(deployerAddr);

  console.log(`Deploying contracts with the account: ${deployer.address}`);
  console.log(`Account balance: ${(await deployer.provider.getBalance(deployerAddr)).toString()}`);


  const sbtContract = await ethers.deployContract("SocialFinance");
  await sbtContract.waitForDeployment();

  console.log(`Congratulations! You have just successfully deployed your soul bound tokens.`);
  console.log(`SBT contract address is ${sbtContract.target}. You can verify on https://baobab.scope.klaytn.com/account/${sbtContract.target}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
