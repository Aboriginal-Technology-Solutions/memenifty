// Find Example Test JS - https://github.com/AnAllergyToAnalogy/ERC721/blob/master/tests/Token.test.js

const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const provider = ganache.provider({
    gasLimit: 10000000
});

const web3 = new Web3(provider);

const compiledToken = require('../ethereum/build/TokenERC721.json');
const compiledValidReceiver = require('../ethereum/build/ValidReceiver.json');
const compiledInvalidReceiver = require('../ethereum/build/InvalidReceiver.json');

let accounts;
let token;
const initialTokens = 10;
beforeEach(async () => {
    accounts = await web3.eth.getAccounts();

    token = await new web3.eth.Contract(JSON.parse(compiledToken.interface))
        .deploy({
            data: compiledToken.bytecode,
            arguments: [initialTokens]
        })
         .send({from: accounts[0], gas:'8000000'});
    token.setProvider(provider);
});
