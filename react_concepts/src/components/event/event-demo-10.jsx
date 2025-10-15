import { useState } from "react";
export default function ClipboardEvents() {
  const [msg, setMsg] = useState("");

  function handleCopy() {
    setMsg("Number Copied");
  }
  function handleBlur() {
    setMsg("");
  }

  //now paste is disable
  function handlePaste() {
    document.onpaste = function () {
      return false;
    };
  }

  return (
    <div className="container">
      <h2>Register User</h2>
      <dl>
        <dt>Account Number</dt>
        <dd>
          <input type="text" onCopy={handleCopy} onBlur={handleBlur} />
        </dd>
        <dd>{msg}</dd>

        <dt>Verify Account Number</dt>
        <dd>
          <input type="text" onPaste={handlePaste} />
        </dd>
      </dl>
    </div>
  );
}
