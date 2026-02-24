"use client";

import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";

export default function PostCard({ post }) {
  return (
    <Card>
      <CardHeader
        avatar={<Avatar>{post.author?.[0] || "U"}</Avatar>}
        title={post.author}
        subheader={post.subtitle}
      />
      <CardContent>
        <Typography variant="body1">{post.content}</Typography>

        {post.tags?.length ? (
          <Box sx={{ mt: 2 }}>
            <Divider sx={{ mb: 2 }} />
            <Typography variant="body2" color="text.secondary">
              {post.tags.map((t) => `#${t}`).join(" ")}
            </Typography>
          </Box>
        ) : null}
      </CardContent>
      <CardActions>
        <Button size="small">Like</Button>
        <Button size="small">Comment</Button>
        <Button size="small">Repost</Button>
        <Button size="small">Send</Button>
      </CardActions>
    </Card>
  );
}
