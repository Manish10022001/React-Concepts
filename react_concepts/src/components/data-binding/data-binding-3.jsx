import { useState, useEffect } from "react";

export default function DataBindingWithString() {
  const [productName, setProductName] = useState("");
  const [bgStyle, setBgStyle] = useState("");
  useEffect(() => {
    setProductName("Samsung");
    setBgStyle("bg-warning");
  });
  return (
    <div className="container-fluid">
      <h2 className={`text-center text-danger ${bgStyle}`}>Data Binding</h2>
      <dl>
        <dt>Name</dt>
        <dd>{productName}</dd>
      </dl>
    </div>
  );
}
