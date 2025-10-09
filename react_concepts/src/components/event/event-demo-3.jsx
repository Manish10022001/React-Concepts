import axios from "axios";
import { useState, useEffect } from "react";
import "./event-demo-3.css"
export default function MouseEventTwo() {
  const [eyewears, setEyewears] = useState([]);
  const [preview, setPreview] = useState("1.jpeg");

  useEffect(() => {
    axios.get("eyewears.json").then((response) => {
      setEyewears(response.data);
    });
  }, []);

  function handleMouseOver(e) {
    setPreview(e.target.src);
  }

  return (
    <div className="container-fluid">
      <div className="mt-4 row">
        <nav className="col-2">
          {eyewears.map((eyewear) => (
            <div
              className="my-4 thumbnail"
              style={{ width: "75px" }}
              key={eyewear.img_src}
            >
              <img
                onMouseOver={handleMouseOver}
                width={70}
                height={70}
                src={eyewear.img_src}
              />
            </div>
          ))}
        </nav>

        <main className="col-10">
          <img
            src={preview}
            width="50%"
            border="1"
            height="400"
            alt="selected-eyewear"
          />
        </main>
      </div>
    </div>
  );
}
