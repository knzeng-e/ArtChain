const Migrations = artifacts.require("DerWanderer");

module.exports = function(deployer) {
  deployer.deploy(Migrations);
};
