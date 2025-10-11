import { useState } from "react";
import axios from "axios";
export default function EventKeyDemo() {

  const [error, setError] = useState("");
  const [validClass, setValidClass] = useState("");

  function verifyUserId(e) {
    axios.get("users.json").then((response) => {
      var user = response.data.find((item) => item.UserId === e.target.value);

      if (user) {
        if (user.UserId === e.target.value) {
          setError("User Id taken - Try Another");
          setValidClass("text-danger");
        }
      } else{
        setError("User Id available");
        setValidClass('text-success');
      }
    });
  }
  return (
    <div className="container-fluid">
      <h2>Register User</h2>
      <dl className="w-25">
        <dt>User Id</dt>
        <dd>
          <input type="text" onKeyUp={verifyUserId} className="form-control" />
        </dd>
        <dd className={validClass}>{error}</dd>
      </dl>
    </div>
  );
}
