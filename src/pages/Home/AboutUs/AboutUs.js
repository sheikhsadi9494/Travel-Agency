import { Button, Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const AboutUs = () => {
  return (
    <Container sx={{mb: 10}}>
      <Grid
        sx={{ justifyContent: "space-evenly", alignItems: "center" }}
        container
        spacing={2}
      >
        <Grid item xs={12} md={6} lg={5}>
          <Typography
            sx={{ fontWeight: "bold" }}
            variant="h3"
            gutterBottom
            component="div"
          >
            About us
          </Typography>
          <Typography variant="body1" gutterBottom component="div">
            Top Tour Operators and Travel Agency. We offering in total 793 tours
            and holidays throughout the world. Combined we have received 1532
            customer reviews and an average rating of 5 out of 5 stars. Travel
            has helped us to understand the meaning of life and it has helped us
            become better people. Each time we travel, we see the world with new
            eyes.
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "space-evenly", my: 3 }}>
            <Box>
              <Box sx={{ display: "flex"}}>
                <Box sx={{mx: 1}}>
                  <i
                    style={{ fontSize: "20px", color: '#F96912'}}
                    class="fa-solid fa-circle-check"
                  ></i>
                </Box>
                <Box>
                  <Typography variant="body1" gutterBottom component="div">
                    Safety Travel System
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ display: "flex"}}>
                <Box sx={{mx: 1}}>
                  <i
                    style={{ fontSize: "20px", color: '#F96912'}}
                    class="fa-solid fa-hand-holding-heart"
                  ></i>{" "}
                </Box>
                <Box>
                  <Typography variant="body1" gutterBottom component="div">
                    Budget-Friendly Tour
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ display: "flex"}} >
                <Box sx={{mx: 1}}>
                  <i
                    style={{ fontSize: "20px", color: '#F96912'}}
                    class="fa-solid fa-headset"
                  ></i>
                </Box>
                <Box>
                  <Typography variant="body1" gutterBottom component="div">
                    24/7 Customer Support
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Box>
              <Box sx={{ display: "flex"}}>
                <Box sx={{mx: 1}}>
                <i style={{fontSize: '20px', color: '#F96912'}} class="fa-solid fa-thumbs-up"></i>
                </Box>
                <Box>
                  <Typography variant="body1" gutterBottom component="div">
                  Right Solution & Guide
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ display: "flex"}}>
                <Box sx={{mx: 1}}>
                <i style={{fontSize: '20px', color: '#F96912'}} class="fa-solid fa-comments"></i>
                </Box>
                <Box>
                  <Typography variant="body1" gutterBottom component="div">
                  Fast Communication
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ display: "flex"}} >
                <Box sx={{mx: 1}}>
                <i style={{fontSize: '20px', color: '#F96912'}} class="fa-solid fa-clock"></i>
                </Box>
                <Box>
                  <Typography variant="body1" gutterBottom component="div">
                  Expert Trip Planning
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
          <Button sx={{backgroundColor: '#F96912'}} variant="contained">Contact us</Button>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Box>
            <img
              style={{ borderRadius: "10px", width: "100%" }}
              src="https://templates.hibootstrap.com/jaunt/default/assets/img/about2.jpg"
              alt="travel place"
            />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AboutUs;
