
import { useState } from "react";
export default function NestedDemo() {
  const [data] = useState([
    { Category: "Electronics", Products: ["Television", "Mobile"] },
    { Category: "Footwear", Products: ["Casuals", "Sneakers", "Boots"] },
  ]);

  return (
    <div className="container-fluid">
      <h2>Nested List</h2>

      <ol>
        {data.map((item) => (
          <li key={item}>
            {item.Category}
            <ul>
              {item.Products.map((product) => (
                <li key={product}>{product}</li>
              ))}
            </ul>
          </li>
        ))}
      </ol>

      <h2 className="mt-4">Nested DropDown</h2>
      <select>
        {data.map((item) => (
          <optgroup key={item} label={item.Category}>
            {item.Products.map((product) => (
              <option key={product}>{product}</option>
            ))}
          </optgroup>
        ))}
      </select>
    </div>
  );
}
