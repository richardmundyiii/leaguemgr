import { Route, Routes, Navigate } from "react-router-dom";
import { useState } from "react";
import { getUser } from "../../utilities/users-service";
import "./App.css";
import NavBar from "../../components/NavBar/NavBar";
import Homepage from "../Homepage/Homepage";
import AdminPortal from "../AdminPortal/AdminPortal";
import AuthPage from "../AuthPage/AuthPage";

function App() {
  const [user, setUser] = useState(getUser());

  return (
    <div className="App">
      <NavBar user={user} setUser={setUser} />
      <Routes>
        <Route path="/" element={<AdminPortal />} />
        <Route path="/auth" element={<AuthPage setUser={setUser} />} />
        <Route path="/adminportal" element={<AdminPortal user={user} />} />
      </Routes>
    </div>
  );
}

export default App;
