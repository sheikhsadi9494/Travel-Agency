import { CircularProgress, Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import Service from "../Home/Service/Service";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("https://whispering-depths-35702.herokuapp.com/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <Container sx={{ my: 15 }}>
      <Box sx={{ textAlign: "center" }}>
        <Typography
          sx={{ color: "#3076FD", fontWeight: "bold" }}
          variant="h6"
          gutterBottom
          component="div"
        >
          TAKE A LOOK AT OUR
        </Typography>
        <Typography
          sx={{ fontWeight: "bold" }}
          variant="h3"
          gutterBottom
          component="div"
        >
          Travel Plans
        </Typography>
        <Typography
          sx={{ color: "gray" }}
          variant="body2"
          gutterBottom
          component="div"
        >
          We've made a list of suggested activities based on your
          interests.Browse through our most popular <br /> Hotels!Our Featured
          Tours can help you find the trip that's perfect for you!.
        </Typography>
      </Box>
      {
      services.length <= 0 ?
      <Box sx={{width: '3.5%', mx: 'auto',mt: 10}}>
          <CircularProgress/>
      </Box>
      :
        <Box sx={{ mt: 5 }}>
        <Grid container spacing={4}>
          {services.map((service) => (
            <Service key={service._id} service={service}></Service>
          ))}
        </Grid>
      </Box>
      }
    </Container>
  );
};

export default Services;
