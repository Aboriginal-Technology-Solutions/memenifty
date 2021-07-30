import React, { useState, useEffect } from 'react';
import Web3 from "web3";


async function ConnectMetaMask() {
  const accounts = await window.ethereum.request({ method: 'eth_requestAccounts'})
  const account = accounts[0];
  console.log(account)
    window.ethereum.on('accountsChanged', function (accounts) {
      console.log(accounts[0])
    });
}

ConnectMetaMask();

export default ConnectMetaMask
