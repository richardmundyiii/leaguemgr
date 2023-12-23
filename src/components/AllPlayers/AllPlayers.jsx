import { useState, useEffect } from "react";
import * as usersApi from "../../utilities/users-api";

export default function AllPlayers() {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    async function getAllPlayers() {
      const players = await usersApi.getAllUsers();
      setPlayers(players);
    }
    getAllPlayers();
  }, []);

  return (
    <>
      <h1>All Players</h1>
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {players.map((player, idx) => (
            <tr key={idx}>
              <td>{player.firstName}</td>
              <td>{player.lastName}</td>
              <td>{player.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
