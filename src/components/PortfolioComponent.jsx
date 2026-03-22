import React from "react";
import msdhoni from "../assets/msdhoni.jpg";

export default function PortfolioComponent() {
  var details = {
    DateOfBirth: "7 July 1981",
    PlaceOfBirth: "Ranchi, Bihar (now Jharkhand), India",
    BattingStyle: "Right-handed",
    BowlingStyle: "Right-arm medium",
    Role: "Wicket-keeper batsman",
  };
  return (
    <div style={{ textAlign: "center", border: "2px solid black" }}>
      <h1>Mahendra Singh Dhoni</h1>
      <img
        src={msdhoni}
        alt="Mahendra Singh Dhoni"
        width="300"
        height="300"
        border="2px solid black"
        style={{ display: "block", margin: "0 auto" }}
      />
      <h2>Role: Indian Cricketer</h2>
      <h2>
        Description: Mahendra Singh Dhoni was a former Indian cricketer and
        captain, known for his calm demeanor and leadership skills.
      </h2>
      <h2>
        Achievements:
        <li>Won the ICC Cricket World Cup 2013</li>
        <li>Known for his quick reflexes and leadership skills</li>
        <li>First Indian cricketer to win the ICC Player of the Year award</li>
      </h2>
      <div
        style={{
          color: "blue",
          border: "5px solid black",
          width: "50%",
          margin: "0 auto",
        }}
      >
        <h2>Date of Birth: {details.DateOfBirth}</h2>
        <h2>Place of Birth: {details.PlaceOfBirth}</h2>
        <h2>Batting Style: {details.BattingStyle}</h2>
        <h2>Bowling Style: {details.BowlingStyle}</h2>
        <h2>Role: {details.Role}</h2>
      </div>
    </div>
  );
}
