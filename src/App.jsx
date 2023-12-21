import { useState } from "react";
import "./App.css";

function App() {
  const [changeLanguage, setChangeLanguage] = useState("Greeting Message");
  return (
    <div className="App">
      <div className="greeting-container">{changeLanguage}</div>
      <div className="buttons">
        <button onClick={(event) => setChangeLanguage("สวัสดี!")}>
          สวัสดี!
        </button>
        <button onClick={(event) => setChangeLanguage("Hi!")}>Hi!</button>
        <button onClick={(event) => setChangeLanguage("你好!")}>你好!</button>
      </div>
    </div>
  );
}

export default App;
