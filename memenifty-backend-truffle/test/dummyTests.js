const Memenifty = artifacts.require('./Memenifty.sol');

contract('Memenifty', (accounts) => {
  let contract

  before(async () => {
    contract = await Memenifty.deployed()
  })

  describe('deployment', async () => {
    it('deploys successfully', async() => {
      const address = contract.address
      console.log(address)
      assert.notEqual(address, '')
    })

    it('has a name', async() => {
      const name = await contract.name
    })
  })
})
