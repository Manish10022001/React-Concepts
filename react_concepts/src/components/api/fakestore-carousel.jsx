import axios from "axios";
import { useState, useEffect, useRef } from "react";
export default function FakestoreCarousel() {
  const [product, setProduct] = useState({
    id: 0,
    title: "",
    price: 0,
    category: "",
    description: "",
    image: "",
    rating: { rate: 0, count: 0 },
  });

  const [status, setStatus] = useState("Manual");
  let count = useRef(1);
  let thread = useRef(null); //for loading product automatically and used in interval
  function loadProduct(id) {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((response) => setProduct(response.data));
  }
  //auto-1: to load product automatically
  function LoadProductAuto() {
    axios
      .get(`https://fakestoreapi.com/products/${count.current}`)
      .then((response) => {
        setProduct(response.data);
      });
  }

  useEffect(() => {
    loadProduct(1);
  }, []);
  //use memory referece for this used in process
  function handleNextClick() {
    count.current = count.current + 1;
    loadProduct(count.current);
  }

  function handlePreviousClick() {
    count.curreent = count.current - 1;
    loadProduct(count.current);
  }

  //auto -2 ; product to load when clicked on play button
  function handlePlayClick() {
    thread.current = setInterval(LoadProductAuto, 1000);
    setStatus("Slide Show running");
  }

  function handlePauseClick() {
    clearInterval(thread.current);
    setStatus("Slide Show paused");
  }

  function handleSliderChange(e) {
    count.current = e.target.value;
    loadProduct(count.current);
  }
  return (
    <div className="container-fluid">
      <div className="d-flex justify-content-center">
        <div className="card p-2 mt-2 w-75">
          <div className="card-header text-center">
            {product.title}
            <div className="fw-bold">{status}</div>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col-1 d-flex flex-column justify-content-center align-items-center">
                <button
                  className="bi bi-chevron-left btn btn-dark"
                  onClick={handlePreviousClick}
                ></button>
              </div>
              <div className="col-10 position-relative">
                <div className="position-absolute p-3 badge bg-danger rounded rounded-circle end-0 top-0">
                  {product.price.toLocaleString("en-us", {
                    style: "currency",
                    currency: "USD",
                  })}{" "}
                </div>
                <img src={product.image} width="100%" height="400" />
                <div className="my-2">
                  <input
                    min="1"
                    max="20"
                    type="range"
                    value={count.current}
                    onChange={handleSliderChange}
                    className="form-range"
                  />
                </div>
              </div>
              <div className="col-1 d-flex flex-column justify-content-center align-items-center">
                <button
                  className="btn btn-dark bi bi-chevron-right"
                  onClick={handleNextClick}
                ></button>
              </div>
            </div>
          </div>
          <div className="card-footer text-center">
            <button
              onClick={handlePlayClick}
              className="bi bi-play mx-2 btn btn-primary"
            ></button>
            <button
              onClick={handlePauseClick}
              className="bi bi-pause mx-2 btn btn-danger"
            ></button>
          </div>
        </div>
      </div>
    </div>
  );
}
