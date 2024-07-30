import React, { useState, useEffect } from "react";
import Hello from "./Components/Hello";

function App() {
  const [name, setName] = useState("");
  const message = "Hi";
  const emoji = "👋";

  useEffect(() => {
    const name = prompt("Enter your name");
    setName(name);
  }, []);

  function ageCheck() {
    let age = prompt("Enter your age");
    if (age > 18) {
      alert("You are eligible to vote");
    } else {
      alert("You are not eligible to vote");
    }
  }

  return (
    <div>
      <Hello name={name} message={message} emoji={emoji} btnClick={ageCheck} />
    </div>
  );
}

export default App;
