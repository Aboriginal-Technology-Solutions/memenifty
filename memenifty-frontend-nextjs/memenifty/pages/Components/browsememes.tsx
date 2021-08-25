import React, { Component } from 'react';
import styles from '../../styles/Home.module.css'
import LoadContract from './web3container.tsx'


class BrowseMemes extends React.Component {

  render() {
    return(
      <div className="container-fluid mx-auto my-auto">
        <div className="d-flex mx-auto my-auto justify-contents-center">
          <h1 className="h1 mx-auto my-auto"> Browse Memes </h1>
        </div>
        <div className="d-flex mx-auto my-auto">
          <div className="card">
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some Meme</p>
              </div>
          </div>
        </div>
      </div>
    )
  }
}

export default BrowseMemes
