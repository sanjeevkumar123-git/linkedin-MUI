"use client";

import * as React from "react";
import Stack from "@mui/material/Stack";
import PostComposer from "./PostComposer";
import PostCard from "./PostCard";

const POSTS = [
  {
    id: 1,
    author: "Aarav Mehta",
    subtitle: "Frontend Engineer • 2h",
    content:
      "Just shipped a new Next.js feature flag system. Keeping the UI clean while scaling components is always a fun challenge.",
    tags: ["nextjs", "mui", "frontend"],
  },
  {
    id: 2,
    author: "Priya Sharma",
    subtitle: "Product Designer • 5h",
    content:
      "Working with default component systems can be surprisingly powerful. Constraints help you move faster.",
    tags: ["designsystems", "ux"],
  },
  {
    id: 3,
    author: "Rohit Verma",
    subtitle: "Recruiter • 1d",
    content:
      "Hiring: React / Next.js devs with strong fundamentals. If you’ve built real projects, I’d love to connect.",
    tags: ["hiring", "react", "nextjs"],
  },
];

export default function Feed() {
  return (
    <Stack spacing={2}>
      <PostComposer />
      {POSTS.map((p) => (
        <PostCard key={p.id} post={p} />
      ))}
    </Stack>
  );
}
