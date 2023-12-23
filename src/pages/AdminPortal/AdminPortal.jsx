import { useState } from "react";
import { Drawer, List, ListItem, ListItemText } from "@mui/material";
import AllPlayers from "../../components/AllPlayers/AllPlayers";
import SeasonIcon from "@mui/icons-material/FilterVintage";
import PlayerIcon from "@mui/icons-material/Person";
import TeamIcon from "@mui/icons-material/Group";
import CreateVenue from "../../components/CreateVenue/CreateVenue";
import ShowAllVenues from "../../components/ShowAllVenues/ShowAllVenues";
import SportsBarIcon from "@mui/icons-material/SportsBar";
import DensitySmallIcon from "@mui/icons-material/DensitySmall";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import GroupIcon from "@mui/icons-material/Group";
import GroupsIcon from "@mui/icons-material/Groups";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import CreateTeam from "../../components/CreateTeam/CreateTeam";

const drawerWidth = "50vw";

export default function AdminPortal({ user }) {
  const [activeComponent, setActiveComponent] = useState("default");

  function handleSelect(selectedKey) {
    setActiveComponent(selectedKey);
  }

  function renderComponent() {
    switch (activeComponent) {
      case "create-team":
        return <CreateTeam />;
      case "create-venue":
        return <CreateVenue />;
      case "all-venues":
        return <ShowAllVenues />;
      case "all-players":
        return <AllPlayers />;

      default:
        <>{<AdminPortal />}</>;
    }
  }

  return (
    <>
      <div style={{ display: "flex" }}>
        <Drawer
          variant="permanent"
          anchor="left"
          style={{ width: drawerWidth }}
          open>
          <List>
            <ListItem button onClick={() => handleSelect("create-venue")}>
              <SportsBarIcon />
              <ListItemText primary="Create Venue" />
            </ListItem>
            <ListItem button onClick={() => handleSelect("all-venues")}>
              <DensitySmallIcon />
              <ListItemText primary="All Venues" />
            </ListItem>
            <ListItem button onClick={() => handleSelect("create-team")}>
              <GroupAddIcon />
              <ListItemText primary="Create Team" />
            </ListItem>
            <ListItem button onClick={() => handleSelect("all-teams")}>
              <TeamIcon />
              <ListItemText primary="All Teams" />
            </ListItem>
            <ListItem button onClick={() => handleSelect("create-player")}>
              <PlayerIcon />
              <ListItemText primary="Create Player" />
            </ListItem>
            <ListItem button onClick={() => handleSelect("all-players")}>
              <GroupsIcon />
              <ListItemText primary="All Players" />
            </ListItem>
            <ListItem button onClick={() => handleSelect("new-season")}>
              <SeasonIcon />
              <ListItemText primary="New Season" />
            </ListItem>
          </List>
        </Drawer>
        <main style={{ flexGrow: 1, padding: 3 }}>{renderComponent()}</main>
      </div>
    </>
  );
}
