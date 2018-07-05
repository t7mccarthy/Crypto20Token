var C20 = artifacts.require("./C20.sol");

module.exports = function(deployer) {
  deployer.deploy(C20, 0x4C766Be30D07720146e9bEe43599f6871241b09e, 0x31bF414f7f149763B54B63379f5Ee96Cf1834618, 0, 1);
};
