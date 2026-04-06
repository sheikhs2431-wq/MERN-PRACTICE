import React from "react";
// 1. Updated names to match your folder exactly
import bmwImg from "../assets/X1.jpg";
import camryImg from "../assets/Camry.jpg";
import civicImg from "../assets/Civic.jpg";
import a4Img from "../assets/A4.jpg";
import y3Img from "../assets/Model3.jpg";
import mustangImg from "../assets/Mustang.jpg";
import cClassImg from "../assets/C-Class.jpg"; // Updated variable name to match the image

var carbrand = [
  {
    id: 1,
    name: "X1",
    HP: 1100,
    Price: 40000000,
    Model_Year: 2026,
    Manufacturer: "BMW",
    image: bmwImg, // Now linked to X1.jpg
  },
  {
    id: 2,
    name: "Camry",
    HP: 203,
    Price: 6000000,
    Model_Year: 2026,
    Manufacturer: "Toyota",
    image: camryImg, // Now linked to Camry.jpg
  },
  {
    id: 3,
    name: "Civic",
    HP: 158,
    Price: 3500000,
    Model_Year: 2026,
    Manufacturer: "Honda",
    image: civicImg,
  },
  {
    id: 4,
    name: "A4",
    HP: 201,
    Price: 4500000,
    Model_Year: 2026,
    Manufacturer: "Audi",
    image: a4Img,
  },
  {
    id: 5,
    name: "Model 3",
    HP: 283,
    Price: 5000000,
    Model_Year: 2026,
    Manufacturer: "Tesla",
    image: y3Img,
  },
  {
    id: 6,
    name: "Mustang",
    HP: 450,
    Price: 5500000,
    Model_Year: 2026,
    Manufacturer: "Ford",
    image: mustangImg,
  },
  {
    id: 7,
    name: "C-Class",
    HP: 255,
    Price: 4000000,
    Model_Year: 2026,
    Manufacturer: "Mercedes-Benz",
    image: cClassImg,
  },
];

export const MapDemo8 = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>MAP DEMO 8 TASK - MIN 1 TABLE 6 COLUMNS AND 5 TO 6 ROWS</h1>
      <table className="table table-dark" align="center">
        <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>HP</th>
            <th>PRICE</th>
            <th>MODEL_YEAR</th>
            <th>MANUFACTURE</th>
            <th>IMAGE</th>
          </tr>
        </thead>
        <tbody>
          {carbrand.map((car) => {
            return (
              <tr key={car.id}>
                <td>{car.id}</td>
                <td>{car.name}</td>
                <td>{car.HP}</td>
                <td>{car.Price}</td>
                <td>{car.Model_Year}</td>
                <td>{car.Manufacturer}</td>
                <td>
                  {/* Logic to show image or a placeholder */}
                  {car.image ? (
                    <img
                      src={car.image}
                      alt={car.name}
                      style={{ width: "100px", borderRadius: "5px" }}
                    />
                  ) : (
                    "No Image"
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
