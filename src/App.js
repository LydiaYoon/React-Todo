import React, { Component } from "react";

// import MyComponent from "./practice/MyComponent";
// import Counter from "./practice/Counter";
// import Say from "./practice/Say";
// import EventPractice3 from "./practice/EventPractice3";
// import ValidationSample from "./practice/ValidationSample";
import ScrollBox from "./practice/ScrollBox";

class App extends Component {
  render() {
    return (
      <>
        {/* <MyComponent name="메타몽" favoriteNumber={1}>
        리액트
      </MyComponent> */}
        {/* <Counter /> */}
        {/* <Say /> */}
        {/* <EventPractice3 /> */}
        {/* <ValidationSample /> */}
        <ScrollBox ref={ref => (this.scrollBox = ref)} />
        <button onClick={() => this.scrollBox.scrollToBottom()}>
          Scroll Down
        </button>
      </>
    );
  }
}

export default App;
