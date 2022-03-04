import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";

const Service = ({ service }) => {
  const { serviceName, location, img, discription, _id, Price} = service;
  return (
    <Grid item xs={12} md={6} lg={4}>
      <Card>
        <CardMedia
          component="img"
          image={img}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="body1" sx={{fontWeight: 'bold', color: 'gray'}} component="div">
            Location:  {location}
          </Typography>
          <Typography sx={{fontWeight: 'bold'}} gutterBottom variant="h5" component="div">
            {serviceName}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {discription}
          </Typography>
          <Typography variant="h6" color="black">
            Price: $ {Price}
          </Typography>
        </CardContent>
          
          <Link style={{textDecoration: 'none'}} to={`/services/${_id}`}>
             <Button sx={{mx: 2, mb: 2,}} variant="contained">Book Now</Button>
          </Link>
      
      </Card>
    </Grid>
  );
};

export default Service;
