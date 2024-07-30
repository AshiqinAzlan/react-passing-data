import React from "react";

function Hello(props) {
  return (
    <div>
      <h1>Hello {props.name}</h1>
      <h2>Today is Amazing!</h2>
      <p>
        {props.message} {props.emoji}
      </p>
      <button onClick={() => props.btnClick()}>Click Here ➡️</button>
    </div>
  );
}

export default Hello;
