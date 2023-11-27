import React, { Component } from "react";
import ModalVideo from "react-modal-video";
import "react-modal-video/scss/modal-video.scss";
import play from "../assets/images/Play.svg";

export class videoModal extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
    };
    this.openModal = this.openModal.bind(this);
  }

  openModal() {
    this.setState({ isOpen: true });
  }
  render() {
    return (
      <div>
        <div>
          <ModalVideo
            channel="youtube"
            isOpen={this.state.isOpen}
            videoId="O6AxxYhCxeQ"
            onClose={() => this.setState({ isOpen: false })}
          />
        
          <img src={play}  onClick={this.openModal}/>
        
        </div>
      </div>
    );
  }
}

export default videoModal;
                 
                 