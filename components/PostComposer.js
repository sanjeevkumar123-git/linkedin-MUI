"use client";

import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export default function PostComposer() {
  return (
    <Card>
      <CardContent>
        <Box sx={{ display: "flex", gap: 2, alignItems: "flex-start" }}>
          <Avatar>S</Avatar>
          <Box sx={{ flexGrow: 1 }}>
            <TextField
              placeholder="Start a post"
              fullWidth
              multiline
              minRows={2}
            />
            <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 2 }}>
              <Button variant="contained">Post</Button>
            </Box>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}
