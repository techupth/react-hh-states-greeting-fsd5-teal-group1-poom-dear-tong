import { useState } from "react";
import "./App.css";

function App() {
  const [message, setMessage] = useState("Greeting Message");
  const language = (e) => {
    setMessage(e.target.value);
  };
  return (
    <div className="App">
      <div className="greeting-container">{message}</div>
      <div className="buttons">
        <button value="สวัสดี!" onClick={language}>
          สวัสดี!
        </button>
        <button value="Hi!" onClick={language}>
          Hi!
        </button>
        <button value="你好!" onClick={language}>
          你好!
        </button>
      </div>
    </div>
  );
}

export default App;
