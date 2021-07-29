import React, { useState, useEffect } from 'react';
import Web3 from 'web3'

if (window.ethereum) {
  window.web3 = new Web3(window.ethereum);
} else if (window.web3) {
  window.web3 = new Web3(window.web3.currentProvider);
} else {
  // ganache should be running on the system
  window.web3 = new Web3('http://localhost:8545');
}


const ConnectWallet = async () => {

  const [account, setAccount] = useState(null);

  if (window.ethereum) { //check if Metamask is installed
      try {
        const address = await window.ethereum.enable(); // connect Metamask
        const obj = {
          connectedStatus: true,
          status: "",
          address: address
        }
        return obj;
        console.log(address)
      } catch (error) {
        return {
          connectedStatus: false,
          status: "Connect to Metamask"
        }
      }
  } else {
    return {
      connectedStatus: false,
      status: "You must install Metamask"
    }
  }
}


export default ConnectWallet
