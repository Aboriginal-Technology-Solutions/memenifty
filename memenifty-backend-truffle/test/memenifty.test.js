const Memenifty = artifacts.require("Memenifty");

contract("Memenfity", accounts => {
  it("should put ERC721 Token in the first account", () =>
      Memenifty.deployed()
        .then(instance => instance.getBalance.call(accounts[0]))
        .then(balance => {
          assert.equal(
            balance.valueOf(),
            1,
            "No ERC721 token in the first account"
          );
        }));

})
