import React from "react";
// import React, { Component } from "react";
import MyComponent from "./MyComponent";
import Counter from "./Counter";
import Say from "./Say";
import EventPractice3 from "./EventPractice3";

const App = () => {
  return (
    <>
      <MyComponent name="메타몽" favoriteNumber={1}>
        리액트
      </MyComponent>
      <Counter />
      <Say />
      <EventPractice3 />
    </>
  );
};

/*
// 함수형 컴포넌트
function App() {
  const name = "react";
  return <div className="react">{name === "react" && <h1>react</h1>}</div>;
}

// 클래스형 컴포넌트
class App extends Component {
  render() {
    const name = "react";
    return <div className="react">{name}</div>;
  }
}
*/

export default App;
