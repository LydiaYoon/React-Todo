import React, { Component } from "react";

class RefSample extends Component {
  input = React.createRef();

  handleFocus = () => {
    this.input.current.focus();
  };

  render() {
    return (
      <div>
        <h4>Ref Sample</h4>
        <input ref={this.input} />
      </div>
    );
  }
}

export default RefSample;
