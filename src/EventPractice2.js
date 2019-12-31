import React, { useState } from "react";

// 함수형 컴포넌트로 구현

const EventPractice2 = () => {
  const [username, setUsername] = useState("");
  const [message, setMessage] = useState("");

  const onChangeUsername = e => setUsername(e.target.value);
  const onChangeMessage = e => setMessage(e.target.value);

  const onClick = () => {
    alert(username + ": " + message);
    setUsername("");
    setMessage("");
  };

  const onKeyPress = e => {
    if (e.key === "Enter") {
      onClick();
    }
  };

  return (
    <div>
      <h4>EVENT PRACTICE</h4>
      <input
        type="text"
        name="username"
        placeholder="NAME"
        value={username}
        onChange={onChangeUsername}
      />
      <input
        type="text"
        name="message"
        placeholder="MESSAGE"
        value={message}
        onChange={onChangeMessage}
        onKeyPress={onKeyPress}
      />
      <button onClick={onClick}>OK</button>
    </div>
  );
};

export default EventPractice2;
