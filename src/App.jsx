import { useState } from "react";
import "./App.css";

function App() {
  function GreetingMessage(event) {
    setDefaultMessage(event.target.value);
  }
  const [defaultMessage, setDefaultMessage] = useState("Greeting Message");
  return (
    <div className="App">
      <div className="greeting-container">{defaultMessage}</div>
      <div className="buttons">
        <button value={"สวัสดี!"} onClick={GreetingMessage}>
          สวัสดี!
        </button>
        <button value={"Hi!"} onClick={GreetingMessage}>
          Hi!
        </button>
        <button value={"你好!"} onClick={GreetingMessage}>
          你好!
        </button>
      </div>
    </div>
  );
}

export default App;
