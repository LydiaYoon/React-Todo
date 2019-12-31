import React, { useState } from "react";

// useState를 통해 사용하는 상태에 문자열이 아닌 객체를 넣기

const EventPractice3 = () => {
  const [form, setForm] = useState({
    username: "",
    message: ""
  });

  const { username, message } = form;

  const onChange = e => {
    const nextForm = {
      ...form, // 기존의 form 내용을 이 자리에 복사한 뒤
      [e.target.name]: e.target.value // 원하는 값을 덮어씌우기
    };
    setForm(nextForm);
  };

  const onClick = () => {
    alert(username + ": " + message);
    setForm({
      username: "",
      message: ""
    });
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
        onChange={onChange}
      />
      <input
        type="text"
        name="message"
        placeholder="MESSAGE"
        value={message}
        onChange={onChange}
        onKeyPress={onKeyPress}
      />
      <button onClick={onClick}>OK</button>
    </div>
  );
};

export default EventPractice3;
