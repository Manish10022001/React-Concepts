import { useState } from "react";
export default function EventStateChange() {
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("");
  function handleChange(e) {
    setName(e.target.value.toUpperCase());
  }

  function handleBlur(e) {
    if (e.target.value.length === 0) {
      setNameError("Name Required");
    } else {
      setNameError("");
    }
  }

  function handleFocus() {
    setNameError("Name in Block letters");
  }
  return (
    <div className="container-fluid">
      <h3>Two way binding</h3>
      <dl>
        <dt>Product Name</dt>
        <dd>
          <input
            type="text"
            value={name}
            onChange={handleChange}
            onBlur={handleBlur}
            onFocus={handleFocus}
          />
        </dd>
        <dd className="text-danger">{nameError}</dd>
      </dl>
      <h3>Details</h3>
      <dl>
        <dt>Name</dt>
        <dd>{name}</dd>
      </dl>
    </div>
  );
}
