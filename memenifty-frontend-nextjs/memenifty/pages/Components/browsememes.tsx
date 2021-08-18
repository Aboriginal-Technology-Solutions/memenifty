import React, { Component } from 'react';
import styles from '../../styles/Home.module.css'

class BrowseMemes extends React.Component {

  render() {
    return(
      <div className="container-fluid mx-auto my-auto">
        <div className="d-flex mx-auto my-auto justify-contents-center">
          <h1 className="h1 mx-auto my-auto"> Browse Memes </h1>
        </div>
        <div className="d-flex mx-auto my-auto">
          <div className="card">
            <img className="card-img-top" src="" alt="Card image cap">
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </img>
          </div>
        </div>
      </div>
    )
  }
}

export default BrowseMemes
