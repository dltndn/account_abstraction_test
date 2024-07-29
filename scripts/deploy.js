const { ethers } = require("hardhat");
const { Wallet } = require('ethers');
const Web3 = require("web3");

const ENTRY_POINT_ADDR = '0x0A0a206a0f8BF438C362b565CBdd7213AAd5BFa6'
const SIMPLE_ACCOUNT_IMPL_ADDR = '0x7A3ADb2e7C62e1d423F766b5682C89011C89245A'

async function main() {
    const wallets = await ethers.getSigners();

    const deployEntryPoint = async () => {
        const deployedContract = await ethers.deployContract("EntryPoint", []);
        console.log("Deploying EntryPoint...");
        await deployedContract.waitForDeployment();
        console.log(`EntryPoint 배포 완료 ${deployedContract.target}`);
    };

    const deploySimpleAccountImpl = async () => {
        const deployedContract = await ethers.deployContract("SimpleAccount", [ENTRY_POINT_ADDR]);
        console.log("Deploying SimpleAccountImpl...");
        await deployedContract.waitForDeployment();
        console.log(`SimpleAccountImpl 배포 완료 ${deployedContract.target}`);
    }


    // ---------------------- 실행 부분 -------------------------------------------
    await deploySimpleAccountImpl();
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });