import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import { NavLink } from "react-router-dom";

import MarkAsUnreadIcon from "@mui/icons-material/MarkAsUnread";

export default function Header() {
  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <MarkAsUnreadIcon />
          </IconButton>

          <Typography
            component={NavLink}
            color="#fff"
            sx={{
              flexGrow: 1,
              fontFamily: "Poppins",
              textDecoration: "none",
            }}
            to="/">
            Posts App
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
