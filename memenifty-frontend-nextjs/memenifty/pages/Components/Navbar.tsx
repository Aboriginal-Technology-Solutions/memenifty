import React, { Component } from 'react'
import ConnectMetaMask from './web3container.tsx'
import LoadBlockChainData from './web3container.tsx'
import MintMemePopup from './MintMemePopup.tsx'

class MainNav extends React.Component{

  render() {
    return(
        <div className="container-fluid fixed-top bg-light flex-md-nowrap mx-auto my-auto shadow d-flex flex-column">
          <div className="d-flex col-5 flex-row mx-auto my-auto">
            <div className="d-flex col-4 mx-auto my-auto"></div>
              <a
                className="navbar-brand mx-auto my-auto d-flex text-dark px-0 col-3"
                target="r/ethdev"
                rel="noopener noreferrer"
              >
              <img src='https://styles.redditmedia.com/t5_39dcn/styles/communityIcon_p8az7m00uio61.png?width=256&s=795bbfa68fd69b3eed171e2d6f03daaec65b1d15'
                width="50"
                height="50"
                alt=""
                href="https://reddit.com/r/ethdev"
                className="d-flex mx-auto my-auto px-0">
              </img>
                Memenifty
              </a>
          <div className="d-flex col-8 mx-auto my-auto"></div>
          <button
              type="button"
              className="d-flex col-4 p-1 mx-auto my-auto btn btn-secondary"
              onClick={ ConnectMetaMask }>
                <div className='d-flex mx-auto my-auto text-light'>Connect to MetaMask</div>
              </button>
          </div>
          <div className="d-flex col-5 mx-auto my-auto"></div>
          <ui className="nav-item d-flex flex-row justify-content-center">
              <a className="nav-link text-dark" href="localhost:3000">Home</a>
              <a className="nav-link text-dark" href="localhost:3000">Browse Memes</a>
              <a className="nav-link text-dark"
                  onClick={ MintMemePopup }>Mint a Meme</a>
          </ui>
        </div>
    )
  }
}


export default MainNav;
