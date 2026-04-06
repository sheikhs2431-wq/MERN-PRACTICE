import React from "react";

var users = [
  { id: 1, name: "Anas", age: 25, gender: "Male" },
  { id: 2, name: "Sana", age: 24, gender: "Female" },
  { id: 3, name: "Nasha", age: 23, gender: "Female" },
];

export const MapDemo2 = () => {
  return (
    <div>
      <h1>MAP DEMO 2</h1>
      {users.map((user) => {
        return (
          <li>
            {user.id}- {user.name}- {user.age} - {user.gender}
          </li>
        );
      })}
    </div>
  );
};
