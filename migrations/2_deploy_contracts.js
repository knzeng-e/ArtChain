const Migrations = artifacts.require("ArtChain");

module.exports = function(deployer) {
  deployer.deploy(Migrations);
};
