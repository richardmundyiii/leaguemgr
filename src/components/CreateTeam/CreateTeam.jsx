import React, { useEffect, useState } from "react";
import {
  Grid,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Typography,
} from "@mui/material";
import * as TeamApi from "../../utilities/teams-api";
import * as VenueApi from "../../utilities/venues-api";

const CreateTeam = ({ onTeamCreated }) => {
  const [team, setTeam] = useState({
    name: "",
    venue: "",
    division: "",
  });

  const [error, setError] = useState("");
  const [venues, setVenues] = useState([]);

  useEffect(() => {
    async function getAllVenues() {
      const venues = await VenueApi.getAllVenues();
      setVenues(venues);
    }
    getAllVenues();
  }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setTeam({ ...team, [name]: value });
  };

  async function handleSubmit(evt) {
    evt.preventDefault();
    try {
      const teamDetails = await TeamApi.create(team);
      setTeam({ name: "", venue: "" });
      onTeamCreated();
    } catch (err) {
      console.error("Error creating team:", err);
      setError("Failed to Create Team");
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <TextField
            label="Team Name"
            type="text"
            placeholder="Enter Team Name"
            name="name"
            value={team.name}
            onChange={handleInputChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <FormControl fullWidth>
            <InputLabel>Venue</InputLabel>
            <Select
              name="venue"
              value={team.venue}
              onChange={handleInputChange}
              label="Venue">
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {venues.map((venue, idx) => (
                <MenuItem key={idx} value={venue.name}>
                  {venue.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
      </Grid>
      <Button variant="contained" color="primary" type="submit" sx={{ mt: 2 }}>
        Create Team
      </Button>
      {error && <Typography color="error">{error}</Typography>}
    </form>
  );
};

export default CreateTeam;
