import { useState, useRef } from "react";
export default function TimerEventSetAndClearTimeOut() {
  const [msg, setMsg] = useState("");

  let thread2 = useRef(null);
  function Msg1() {
    setMsg("Hello !");
  }
  function Msg2() {
    setMsg("How are you? ");
  }
  function Msg3() {
    setMsg("Welcome to React");
  }
  function handleClick() {
    setTimeout(Msg1, 3000);
    thread2.current = setTimeout(Msg2, 6000);
    setTimeout(Msg3, 9000);
  }

  function handleCancelClick(){
    clearTimeout(thread2.current);
  }
  return (
    <div className="container-fluid">
      <button className="btn btn-primary mt-2" onClick={handleClick}>
        Dispaly Messages
      </button>
      {/* here to cancel we use useRef hook, it create mmemory reference which is intendedd for process not for presentation */}
      <button className="btn btn-danger mt-2" onClick={handleCancelClick}>
        Cancel Message 2
      </button>
      <p className="fs-4 text-center">{msg}</p>
    </div>
  );
}
