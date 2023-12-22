import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import * as userService from "../../utilities/users-service";

export default function NavBar({ user, setUser }) {
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  const navLinks = [
    { title: "Home", path: "/" },
    { title: "Schedule", path: "/schedule" },
    // ... other links
    { title: "Contact", path: "/contact" },
  ];

  const drawer = (
    <List>
      {navLinks.map(({ title, path }) => (
        <ListItem button key={title} component={Link} to={path}>
          <ListItemText primary={title} />
        </ListItem>
      ))}
    </List>
  );

  return (
    <>
      <AppBar position="fixed" color="primary" sx={{ width: "100%" }}>
        <Toolbar>
          {isMobile && (
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={() => setDrawerOpen(true)}>
              <MenuIcon />
            </IconButton>
          )}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Logo
          </Typography>
          {!isMobile && (
            <Box sx={{ display: "flex" }}>
              {navLinks.map(({ title, path }) => (
                <Button key={title} color="inherit" component={Link} to={path}>
                  {title}
                </Button>
              ))}
            </Box>
          )}
          {user ? (
            <Button color="inherit" onClick={handleLogOut}>
              Logout
            </Button>
          ) : (
            <Button color="inherit" component={Link} to="/auth">
              Login
            </Button>
          )}
        </Toolbar>
      </AppBar>
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}>
        {drawer}
      </Drawer>
      <Box sx={{ paddingTop: "64px" }}>
        {" "}
        {/* Additional padding for the main content */}
        {/* Main content goes here */}
      </Box>
    </>
  );
}
