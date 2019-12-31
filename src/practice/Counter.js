import React, { Component } from "react";

class Counter extends Component {
  state = {
    number: 0,
    fixedNumber: 0
  };

  render() {
    const { number, fixedNumber } = this.state; // state를 조회할 때는 this.state로 조회한다.
    return (
      <div>
        <h3>{number}</h3>
        <h4>fixed: {fixedNumber}</h4>
        <button
          // onClick을 통해 버튼이 클릭되었을 때 호출할 함수를 지정한다.
          onClick={() => {
            // this.setState를 사용하여 state에 새로운 값을 넣을 수 있다.
            this.setState(
              {
                number: number + 1
              },
              () => {
                console.log("setState");
                console.log(this.state)
              }
            );
          }}
        >
          +1
        </button>
      </div>
    );
  }
}

export default Counter;
