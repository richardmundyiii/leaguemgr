import { useState, useEffect } from "react";
import * as TeamsApi from "../../utilities/teams-api";
import { Table } from "@mui/material";

export default function ShowAllTeams() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    async function getAllTeams() {
      const teams = await TeamsApi.getAllTeams();
      setTeams(teams);
    }
    getAllTeams();
  }, []);

  return (
    <>
      <h1>Show All Teams</h1>
      <Table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Venue</th>
          </tr>
        </thead>
        <tbody>
          {teams.map((team, idx) => (
            <tr key={idx}>
              <td>{team.name}</td>
              <td>{team.venue}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}
