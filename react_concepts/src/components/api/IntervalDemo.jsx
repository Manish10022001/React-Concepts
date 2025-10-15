import { useState, useRef } from "react";
export default function IntervalDemo() {
  const [toggleButton, setToggleButton] = useState("d-block");
  const [toggleProgress, setToggleProgress] = useState("d-none");
  const [toggleImage, setToggleImage] = useState("d-none");
  const [progressValue, setProgressValue] = useState(1);

  let thread = useRef(null);
  let count = useRef(1);

  function startProgress() {
    count.current = count.current + 1;
    setProgressValue(count.current);
    if (count.current == 100) {
      setToggleProgress("d-none");
      setToggleImage("d-block");
    }
  }
  function handleLoadClick() {
    setToggleButton("d-none");
    setToggleProgress("d-block");
    thread.current = setInterval(startProgress, 100);
  }

  function handlePlayClick() {
    thread.current = setInterval(startProgress, 100);
  }
  function handlePauseClick() {
    clearInterval(thread.current);
  }
  return (
    <div className="container-fluid">
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >
        <div className="text-center">
          <div className={toggleButton}>
            <button className="btn btn-primary" onClick={handleLoadClick}>
              Load Image
            </button>
          </div>
          <div className={toggleProgress}>
            <progress
              value={progressValue}
              min="1"
              max="100"
              style={{ width: "300px", height: "20px" }}
            ></progress>
            <div>{progressValue}% completed</div>

            <div className="mt-2">
              <button
                className="btn btn-success bi bi-play"
                onClick={handlePlayClick}
              >
                Play
              </button>

              <button
                className="btn btn-warning bi bi-pause ms-1"
                onClick={handlePauseClick}
              >
                Pause
              </button>
            </div>
          </div>

          <div className={toggleImage}>
            <img src="./1.jpeg" width="300" height="300" />
          </div>
        </div>
      </div>
    </div>
  );
}
