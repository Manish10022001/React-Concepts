import { useState } from "react";
export default function MouseEventsOne() {
  const [stylebg, setStyleBg] = useState({ color: "black" });
  function handleMouseOver(e) {
    setStyleBg({ color: e.target.id });
  }
  function handleMouseOut() {
    setStyleBg({ color: "black" });
  }
  return (
    <div className="container-fluid">
      <h3>Mouse Event</h3>
      <div className="d-flex text-white text-center">
        <div
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
          id="red"
          style={{ width: "100px", backgroundColor: "red" }}
        >
          Red
        </div>
        <div
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
          id="green"
          style={{ width: "100px", backgroundColor: "green" }}
        >
          Green
        </div>
        <div
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
          id="blue"
          style={{ width: "100px", backgroundColor: "blue" }}
        >
          Blue
        </div>
      </div>

      <h2 style={stylebg}>Sample Test</h2>
    </div>
  );
}
