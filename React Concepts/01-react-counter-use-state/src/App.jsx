import { useState } from "react";
import "./App.css";
import StateTopic from "./components/StateTopic.jsx";
import FormTopic from "./components/FormTopic.jsx";

function App() {
  const [count, setCount] = useState(0);

  function HandleIncrement() {
    setCount(count + 1);
  }
  function HandleReset() {
    setCount(0);
  }
  function HandleDecrement() {
    setCount(count - 1);
  }

  return (
    <>
      <FormTopic />
      {/* <StateTopic /> */}
      {/*
      <div>{count}</div>
      
      <button className="incrementBtn" onClick={HandleIncrement}>
        Increment
      </button>
      <button className="resetToZero" onClick={HandleReset}>
        Reset To Zero
      </button>
      <button className="decrementBtn" onClick={HandleDecrement}>
        Decrement
      </button>
      */}
    </>
  );
}

export default App;
