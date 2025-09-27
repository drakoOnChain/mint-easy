const hre = require("hardhat");

async function main() {
    const [deployer] = await hre.ethers.getSigners();

    console.log("Deploying contracts with the account:", deployer.address);

    const MintEasy = await hre.ethers.getContractFactory("MintEasy");
    // deploy() now returns the deployed contract directly
    const mintEasy = await MintEasy.deploy();

    // No need to call mintEasy.deployed() in v6
    console.log("MintEasy deployed to:", mintEasy.target); // use .target instead of .address
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
