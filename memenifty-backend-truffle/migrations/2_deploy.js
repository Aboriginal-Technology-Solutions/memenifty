// migrations/2_deploy.js
// SPDX-License-Identifier: MIT
const Memenifty = artifacts.require("Memenifty");

module.exports = function(deployer) {
  deployer.deploy(Memenifty, "memenifty","MEME");
};
