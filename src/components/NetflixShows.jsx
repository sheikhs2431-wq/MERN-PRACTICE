import React from "react";
import { Link } from "react-router-dom";

export const NetflixShows = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>NetflixShows</h1>
      <ul>
        <li>
          <Link to="/watch/breaking-bad">Breaking Bad</Link>
        </li>
        <li>
          <Link to="/watch/game-of-thrones">Game of Thrones</Link>
        </li>
        <li>
          <Link to="/watch/stranger-things">Stranger Things</Link>
        </li>
      </ul>
    </div>
  );
};
