import React from "react";
import { useParams } from "react-router-dom";

export const TeamDetail = () => {
  const teamname = useParams().name; //.name -->/teamdetail/:name
  // const teamname = useParams ().id //.name -->/teamdetail/:id

  return (
    <div style={{ textAlign: "center" }}>
      <h1>PLAYING...{teamname}</h1>
    </div>
  );
};
