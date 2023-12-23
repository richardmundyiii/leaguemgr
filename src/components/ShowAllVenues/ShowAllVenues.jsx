import { useState, useEffect } from "react";
import * as VenuesApi from "../../utilities/venues-api";

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
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Street</th>
              <th>City</th>
              <th>Smoking</th>
              <th>Img</th>
            </tr>
          </thead>
          <tbody>
            {venues.map((venue, idx) => (
              <tr key={idx}>
                <td>{venue.name}</td>
                <td>{venue.street}</td>
                <td>{venue.city}</td>
                <td>{venue.isSmoking === true ? "Yes" : "No"}</td>
                <td>{venue.imgUrl}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
