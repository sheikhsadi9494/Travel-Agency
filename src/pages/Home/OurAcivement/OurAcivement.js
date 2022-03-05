import { Container, Grid, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const OurAcivement = () => {
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} lg={4}>
          <Paper sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-evenly', paddingY: '20px', backgroundColor: '#F1F3F7'}} elevation={0}>
            <Box>
                <img src="http://pixner.net/emigrar/emigrar/assets/images/counter-icons/counter_iocn_1.png" alt="" />
            </Box>
            <Box sx={{textAlign: 'center'}}>
              <Typography variant="body1" gutterBottom component="div">
                Trusted members 
              </Typography>
              <Typography sx={{fontWeight: 'bold', color: '#1569d6'}} variant="h3" gutterBottom component="div">
                90,000 +
              </Typography>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Paper sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-evenly', paddingY: '20px', backgroundColor: '#F1F3F7'}} elevation={0}>
            <Box>
                <img src="http://pixner.net/emigrar/emigrar/assets/images/counter-icons/counter_iocn_2.png" alt="" />
            </Box>
            <Box sx={{textAlign: 'center'}}>
              <Typography variant="body1" gutterBottom component="div">
                Cuntries 
              </Typography>
              <Typography sx={{fontWeight: 'bold', color: '#1569d6'}} variant="h3" gutterBottom component="div">
                200 +
              </Typography>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Paper sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-evenly', paddingY: '20px', backgroundColor: '#F1F3F7'}} elevation={0}>
            <Box>
                <img src="http://pixner.net/emigrar/emigrar/assets/images/counter-icons/counter_iocn_3.png" alt="" />
            </Box>
            <Box sx={{textAlign: 'center'}}>
              <Typography variant="body1" gutterBottom component="div">
                Happy Clients 
              </Typography>
              <Typography sx={{fontWeight: 'bold', color: '#1569d6'}} variant="h3" gutterBottom component="div">
                80,000 +
              </Typography>
            </Box>
          </Paper>
        </Grid>     
      </Grid>
    </Container>
  );
};

export default OurAcivement;
