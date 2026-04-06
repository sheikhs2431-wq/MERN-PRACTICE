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
export const MapDemo5 = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>MAP DEMO 5</h1>
      <table className="table table-dark">
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
              <tr style={{backgroundColor: st.gender == "Female" && "pink"}}>
                <td>{st.id}</td>
                <td>{st.name}</td>
                {/* <td style={{backgroundColor: st.age>23 ? "yellow" : "magenta"}}>{st.age}</td> */}
                <td style={{backgroundColor: st.age>24 && "yellow"}}>{st.age}</td>
                <td style={{color: st.marks>50 ? "green" : "red"}}>{st.marks}</td>
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
