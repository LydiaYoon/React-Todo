import React, { Component } from "react";
import "./ValidationSample.css";

class ValidationSample extends Component {
  state = {
    password: "",
    clickec: false,
    validated: false
  };

  handleChange = e => {
    this.setState({
      password: e.target.value
    });
  };

  handleButtonClick = () => {
    this.setState({
      clicked: true,
      validated: this.state.password === "0000"
    });
    this.input.focus();
  };

  render() {
    return (
      <div>
        <h4>Validation Sample</h4>
        <input
          type="password"
          value={this.state.password}
          onChange={this.handleChange}
          ref={ref => (this.input = ref)}
          className={
            this.state.clicked
              ? this.state.validated
                ? "success"
                : "failure"
              : ""
          }
        />
        <button onClick={this.handleButtonClick}>Check</button>
      </div>
    );
  }
}

export default ValidationSample;
