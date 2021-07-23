import React, { Component } from 'react';
import Web3 from 'web3';
import detectEthereumProvider from '@metamask/detect-provider';

const provider = await detectEthereumProvider();

if (provider) {
  // From now on, this should always be true:
  // provider === window.ethereum
  startApp(provider); // initialize your app
} else {
  console.log('Please install MetaMask!');
}

class ConnectMetamask extends React.Component{

  render() {
    return(
      <button type="button" className="d-flex col-4 p-1 mx-auto my-auto btn btn-secondary">Connect to MetaMask</button>

    )
  }
}

export default ConnectMetamask
