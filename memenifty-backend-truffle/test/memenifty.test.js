const Memenifty = artifacts.require("Memenifty");

require('chai')
  .use(require('chai-as-promised'))
  .should()

contract('Memenifty'), (accounts) => {
  let contract

  describe('deployment', async () => {
    it('deploys successfully'), async () => {
      contract = await Memenifty.deployed()
      const address = contract.address
      console.log(address)
      assert.notEqual(address, '')

    }
  })
}
