import { Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const Footer = () => {
  return (
    <Box sx={{ border: "2px solid black", backgroundColor: 'black', color: 'white'}}>
      <Box sx={{mt: 10, mb: 20, mx: 3}}>
      <Grid sx={{ justifyContent: 'space-evenly'}} container spacing={2}>
        <Grid item xs={12} md={3} lg={3}>
          <Box>
            <Typography variant="h4" gutterBottom component="div">
              Travel Day
            </Typography>
            <Typography
              sx={{ my: 2 }}
              variant="body1"
              gutterBottom
              component="div"
            >
              You can dream, create, design, and build <br /> the most wonderful place.
            </Typography>
            <Box sx={{display: 'flex', alignItems: 'center'}}>
              <Box sx={{mx: 2}}>
              <i style={{color: 'orange'}} class="fa-solid fa-phone"></i>
              </Box>
              <Box>
              <Typography
              sx={{ my: 2 }}
              variant="body1"
              gutterBottom
              component="div"
            >
              +0123 456 987
            </Typography>
              </Box>
            </Box>
            <Box sx={{display: 'flex', alignItems: 'center'}}>
              <Box sx={{mx: 2}}>
              <i style={{color: 'orange'}} class="fa-solid fa-envelope"></i>              </Box>
              <Box>
              <Typography
              sx={{ my: 2 }}
              variant="body1"
              gutterBottom
              component="div"
            >
              travelDay1@gmail.com
            </Typography>
              </Box>
            </Box>
            <Box sx={{display: 'flex', alignItems: 'center'}}>
              <Box sx={{mx: 2}}>
              <i style={{color: 'orange'}} class="fa-solid fa-location-dot"></i>
              </Box>
              <Box>
              <Typography
              sx={{ my: 2 }}
              variant="body1"
              gutterBottom
              component="div"
            >
              Mon-Fri: 8 AM – 7 PM
            </Typography>
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={3} lg={3}>
          <Box>
            <Typography variant="h4" gutterBottom component="div">
              Latest News
            </Typography>
            <Box sx={{mb: 3}}>
            <Typography variant="body1" gutterBottom component="div">
            Surrounded by the peaceful waters of <br /> Lake Victoria.
            </Typography>
            <Typography sx={{color: 'gray'}} variant="body2" gutterBottom component="div">
            October 05, 2021
            </Typography>
            </Box>
            <Box>
            <Typography variant="body1" gutterBottom component="div">
            Morning came very early today. The <br /> alarm went off at 4 am
            </Typography>
            <Typography sx={{color: 'gray'}} variant="body2" gutterBottom component="div">
            jun 12, 2024
            </Typography>
            </Box>

          </Box>
        </Grid>
        <Grid item xs={12} md={2} lg={2}>
        <Box>
            <Typography variant="h4" gutterBottom component="div">
            Quick Links
            </Typography>
            <Typography
              sx={{ my: 2 }}
              variant="body1"
              gutterBottom
              component="div"
            >
              About Us
            </Typography>
            <Typography
              sx={{ my: 2 }}
              variant="body1"
              gutterBottom
              component="div"
            >
              Destinations
            </Typography>
            <Typography
              sx={{ my: 2 }}
              variant="body1"
              gutterBottom
              component="div"
            >
              Our Team
            </Typography>
            <Typography
              sx={{ my: 2 }}
              variant="body1"
              gutterBottom
              component="div"
            >
              Contact Us
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={2} lg={2}>
        <Box>
            <Typography variant="h4" gutterBottom component="div">
            Plan Your Trip
            </Typography>
            <Typography
              sx={{ my: 2 }}
              variant="body1"
              gutterBottom
              component="div"
            >
              Special Offers
            </Typography>
            <Typography
              sx={{ my: 2 }}
              variant="body1"
              gutterBottom
              component="div"
            >
              Hotels
            </Typography>
            <Typography
              sx={{ my: 2 }}
              variant="body1"
              gutterBottom
              component="div"
            >
              Accommodations
            </Typography>
            <Typography
              sx={{ my: 2 }}
              variant="body1"
              gutterBottom
              component="div"
            >
              Transportation
            </Typography>
          </Box>
        </Grid>
      </Grid>
      </Box>
      <Box sx={{borderTop: 1, textAlign: 'center'}}>
      <Typography
              sx={{ my: 4 }}
              variant="body1"
              gutterBottom
              component="div"
            >
              Copyright @2021 Jaunt. Developed by Sheikh Sadi
            </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
