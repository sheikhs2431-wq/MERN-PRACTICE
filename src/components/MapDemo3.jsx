import React from "react";

var students = [
  {
    id: 1,
    name: "Anas",
    age: 25,
    marks: 45,
    city: "Ahmedabad",
    gender: "Male",
  },
  { id: 2, name: "Sana", age: 24, marks: 55, city: "Surat", gender: "Female" },
  {
    id: 3,
    name: "Nasha",
    age: 23,
    marks: 65,
    city: "Vadodara",
    gender: "Female",
  },
];

export const MapDemo3 = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>MAP DEMO 3</h1>
      <table border="2" align="center">
        <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>AGE</th>
            <th>MARKS</th>
            <th>CITY</th>
            <th>GENDER</th>
          </tr>
        </thead>
        <tbody>
          {students.map((st) => {
            return (
              <tr>
                <td>{st.id}</td>
                <td>{st.name}</td>
                <td>{st.age}</td>
                <td>{st.marks}</td>
                <td>{st.city}</td>
                <td>{st.gender}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
