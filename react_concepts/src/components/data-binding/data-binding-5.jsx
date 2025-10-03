import { useState } from "react";
import "./data-binding-5.css";
export default function DataBindingWithArrays() {
  const [categories] = useState([
    "All",
    "Electronice",
    "Fashion",
    "Footwear",
    "Kids Fashion",
  ]);

  return (
    <div className="container-fluid">
      <h2>Categories</h2>
      <nav className="d-flex justify-content-between bg-light border border-1 p-2 m-2">
        {categories.map((category) => (
          <a className="btn btn-warning" key={category} href={`/${category}`}>
            {category}
          </a>
        ))}
      </nav>

      <ol className="list-unstyled checklistt">
        {categories.map((category, index) => (
          <li key={index} className="d-flex m-2">
            <input type="checkbox" />
            <label>{category}</label>
          </li>
        ))}
      </ol>
      <select>
        {categories.map((category)=><option key={category} value={category} className="d-flex">{category}</option>)}
      </select>
    </div>
  );
}
