const Memenifty = artifacts.require('./Memenifty.sol')

require('chai')
  .use(require('chai-as-promised'))
  .should()

contract('Memenifty', (accounts) => {
  let contract

  before(async () => {
    contract = await Memenifty.deployed()
  })

  describe('deployment', async () => {

    it('connects to accounts', async () => {
      let accounts = await web3.eth.getAccounts()
      let deployer = accounts[0]
      console.log("Deployer address", deployer)
    })

    it('deploys successfully', async() => {
      const address = await contract.address
      console.log("Contract Address:", address)
      assert.notEqual(address, 0x0)
      assert.notEqual(address, '')
      assert.notEqual(address, null)
      assert.notEqual(address, undefined)
    })

    it('has a name', async() => {
      const name = await contract.name()
      contract.name().then(console.log, console.error)
      assert.equal(name, 'Meme')
    })

    it('has a symbol', async() => {
      const symbol = await contract.symbol()
      contract.symbol().then(console.log, console.error)
      assert.equal(symbol, 'MEME')
    })

    it('can be minted', async() => {
      let accounts = await web3.eth.getAccounts()
      let receiver = accounts[1]
      let hash = "QmdsS3bPUkqTDkyL6XCYEEXMcqZtwPZwCRCgLwzwNS67ub"
      console.log("Reciever Address:", receiver)
      contract.mintMeme(receiver, hash)
    })

    it('has a balance', async() => {
      let accounts = await web3.eth.getAccounts()
      let receiver = accounts[1]
      let balance = await contract.balanceOf(receiver)
      await contract.balanceOf(receiver).then(console.log)
      assert.equal(balance, 1)
    })
  })
})
