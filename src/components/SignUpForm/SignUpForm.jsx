import { useState } from "react";
import * as usersService from "../../utilities/users-service";
import { TextField, Button, Grid, Typography } from "@mui/material";

export default function SignUpForm({ setUser }) {
  const [signUpDetails, setSignUpDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");

  function handleChange(evt) {
    setSignUpDetails({ ...signUpDetails, [evt.target.name]: evt.target.value });
    setError("");
  }

  async function handleSubmit(evt) {
    evt.preventDefault();
    try {
      const newUser = await usersService.signUp(signUpDetails);
      setUser(newUser);
      console.log(newUser);
    } catch (err) {
      setError("Signup Failed - Try Again", error);
    }
  }

  const disable = signUpDetails.password !== signUpDetails.confirmPassword;

  return (
    <Grid container spacing={2} alignItems="center" justify="center">
      <Grid item xs={12}>
        <Typography variant="h6">Sign Up</Typography>
      </Grid>
      <Grid item xs={12}>
        <form autoComplete="off" onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                id="firstName"
                label="First Name"
                type="text"
                name="firstName"
                value={signUpDetails.firstName}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                id="lastName"
                label="Last Name"
                type="text"
                name="lastName"
                value={signUpDetails.lastName}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                id="email"
                label="Email"
                type="email"
                name="email"
                value={signUpDetails.email}
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
                value={signUpDetails.password}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                id="confirmPassword"
                label="Confirm Password"
                type="password"
                name="confirmPassword"
                value={signUpDetails.confirmPassword}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                variant="contained"
                color="primary"
                type="submit"
                disabled={disable}>
                Sign Up
              </Button>
            </Grid>
          </Grid>
        </form>
      </Grid>
    </Grid>
  );
}

// import { useState } from "react";
// import * as usersService from "../../utilities/users-service";

// export default function SignUpForm({ setUser }) {
//   const [signUpDetails, setSignUpDetails] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     password: "",
//     confirmPassword: "",
//   });
//   const [error, setError] = useState("");

//   function handleChange(evt) {
//     setSignUpDetails({ ...signUpDetails, [evt.target.name]: evt.target.value });
//     setError("");
//   }

//   async function handleSubmit(evt) {
//     evt.preventDefault();
//     try {
//       const newUser = await usersService.signUp(signUpDetails);
//       setUser(newUser);
//       console.log(newUser);
//     } catch (err) {
//       setError("Signup Failed - Try Again", error);
//     }
//   }

//   const disable = signUpDetails.password !== signUpDetails.confirmPassword;

//   return (
//     <>
//       <main>
//         <div className="form-container">
//           <form autoComplete="off" onSubmit={handleSubmit}>
//             <label htmlFor="firstName">First Name</label>
//             <input
//               id="firstName"
//               type="text"
//               name="firstName"
//               value={signUpDetails.firstName}
//               onChange={handleChange}
//               autoComplete="true"
//               required
//             />
//             <label htmlFor="lastName">Last Name</label>
//             <input
//               id="lastName"
//               type="text"
//               name="lastName"
//               value={signUpDetails.lastName}
//               onChange={handleChange}
//               autoComplete="true"
//               required
//             />
//             <label htmlFor="email">Email</label>
//             <input
//               id="email"
//               type="email"
//               name="email"
//               value={signUpDetails.email}
//               onChange={handleChange}
//               autoComplete="true"
//               required
//             />
//             <label htmlFor="password">Password</label>
//             <input
//               id="password"
//               type="password"
//               name="password"
//               value={signUpDetails.password}
//               onChange={handleChange}
//               required
//             />
//             <label htmlFor="confirmPassword">Confirm</label>
//             <input
//               id="confirmPassword"
//               type="password"
//               name="confirmPassword"
//               value={signUpDetails.confirmPassword}
//               onChange={handleChange}
//               required
//             />
//             <button type="submit" disabled={disable}>
//               SIGN UP
//             </button>
//           </form>
//         </div>
//       </main>
//     </>
//   );
// }
