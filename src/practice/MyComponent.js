// import React from "react";
import React, { Component } from "react";
import PropTypes from "prop-types";

/*
// 함수형 컴포넌트
const MyComponent = ({ name, favoriteNumber, children }) => {
  return (
    <div>
      나는 {name} <br />
      children: {children} <br />
      숫자: {favoriteNumber}
    </div>
  );
};

MyComponent.defaultProps = {
  name: "피카츄"
};

MyComponent.propTypes = {
  name: PropTypes.string,
  favoriteNumber: PropTypes.number.isRequired
};
*/

// 클래스형 컴포넌트
class MyComponent extends Component {
  static defaultProps = {
    name: "피카피카"
  };

  static propTypes = {
    name: PropTypes.string,
    favoriteNumber: PropTypes.number.isRequired
  };

  render() {
    const { name, favoriteNumber, children } = this.props; // 비구조화 할당
    return (
      <div>
        나는 {name} <br />
        children: {children} <br />
        숫자: {favoriteNumber}
      </div>
    );
  }
}

export default MyComponent;
