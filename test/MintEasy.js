const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("MintEasy", function () {
    it("should mint 50 tokens to the caller", async function () {
        const [owner] = await ethers.getSigners();
        const MintEasy = await ethers.getContractFactory("MintEasy");
        const mintEasy = await MintEasy.deploy();

        const tx = await mintEasy.mint();
        await tx.wait();

        const balance = await mintEasy.balanceOf(owner.address);
        expect(balance).to.equal(50n * 10n ** 18n);
    });
});
