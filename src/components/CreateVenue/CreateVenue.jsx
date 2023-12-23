import { useState } from "react";
import {
  Grid,
  TextField,
  Button,
  Switch,
  FormControlLabel,
  Typography,
} from "@mui/material";

export default function CreateVenue() {
  const [venue, setVenue] = useState({
    name: "",
    street: "",
    city: "",
    isSmoking: false,
    imgUrl: "",
  });

  const [error, setError] = useState("");

  function handleInputChange(evt) {
    const { name, value, type, checked } = evt.target;
    const inputValue = type === "checkbox" ? checked : value;
    setVenue({ ...venue, [name]: inputValue });
  }

  function handleSubmit(evt) {
    evt.preventDefault();
  }

  return (
    <>
      <h1>Create Venue</h1>
      <div>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item md={6}>
              <TextField
                label="Venue Name"
                type="text"
                placeholder="Enter Venue Name"
                name="name"
                value={venue.name}
                onChange={handleInputChange}
                fullWidth
              />
            </Grid>
            <Grid item md={6}>
              <TextField
                label="Street"
                type="text"
                placeholder="Enter Venue Street"
                name="street"
                value={venue.street}
                onChange={handleInputChange}
                fullWidth
              />
            </Grid>
            <Grid item md={6}>
              <TextField
                label="City"
                type="text"
                placeholder="Enter Venue City"
                name="city"
                value={venue.city}
                onChange={handleInputChange}
                fullWidth
              />
            </Grid>
            <Grid item md={6}>
              <TextField
                label="Image URL"
                type="text"
                placeholder="Enter Image URL"
                name="imageUrl"
                value={venue.imageUrl}
                onChange={handleInputChange}
                fullWidth
              />
            </Grid>
            <Grid item>
              <FormControlLabel
                control={
                  <Switch
                    checked={venue.isSmoking}
                    onChange={handleInputChange}
                    name="isSmoking"
                  />
                }
                label="Smoking Allowed"
              />
            </Grid>
          </Grid>
          <Button variant="contained" color="primary" type="submit">
            Create Venue
          </Button>
          {error && <Typography color="error">{error}</Typography>}
        </form>
      </div>
    </>
  );
}
