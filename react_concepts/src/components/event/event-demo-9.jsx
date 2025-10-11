import { useState } from "react";

export default function TimerEventsSetInterval() {
  let [msg, setMsg] = useState("");
  function serverResponse() {
    setMsg((msg += "Reply from 120.0.0.1"));
  }
  function pingClick() {
    setInterval(serverResponse, 1000);
  }
  return (
    <div className="container-fluid">
      <button onClick={pingClick} className="btn btn-primary mt-2">
        Ping
      </button>
      <p className="fs-4 mt-2 text-center">{msg}</p>
    </div>
  );
}
