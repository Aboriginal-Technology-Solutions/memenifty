import React, { Component } from 'react';
import styles from '../styles/Home.module.css'


class MainBody extends React.Component{
  render() {
    return(
      <body className="container">
      <br />
      <br />
        <div className="d-flex mx-auto my-auto justify-content-center">
          <div className={styles.code}>
            What is Memenifty?
          </div>
        </div>
        <div className="d-flex mx-auto my-auto">
          <p className="d-flex mx-5 my-auto ">
            Memenifty is a project brainstormed by r/ethdev to help the community learn and grow together.
            This project will allow users to mint an image as an NFT to be stored on the blockchain forever.
          </p>
        </div>
      </body>


    )
  }
}

export default MainBody;
