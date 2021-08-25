import React, { Component } from 'react';
import styles from '../../styles/Home.module.css'
import IpfsForm from './Modal.tsx'
import BrowseMemes from './browsememes.tsx'

class MainBody extends React.Component{
  render() {
    return(
      <div className="container-fluid mt-5 mx-auto">
        <br />
        <br />

        <div className="d-flex mx-auto my-auto justify-content-center">
          <div className={styles.code}>
            What is Memenifty?
          </div>
        </div>

        <div className="d-flex mx-auto my-auto">
          <p className="d-flex mx-auto my-auto">
            Memenifty is a project brainstormed by r/ethdev to help the community learn and grow together.
            This project will allow users to mint an image as an NFT to be stored on the blockchain forever.
          </p>
        </div>
        <div className="d-flex justify-content-center mx-auto my-5">
          <IpfsForm />
        </div>
        <div className="container-fluid justify-contant-center mx-auto my-auto">
          <BrowseMemes />
        </div>
          </div>

    )
  }
}

export default MainBody;
