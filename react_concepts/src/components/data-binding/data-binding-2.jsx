import { useState, useEffect } from "react";
export default function DataBindingTwo() {
  const [price, setPrice] = useState(2334343.33);

  useEffect(() => {v
    setPrice(111111.11);
  }, []);
  return (
    <div>
      <h2>Data Binding</h2>
      <p>{price}</p>
    </div>
  );
}
