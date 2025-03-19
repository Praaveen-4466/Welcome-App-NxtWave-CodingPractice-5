import React, { Component } from "react";

import "./WelcomeApp.css";

class Welcome extends Component {
  state = {
    isSubscribed: false,
  };

  onSubscribe = () => {
    this.setState((prevState) => ({ isSubscribed: !prevState.isSubscribed }));
  };
 

  render() {
    return (
      <div className="container">
        <h1 className="heading">Welcome</h1>
        <p className="paragraph"> Thank You! Happy Learning </p>
        <div className="btn-container">
          <button className="button" onClick={this.onSubscribe}>
                {this.state.isSubscribed ? "Subscribed" : "Subscribe"}
          </button>
        </div>
      </div>
    );
  }
}

export default Welcome;
