import { useState } from "react";
import SignUpForm from "../../components/SignUpForm/SignUpForm";
import LoginForm from "../../components/LoginForm/LoginForm";
import { Button } from "@mui/material";

export default function AuthPage({ setUser }) {
  const [showSignUp, setShowSignUp] = useState(false);

  return (
    <main>
      <h1>AuthPage</h1>
      <Button onClick={() => setShowSignUp(!showSignUp)}>
        {showSignUp ? "Login" : "Signup"}
      </Button>
      {showSignUp ? (
        <SignUpForm setUser={setUser} />
      ) : (
        <LoginForm setUser={setUser} />
      )}
    </main>
  );
}
