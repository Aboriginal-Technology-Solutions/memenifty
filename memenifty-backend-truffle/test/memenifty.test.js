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
    it('deploys successfully', async() => {
      const address = contract.address
      console.log(address)
      assert.notEqual(address, 0x0)
      assert.notEqual(address, '')
      assert.notEqual(address, null)
      assert.notEqual(address, undefined)
    })

    it('has a name', async() => {
      const name = await contract.name()
      contract.name().then(console.log, console.error)
      assert.equal(name, 'MintedMeme')
    })

    it('has a symbol', async() => {
      const symbol = await contract.symbol()
      contract.symbol().then(console.log, console.error)
      assert.equal(symbol, 'MEME')
    })

    it('can be minted', async() => {
      const address = "0x78FaB281ffF55beB4cCEA706512447dafc87822b"
      const hash = "QmdsS3bPUkqTDkyL6XCYEEXMcqZtwPZwCRCgLwzwNS67ub"
      const mintMeme = await contract.mintMeme(address, hash)
      contract.mintMeme().then(console.log(address), console.error)
      contract.mintMeme().then(console.log(hash), console.error)
    })
  })
})
