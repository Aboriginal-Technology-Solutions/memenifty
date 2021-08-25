import React, { useState, useEffect } from 'react';
import Web3 from "web3";
import Memenifty from '../abis/Memenifty.json'


async function ConnectMetaMask() {
  const accounts = await window.ethereum.request({ method: 'eth_requestAccounts'})
  const account = accounts[0]
  console.log('Successfully connected to Metamask')
  console.log('Account ID', account)
    window.ethereum.on('accountsChanged', function (accounts) {
      console.log(accounts[0])
    });

}

async function LoadContract() {
  const networkId = await window.ethereum.net.getId()
  const networkData = Memenifty.networks[networkId]
  if(networkData) {
    const abi = Memenifty.abi
    const address = networkData.address
    const myContract = new web3.eth.Contract(abi, address)
    console.log(MyContract)
  } else {
    window.alert('Smart Contract is not deployed to network')
  }

}
export default ConnectMetaMask
