import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

import AppTopBar from "../components/AppToBar";
import LeftSidebar from "../components/LeftSidebar";
import Feed from "../components/Feed";
import RightSidebar from "../components/RightSidebar";

export default function HomePage() {
  return (
    <Box>
      <AppTopBar />
      <Container sx={{ mt: 2, mb: 4 }}>
        <Grid container spacing={2}>
          <Grid item md={3}>
            <LeftSidebar />
          </Grid>

          <Grid item xs={12} md={6} lg={6}>
            <Feed />
          </Grid>

          <Grid item lg={3}>
            <RightSidebar />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
