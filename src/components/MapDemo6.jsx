import React from "react";
var carbrand = [
  {
    id: 1,
    name: "X1",
    HP: 1100,
    Price: 40000000,
    Model_Year: 2026,
    Manufacturer: "BMW",
  },
  {
    id: 2,
    name: "Camry",
    HP: 203,
    Price: 6000000,
    Model_Year: 2026,
    Manufacturer: "Toyota",
  },
  {
    id: 3,
    name: "Civic",
    HP: 158,
    Price: 3500000,
    Model_Year: 2026,
    Manufacturer: "Honda",
  },
  {
    id: 4,
    name: "A4",
    HP: 201,
    Price: 4500000,
    Model_Year: 2026,
    Manufacturer: "Audi",
  },
  {
    id: 5,
    name: "Model 3",
    HP: 283,
    Price: 5000000,
    Model_Year: 2026,
    Manufacturer: "Tesla",
  },
  {
    id: 6,
    name: "Mustang",
    HP: 450,
    Price: 5500000,
    Model_Year: 2026,
    Manufacturer: "Ford",
  },
  {
    id: 7,
    name: "C-Class",
    HP: 255,
    Price: 4000000,
    Model_Year: 2026,
    Manufacturer: "Mercedes-Benz",
  },
];
export const MapDemo6 = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>MAP DEMO 6 TASK - ONLY SIMPLE TABLE</h1>
      <table className="table table-dark" align="center">
        <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>HP</th>
            <th>PRICE</th>
            <th>MODEL_YEAR</th>
            <th>MANUFACTURES</th>
          </tr>
        </thead>
        <tbody>
          {carbrand.map((car) => {
            return (
              <tr>
                <td>{car.id}</td>
                <td>{car.name}</td>
                <td>{car.HP}</td>
                <td>{car.Price}</td>
                <td>{car.Model_Year}</td>
                <td>{car.Manufacturer}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
