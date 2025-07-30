module.exports = async ({ getNamedAccounts, deployments }) => {
  const { deployer } = await getNamedAccounts();
  const { deploy } = deployments;
  const { ethers } = require("hardhat");

  for (let id = 1; id <= 5; id++) {
    await deploy(`EnterpriseToken${id}`, {
      from: deployer,
      contract: "EnterpriseToken",
      args: [`Company${id}`, `CMP${id}`, id],
      log: true,
    });
  }
};
module.exports.tags = ["EnterpriseTokens"];
