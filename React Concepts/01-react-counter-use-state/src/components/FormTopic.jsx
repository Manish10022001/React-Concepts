import { react, useState, useEffect } from "react";
//initial user data
const initialUserData = {
  username: "",
  password: "",
  email: "",
  gender: "",
  termsAccepted: false,
};
export default function FormTopic() {
  //create a user form and on submit print user data

  const [user, setUser] = useState(initialUserData);

  function handleInputChange(e) {
    {
      /* one way
    const attributeName = e.target.name; //to get the name
    const inputValue = e.target.value;
    const object = { [attributeName]: inputValue };
    const newUserData = { ...user, ...object };
    setUser(newUserData);
    */
    }
    //using prevState, it uses callbackfunction

    // setUser(function (prevState) {
    //   return { ...prevState, [e.target.name]: e.target.value };
    // });

    const { name, value, type } = e.target; //type for checkbox

    //ternary condtion to get termsaccepted true or false
    // const inputValue = (name == "termsAccepted" ? e.target.checked: value);

    setUser(function (prevState) {
      return {
        ...prevState,
        [name]: type == "checkbox" ? e.target.checked : value,
      };
    });
  }
  function printUserData() {
    console.log(user);
  }
  function resetUserData() {
    setUser(initialUserData);
  }
  return (
    <div>
      <h3>Form Topic</h3>
      <form action="">
        <div>
          <label>Username</label>
          <input
            type="text"
            name="username"
            value={user.username} //Access the 'username' field of the 'user' state object
            placeholder="username"
            onChange={handleInputChange}
          />
        </div>
        <br />
        <div>
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={user.password}
            placeholder="password"
            onChange={handleInputChange}
          />
        </div>
        <br />
        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={user.email}
            placeholder="email"
            onChange={handleInputChange}
          />
        </div>
        <br />
        <div>
          <input
            type="radio"
            name="gender"
            value="Male"
            onChange={handleInputChange}
            checked={user.gender == "Male"}
          />
          <label>Male</label>
          <input
            type="radio"
            name="gender"
            value="Female"
            onChange={handleInputChange}
            checked={user.gender == "Female"}
          />
          <label>Female</label>
        </div>
        <br />

        <div>
          <input
            type="checkbox"
            name="termsAccepted"
            onChange={handleInputChange}
          />
          <label>I accept the terms</label>
        </div>
        <div>
          <button onClick={printUserData}>Submit</button>
          <button onClick={resetUserData}>Reset</button>
        </div>
      </form>
    </div>
  );
}
