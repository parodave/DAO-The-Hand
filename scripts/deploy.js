const { ethers } = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying contracts with the account:", deployer.address);

  const Token = await ethers.getContractFactory("EnterpriseToken");
  for (let id = 1; id <= 5; id++) {
    const token = await Token.deploy(`Company${id}`, `CMP${id}`, id);
    await token.deployed();
    console.log(`EnterpriseToken ${id} deployed to:`, token.address);
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
