import React, { useState } from "react";
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
    image: null, // Now linked to X1.jpg
  },
  {
    id: 2,
    name: "Camry",
    HP: 203,
    Price: 6000000,
    Model_Year: 2025,
    Manufacturer: "Toyota",
    image: camryImg,// Now linked to Camry.jpg
  },
  {
    id: 3,
    name: "Civic",
    HP: 158,
    Price: 3500000,
    Model_Year: 2006,
    Manufacturer: "Honda",
    image: null,
  },
  {
    id: 4,
    name: "A4",
    HP: 201,
    Price: 4500000,
    Model_Year: 2016,
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
    Model_Year: 2020,
    Manufacturer: "Ford",
    image: mustangImg,
  },
  {
    id: 7,
    name: "C-Class",
    HP: 255,
    Price: 4000000,
    Model_Year: 2023,
    Manufacturer: "Mercedes-Benz",
    image: cClassImg,
  },
];

export const MapDemo10 = () => {
  const [failedImages, setFailedImages] = useState({});

  return (
    <div style={{ textAlign: "center" }}>
      <h1>MAP DEMO 10 TASK - IF IMAGE IS MISSING, PRINT IMAGE IS MISSING...</h1>
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
            const isImageMissing = !car.image || failedImages[car.id];

            return (
              //   <tr key={car.id}>
              <tr
                style={{
                  backgroundColor:
                    car.HP > 300
                      ? "lightgreen"
                      : car.Model_Year == 2026
                        ? "lightblue"
                        : "transparent",
                }}
              >
                <td>{car.id}</td>
                <td>{car.name}</td>
                <td>{car.HP}</td>
                <td style={{ color: car.Price >= 5500000 ? "red" : "" }}>
                  {car.Price}
                </td>
                <td
                  style={{
                    backgroundColor:
                      car.Model_Year <= 2020 ? "yellow" : "violet",
                  }}
                >
                  {car.Model_Year}
                </td>
                <td>{car.Manufacturer}</td>
                <td>
                  {isImageMissing ? (
                    "Image is missing..."
                  ) : (
                    <img
                      src={car.image}
                      alt={car.name}
                      style={{ width: "100px", borderRadius: "5px" }}
                      onError={() =>
                        setFailedImages((prev) => ({ ...prev, [car.id]: true }))
                      }
                    />
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
