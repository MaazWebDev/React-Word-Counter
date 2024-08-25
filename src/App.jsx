import React from "react";
import { useState } from "react";
import "./App.css";

const App = () => {
  const [num,setNum] = useState(0);

  const addCounter = () =>{
    setNum(num + 1);
  }

  const lessCounter = () =>{
    if (num > 0) {
      setNum(num - 1);
    }
  }

  return(
    <div className="container">
    <h1>WORD COUNTER</h1>
    <h2>{num}</h2>
    <button onClick={addCounter}>ADD</button>
    <button onClick={lessCounter} disabled={num === 0}>LESS</button>
    </div>
  )
}

export default App;
