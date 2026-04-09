import React from "react";
import { useParams } from "react-router-dom";
// url --> :name --> fethc.. reuse
export const Watch = () => {
  const showname = useParams().name; //.name -->/watch/:name
  // const showname = useParams().id //.name -->/watch/:id

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Watching: {showname}</h1>
    </div>
  );
};
