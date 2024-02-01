// Importing React and MUI components
import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";

// Functional component definition for the Header
const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      {/* MUI AppBar component */}
      <AppBar position="static">
        {/* MUI Toolbar component */}
        <Toolbar>
          {/* Typography component for the app title */}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Trello
          </Typography>

          <ul className="header">
            {/* List item with Link component for Home */}
            <li>
              <Link to="/">Home</Link>
            </li>
            {/* List item with Link component for About */}
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
