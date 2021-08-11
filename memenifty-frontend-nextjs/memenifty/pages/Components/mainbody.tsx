import React, { Component } from 'react';
import styles from '../../styles/Home.module.css'

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
          <button type="button"
                  class="btn btn-secondary"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal">
          Mint a Meme!
          </button>
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                    ...
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Save changes</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

    )
  }
}

export default MainBody;
