import { useState, useEffect } from "react";
import * as VenuesApi from "../../utilities/venues-api";
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
              </TableRow>
            </TableHead>
            <TableBody>
              {venues.map((venue, idx) => (
                <TableRow key={idx}>
                  <TableCell>{venue.name}</TableCell>
                  <TableCell>{venue.street}</TableCell>
                  <TableCell>{venue.city}</TableCell>
                  <TableCell>
                    {venue.isSmoking === true ? "Yes" : "No"}
                  </TableCell>
                  <TableCell>{venue.imgUrl}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
}
