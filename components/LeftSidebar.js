"use client";

import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Box from "@mui/material/Box";

export default function LeftSidebar() {
  return (
    <Box sx={{ display: { xs: "none", md: "block" } }}>
      <Card>
        <CardContent>
          <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 1 }}>
            <Avatar sx={{ width: 48, height: 48 }}>S</Avatar>
            <Box>
              <Typography variant="subtitle1">Sanjeev Kumar</Typography>
              <Typography variant="body2" color="text.secondary">
                Frontend Developer • Next.js
              </Typography>
            </Box>
          </Box>

          <Divider sx={{ my: 2 }} />

          <Typography variant="subtitle2" sx={{ mb: 1 }}>
            Quick links
          </Typography>

          <List dense disablePadding>
            <ListItem disableGutters>
              <ListItemText primary="Profile views" secondary="128" />
            </ListItem>
            <ListItem disableGutters>
              <ListItemText primary="Post impressions" secondary="2,041" />
            </ListItem>
            <ListItem disableGutters>
              <ListItemText primary="Connections" secondary="356" />
            </ListItem>
          </List>
        </CardContent>
      </Card>

      <Card sx={{ mt: 2 }}>
        <CardContent>
          <Typography variant="subtitle2" sx={{ mb: 1 }}>
            Recent
          </Typography>
          <List dense disablePadding>
            <ListItem disableGutters>
              <ListItemText primary="# react" />
            </ListItem>
            <ListItem disableGutters>
              <ListItemText primary="# nextjs" />
            </ListItem>
            <ListItem disableGutters>
              <ListItemText primary="# webdev" />
            </ListItem>
          </List>
        </CardContent>
      </Card>
    </Box>
  );
}
