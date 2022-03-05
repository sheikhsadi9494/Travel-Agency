import React from 'react';
import { Container, Grid, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";

const CoreValues = () => {
    return (
        <Container sx={{my: 15, textAlign: 'center'}}>
            <Box sx={{mb: 5}}>
             <Typography sx={{fontWeight: 'bold', color: '#3076FD'}} variant="body1" gutterBottom component="div">
               WHY CHOOSE OUR TRAVEL AGENCY?
              </Typography>
             <Typography sx={{fontWeight: 'bold', color: 'black'}} variant="h2" gutterBottom component="div">
                Our Core Values
              </Typography>
             <Typography sx={{ color: 'gray'}} variant="body2" gutterBottom component="div">
             Our thoughtful team of knowledgeable experts are here to take care of every need, from the second you <br /> contact us to when you return
              </Typography>
            </Box>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6} lg={4}>
          <Paper sx={{ padding: '30px' }} elevation={3}>
            <Box>
                <img src="http://pixner.net/emigrar/emigrar/assets/images/service-icons/s_icon_1.png" alt="" />
            </Box>
            <Box sx={{textAlign: 'center'}}>
             <Typography sx={{fontWeight: 'bold', color: '#3076FD'}} variant="h4" gutterBottom component="div">
                Accommodation
              </Typography>
              <Typography variant="body1" gutterBottom component="div">
                No matter where you are travelling, Emigrar is here to help you get the best deals in Hotels around the world. 
              </Typography>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Paper sx={{ padding: '30px' }} elevation={3}>
            <Box>
                <img src="http://pixner.net/emigrar/emigrar/assets/images/service-icons/s_icon_2.png" alt="" />
            </Box>
            <Box sx={{textAlign: 'center'}}>
              <Typography sx={{fontWeight: 'bold', color: '#3076FD'}} variant="h4" gutterBottom component="div">
                Transportation
              </Typography>
              <Typography variant="body1" gutterBottom component="div">
                 Whether you are travelling through Air, Sea or Land, Emigrar can arrange transportation according to. 
              </Typography>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Paper sx={{ padding: '30px' }} elevation={3}>
            <Box>
                <img src="http://pixner.net/emigrar/emigrar/assets/images/service-icons/s_icon_3.png" alt="" />
            </Box>
            <Box sx={{textAlign: 'center'}}>
              <Typography sx={{fontWeight: 'bold', color: '#3076FD'}} variant="h4" gutterBottom component="div">
              Trip Planning
              </Typography>
              <Typography variant="body1" gutterBottom component="div">
                Our Talented and Expert Trip Planning Team can make itinerary that suits our clients the best. We will make your travel
              </Typography>
            </Box>
          </Paper>
        </Grid>     
      </Grid>
    </Container>
    );
};

export default CoreValues;