import React from "react";
import { Link } from "react-router-dom";

export const Team = () => {
  var teams = [
    { teamid: 1, teamname: "CSK" },
    { teamid: 2, teamname: "MI" },
    { teamid: 3, teamname: "RCB" },
    { teamid: 4, teamname: "KKR" },
    { teamid: 5, teamname: "SRH" },
    { teamid: 6, teamname: "PBKS" },
    { teamid: 7, teamname: "RR" },
    { teamid: 8, teamname: "DC" },
    { teamid: 9, teamname: "LSG" },
    { teamid: 10, teamname: "GT" },
  ];
  return (
    <div style={{ textAlign: "center" }}>
      <h1>ALL TEAMS</h1>
      {/* <ul>
            <li>
                <Link to = "/teamdetail/CSK">CSK</Link>
            </li>
            <li>
                <Link to = "/teamdetail/MI">MI</Link>
            </li>
            <li>
                <Link to = "/teamdetail/RCB">RCB</Link>
            </li>
            <li>
                <Link to = "/teamdetail/KKR">KKR</Link>
            </li>
            <li>
                <Link to = "/teamdetail/SRH">SRH</Link>
            </li>
            <li>
                <Link to = "/teamdetail/PBKS">PBKS</Link>
            </li>
            <li>
                <Link to = "/teamdetail/RR">RR</Link>
            </li>
            <li>
                <Link to = "/teamdetail/DC">DC</Link>
            </li>
            <li>
                <Link to = "/teamdetail/LSG">LSG</Link>
            </li>
            <li>
                <Link to = "/teamdetail/GT">GT</Link>
            </li>
        </ul> */}

      {/* Now we are going to use a loop to display all teams */}
      {teams.map((team) => {
        // return <li>{team.teamname}</li>;
        return (
          <li>
            {/* <Link to ="/teamdetail/{team.teamname}">{team.teamname}</Link> */}
            <Link to={`/teamdetail/${team.teamname}`}>{team.teamname}</Link>
          </li>
        );
      })}
    </div>
  );
};
