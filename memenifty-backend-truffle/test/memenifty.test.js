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
      assert.notEqual(address, 0x0)
      assert.notEqual(address, '')
      assert.notEqual(address, null)
      assert.notEqual(address, undefined)
    })

    it('has a name', async() => {
      const name = await contract.name
      assert.equal(name, 'MintedMeme')
    })
  })
})
