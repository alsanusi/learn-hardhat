const { expect } = require("chai");

describe("Token contract", function () {
  it("Deployment should assign the total supply of tokens to the owner", async function () {
    // Object that represents an Ethereum account
    const [owner] = await ethers.getSigners();

    // Abstraction used to deploy new smart contracts
    const Token = await ethers.getContractFactory("Token");

    // Start the deployment
    const hardhatToken = await Token.deploy();

    const ownerBalance = await hardhatToken.balanceOf(owner.address);
    expect(await hardhatToken.totalSupply()).to.equal(ownerBalance);
  });
});