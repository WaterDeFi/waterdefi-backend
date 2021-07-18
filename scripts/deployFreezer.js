const { expect } = require("chai");
const { ethers, verify } = require("hardhat");

async function main() {
    const [deployer] = await ethers.getSigners();
    console.log(`Deploying contracts with the account: ${deployer.address}`);

    const balance = await deployer.getBalance();
    console.log(`Account Balance: ${balance.toString()}`);
    
    const Water = await ethers.getContractFactory("WATER");
    const water = await Water.deploy();

    const Ice = await ethers.getContractFactory("ICE");
    const ice = await Ice.deploy();

    const Freezer = await ethers.getContractFactory("Freezer");
    const freezer = await Freezer.deploy(`${water.address}`, `${ice.address}`);

    console.log(`Water Address: ${water.address}`);
    console.log(`Ice Address: ${ice.address}`);

    console.log(`Freezer Address: ${freezer.address}`);
    console.log(`Deployer: ${freezer.deployer}`);
    
    console.log(`Contract Links:`);
    
    console.log(`https://testnet.bscscan.com/address/${water.address}#code`);
    console.log(`https://testnet.bscscan.com/address/${ice.address}#code`);
    console.log(`https://testnet.bscscan.com/address/${freezer.address}#code`);

    console.log(`Run the following commands:`);

    console.log(`npx hardhat verify --network testnet ${water.address} && npx hardhat verify --network testnet ${ice.address} && npx hardhat verify --network testnet ${freezer.address} "${water.address}" "${ice.address}"`);
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });

// npx hardhat run --network testnet ./scripts/deployFreezer.js 
// npx hardhat  verify --network testnet 0x16FB301D3b26F925B08C902e85F99ADF61D85d83 {args}


// pcs testnet factory: 0x6725F303b657a9451d8BA641348b6761A6CC7a17
// pcs testnet router: 0xD99D1c33F9fC3444f8101754aBC46c52416550D1

// pcs mainnet router: 0x05fF2B0DB69458A0750badebc4f9e13aDd608C7F