import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';


const Navigation = () => {
  const {user, logOut} = useAuth();
    return (
        <Box sx={{ flexGrow: 1, mb: 2}}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                <Link to='/' style={{textDecoration: 'none',color: 'white'}}>
                Travel Day
                </Link>
            </Typography>
            {
            user.email && 
            <Link style={{textDecoration: 'none', color: 'white'}} to='/myBookings'>
               <Button color="inherit">My Bookings</Button>
            </Link>
            }
            {
            user.email && 
            <Link style={{textDecoration: 'none', color: 'white'}} to='/manageAllOrders'>
               <Button color="inherit">Manage All Booking</Button>
            </Link>
            }
            {
            user.email && 
            <Link style={{textDecoration: 'none', color: 'white'}} to='/addTravelPlan'>
               <Button color="inherit">Add Travel Plan</Button>
            </Link>
            }
            {
            user.email ?
            
               <Button onClick={logOut} color="inherit">LogOut</Button>
            
            :
            <Link style={{textDecoration: 'none', color: 'white'}} to='/login'>
               <Button color="inherit">Login</Button>
            </Link>
            }
           <Link style={{color: 'white'}} to='/'>
               <Button color="inherit">
                 {
                   user.displayName
                 }
               </Button>
            </Link>
          </Toolbar>
        </AppBar>
      </Box>
    );
};

export default Navigation;