import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import * as VenuesApi from "../../utilities/venues-api";
// import * as TeamApi from "../../utilities/teams-api";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

export default function ShowAllVenues() {
  const [venues, setVenues] = useState([]);

  useEffect(() => {
    async function getAllVenues() {
      const venues = await VenuesApi.getAllVenues();

      // const venuesWithTeams = await Promise.all(
      //   venues.map(async (venueId) => {
      //     const teams = VenuesApi.getTeamsByVenueId(venueId);
      //     console.log(teams);
      //     return { ...venues, teams };
      //   })
      // );
      setVenues(venues);
    }
    getAllVenues();
  }, []);

  return (
    <>
      <h1>Show All Venues</h1>
      <div>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Street</TableCell>
                <TableCell>City</TableCell>
                <TableCell>Smoking</TableCell>
                <TableCell>Img</TableCell>
                <TableCell>Teams</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {venues.map((venue, idx) => (
                <TableRow key={idx}>
                  <TableCell>
                    <Link to={`/teams/${venue._id}`}>{venue.name}</Link>
                    {console.log(venue._id)}
                  </TableCell>
                  <TableCell>{venue.street}</TableCell>
                  <TableCell>{venue.city}</TableCell>
                  <TableCell>
                    {venue.isSmoking === true ? "Yes" : "No"}
                  </TableCell>
                  <TableCell>{venue.imgUrl}</TableCell>
                  <TableCell>
                    {venue.teams?.map((team, index) => (
                      <div key={index}>{team.name}</div>
                    )) || "No Teams"}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
}
