import { useState, useEffect } from "react";
export default function AjaxWithXMLHttpRequest() {
  const [product, setProduct] = useState({
    title: "",
    price: 0,
    rating: { rate: 0, ratings: 0, reviews: 0 },
    offers: [],
    image: "",
  });

  //function to get data on load
  function LoadData() {
    //create object
    let http = new XMLHttpRequest();
    //make ajax call
    http.open("get", "product.json", true);
    //send request
    http.send();
    //event on which ajax request is processed
    http.onreadystatechange = function () {
      if (http.readyState == 4) {
        setProduct(JSON.parse(http.responseText));
      }
    };
  }
  useEffect(() => {
    LoadData();
  }, []);

  return (
    <div className="container-fluid text-start" style={{ textAlign: "left" }}>
      <div className="row mt-4">
        <div className="col-3">
          <img src={product.image} width="100%" />
        </div>
        <div className="col-9">
          <div className="h4">{product.title}</div>
          <div className="mt-4">
            <div className="badge bg-success rounded">
              {product.rating.rate}
              <span className="bi bi-star-fill"></span>
            </div>
            <div>
              <span className="fw-bold text-secondary">
                {product.rating.ratings.toLocaleString()} ratings &
                {product.rating.reviews.toLocaleString()} reviews
              </span>
            </div>
          </div>
          <div className="mt-4 h3">
            {product.price.toLocaleString("en-in", {
              style: "currency",
              currency: "INR",
            })}
          </div>
          <div>
            <ul className="list-unstyled">
              {product.offers.map((offer) => (
                <li className="bi bi-tag-fill text-success my-3" key={offer}>
                  <span className="text-secondary">{offer}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
