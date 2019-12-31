import React, { Component } from "react";

// 클래스형 컴포넌트로 구현

class EventPractice extends Component {
  state = {
    username: "",
    message: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleClick = () => {
    alert(this.state.username + ": " + this.state.message);
    this.setState({
      username: "",
      message: ""
    });
  };

  handleKeyPress = e => {
    if (e.key === "Enter") {
      this.handleClick();
    }
  };

  render() {
    return (
      <div>
        <h4>EVENT PRACTICE</h4>
        <input
          type="text"
          name="username"
          placeholder="NAME"
          value={this.state.username}
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="message"
          placeholder="MESSAGE"
          value={this.state.message}
          onChange={this.handleChange}
          onKeyPress={this.handleKeyPress}
        />
        <button onClick={this.handleClick}>OK</button>
      </div>
    );
  }
}

export default EventPractice;
