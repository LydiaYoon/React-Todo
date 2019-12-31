import React, { Component } from "react";

class ScrollBox extends Component {
  scrollToBottom = () => {
    const { scrollHeight, clientHeight } = this.box;
    /*
      위의 비구조화 할당 문법의 코드는 아래와 같은 의미
      const scrollHeight = this.box.scrollHeight;
      const clientHeight = this.box.clienHeight;
    */
    this.box.scrollTop = scrollHeight - clientHeight;
  };

  render() {
    const style = {
      border: "1px solid black",
      width: "300px",
      height: "300px",
      overflow: "auto",
      position: "relative"
    };

    const innerStyle = {
      width: "100%",
      height: "650px",
      background: "linear-gradient(white, blue)"
    };
    return (
      <>
        <h4>Scroll Box</h4>
        <div
          style={style}
          ref={ref => {
            this.box = ref;
          }}
        >
          <div style={innerStyle}></div>
        </div>
      </>
    );
  }
}

export default ScrollBox;
