const { ethers } = require("hardhat");

async function main() {
    const [deployer] = await ethers.getSigners();
    console.log(`Deploying contracts with the account: ${deployer.address}`);

    const balance = await deployer.getBalance();
    console.log(`Account Balance: ${balance.toString()}`);
    
    const Token = await ethers.getContractFactory("Freezer");
    const token = await Token.deploy("0x9875cb8BD3427dfc6d97c118c7EF85eCe268c897", "0xEC160Eff24ced1BC8F9c3e4831AAB1DA2b39acD7");
    // const token = await Token.deploy();

    console.log(`Token Address: ${token.address}`);
    console.log(`Deployer: ${token.deployer}`);
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });

// npx hardhat run --network testnet ./scripts/deploy.js 
// npx hardhat  verify --network testnet 0x16FB301D3b26F925B08C902e85F99ADF61D85d83 {args}


// pcs testnet factory: 0x6725F303b657a9451d8BA641348b6761A6CC7a17
// pcs testnet router: 0xD99D1c33F9fC3444f8101754aBC46c52416550D1

// pcs mainnet router: 0x05fF2B0DB69458A0750badebc4f9e13aDd608C7F