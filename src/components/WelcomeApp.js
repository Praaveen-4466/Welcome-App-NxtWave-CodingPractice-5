import React, { Component } from "react";

import "./WelcomeApp.css";

class Welcome extends Component {
  state = {
    isSubscribed: false,
  };

  onSubscribe = () => {
    this.setState((prevState) => ({ isSubscribed: !prevState.isSubscribed }));
  };
  getButtonText = () => {
    const { isSubscribed } = this.state;

    return isSubscribed ? "Subscribe" : "Subscribed";
  };

  render() {
    const buttonText = this.getButtonText();
    return (
      <div className="container">
        <h1 className="heading">Welcome</h1>
        <p className="paragraph"> Thank You! Happy Learning </p>
        <div className="btn-container">
          <button className="button" onClick={this.onSubscribe}>
            {buttonText}
          </button>
        </div>
      </div>
    );
  }
}

export default Welcome;
