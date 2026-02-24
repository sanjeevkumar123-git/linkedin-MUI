"use client";

import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";

export default function RightSidebar() {
  return (
    <Box sx={{ display: { xs: "none", lg: "block" } }}>
      <Card>
        <CardContent>
          <Typography variant="subtitle1">LinkedIn News</Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
            Top stories
          </Typography>

          <List dense disablePadding>
            <ListItem disableGutters>
              <ListItemText
                primary="AI assistants in dev workflows"
                secondary="1h ago"
              />
            </ListItem>
            <ListItem disableGutters>
              <ListItemText
                primary="Remote hiring trends in 2026"
                secondary="3h ago"
              />
            </ListItem>
            <ListItem disableGutters>
              <ListItemText
                primary="Next.js performance best practices"
                secondary="6h ago"
              />
            </ListItem>
          </List>

          <Divider sx={{ my: 2 }} />

          <Typography variant="subtitle2" sx={{ mb: 1 }}>
            Suggested connections
          </Typography>

          <List dense disablePadding>
            <ListItem
              disableGutters
              secondaryAction={<Button size="small">Connect</Button>}
            >
              <ListItemText primary="Neha Gupta" secondary="SDE • React" />
            </ListItem>
            <ListItem
              disableGutters
              secondaryAction={<Button size="small">Connect</Button>}
            >
              <ListItemText
                primary="Karan Singh"
                secondary="Designer • Product"
              />
            </ListItem>
            <ListItem
              disableGutters
              secondaryAction={<Button size="small">Connect</Button>}
            >
              <ListItemText primary="Isha Rao" secondary="Recruiter • Tech" />
            </ListItem>
          </List>
        </CardContent>
      </Card>
    </Box>
  );
}
