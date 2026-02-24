"use client";

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import Avatar from "@mui/material/Avatar";

import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import PeopleIcon from "@mui/icons-material/People";
import WorkIcon from "@mui/icons-material/Work";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsIcon from "@mui/icons-material/Notifications";

export default function AppTopBar() {
  return (
    <AppBar position="sticky">
      <Toolbar>
        <Typography variant="h6" sx={{ mr: 2, flexShrink: 0 }}>
          LinkedIn
        </Typography>

        <Box sx={{ flexGrow: 1, maxWidth: 520, mr: 2 }}>
          <TextField
            size="small"
            fullWidth
            placeholder="Search"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
        </Box>

        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <IconButton color="inherit" aria-label="Home">
            <HomeIcon />
          </IconButton>
          <IconButton color="inherit" aria-label="My Network">
            <PeopleIcon />
          </IconButton>
          <IconButton color="inherit" aria-label="Jobs">
            <WorkIcon />
          </IconButton>
          <IconButton color="inherit" aria-label="Messaging">
            <ChatIcon />
          </IconButton>
          <IconButton color="inherit" aria-label="Notifications">
            <NotificationsIcon />
          </IconButton>
          <Avatar sx={{ width: 32, height: 32 }}>S</Avatar>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
