import { useState } from "react";

export const UserProfile = () => {
  const [user, setUser] = useState({
    name: "Bruce Wayne",
    age: 38,
    email: "batman@justiceleague.com",
    address: {
      city: "Gotham City",
      country: "USA",
    },
  });
  const updateName = () => {
    setUser({
      ...user,
      name: "Clarke Kent",
    });
  };
  const updateAge = () => {
    setUser({
      ...user,
      age: user.age + 1,
    });
  };
  const updateCity = () => {
    setUser({
      ...user,
      address: {
        ...user.address,
        city: "Metropolis",
      },
    });
  };
  return (
    <div>
      <h1>{user.name}</h1>
      <p>Age: {user.age}</p>
      <p>Email: {user.email}</p>
      <p>City: {user.address.city}</p>
      <p>Country: {user.address.country}</p>
      <button onClick={updateName}>Change name to Clarke Kent</button>
      <button onClick={updateAge}>Increase age by 1</button>
      <button onClick={updateCity}>Move to Metropolis</button>
    </div>
  );
};
