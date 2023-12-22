import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as usersService from "../../utilities/users-service";
import { Box, TextField, Button, Grid, Typography } from "@mui/material";

export default function LoginForm({ setUser }) {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  const [error, setError] = useState("");

  function handleChange(evt) {
    setCredentials({ ...credentials, [evt.target.name]: evt.target.value });
    setError("");
  }

  async function handleSubmit(evt) {
    evt.preventDefault();
    try {
      const user = await usersService.login(credentials);
      setUser(user);
      navigate("/");
    } catch (err) {
      setError("Login Failed - Try Again");
    }
  }

  return (
    <Box width={"50vw"} alignItems={"center"}>
      <Grid container spacing={2} alignItems="center" justify="center">
        <Grid item xs={12}>
          <Typography variant="h6">Login</Typography>
        </Grid>
        <Grid item xs={12}>
          <form autoComplete="off" onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="email"
                  label="Email"
                  type="text"
                  name="email"
                  value={credentials.email}
                  onChange={handleChange}
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="password"
                  label="Password"
                  type="password"
                  name="password"
                  value={credentials.password}
                  onChange={handleChange}
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <Button variant="contained" color="primary" type="submit">
                  Login
                </Button>
              </Grid>
            </Grid>
          </form>
        </Grid>
      </Grid>
    </Box>
  );
}
