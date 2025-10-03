import { useState, useEffect } from "react";
export default function DataBindingWithUndefinedType() {
  const [age, setAge] = useState();

  useEffect(() => {
    setAge(34);
  }, []);
  return (
    <div className="container-fluid">
      <p>
        {/* to check if age is undefined */}
        {age ? age : "please enter your age: "}
      </p>
    </div>
  );
}
