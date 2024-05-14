import "./App.css";
import { useState } from "react";

function App() {
  const [input, setInput] = useState("");
  const [ans, setAns] = useState("");
  const handleInput = (e) => {
    let value = e.target.innerText;
    console.log(value);
    setInput((prev) => prev + value);
  };
  const handleCancel = () => {
    setInput("");
    setAns("");
  };

  const handleEvaluation = () => {
    if (input) {
      let ans = eval(input);
      setAns(ans);
      return;
    }
    setAns("Error")
  };
  return (
    <div className="container">
      <h1>React Calculator</h1>
      <input type="text" value={input} />
      <div className="answer">{ans}</div>
      <div className="buttons">
        <button onClick={handleInput}>7</button>
        <button onClick={handleInput}>8</button>
        <button onClick={handleInput}>9</button>
        <button onClick={handleInput}>+</button>
        <button onClick={handleInput}>4</button>
        <button onClick={handleInput}>5</button>
        <button onClick={handleInput}>6</button>
        <button onClick={handleInput}>-</button>
        <button onClick={handleInput}>1</button>
        <button onClick={handleInput}>2</button>
        <button onClick={handleInput}>3</button>
        <button onClick={handleInput}>*</button>
        <button onClick={handleCancel}>C</button>
        <button onClick={handleInput}>0</button>
        <button onClick={handleEvaluation}>=</button>
        <button onClick={handleInput}>/</button>
      </div>
    </div>
  );
}

export default App;
