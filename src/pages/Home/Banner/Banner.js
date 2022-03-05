import { Box, Container, Grid, Typography } from "@mui/material";
import { height } from "@mui/system";
import React from "react";

const Banner = () => {
    const bg = {
        background: `url('https://i.ibb.co/P1mvSHc/banner-bg.png')`,
        backgroundPosition: 'bottom',
        backgroundRepeat: 'no-repeat',

    }
  return (
    <Box sx={{mb: 15}} style={bg}>
      <Grid
        container
        spacing={2}
        sx={{ justifyContent: "space-evenly", pt: 5}}
      >

        <Grid sx={{ mb: -0.4, mx: 'auto'}} item xs={12} md={4}>
          <img
            style={{ width: "90%" }}
            src="https://i.ibb.co/YbBDfdy/banner2.png"
            alt="copule"
          />
        </Grid>

        <Grid sx={{mx: 4, mt: 6}} item xs={12} md={6}>
          <Typography
            sx={{ fontWeight: "bold", color: "#3076FD" }}
            variant="h6"
            gutterBottom
            component="div"
          >
            Amazing Places
          </Typography>
          <Typography
            sx={{ fontWeight: "bold" }}
            variant="h3"
            gutterBottom
            component="div"
          >
            Expolre <span style={{ color: "#F96912" }}>Life</span><br />
            Travel Where You Want 
          </Typography>
          <Typography sx={{mb: 5, fontWeight: 'bold', color: "", mr: 6}} variant="body2" gutterBottom component="div">
            Travel helped us to understand the meaning of life and it helped
            us to became better person. <br /> Each time we travel. Each time we travel , we see the world with new eyes.
          </Typography>
        </Grid>

      </Grid>
    </Box>
  );
};

export default Banner;
