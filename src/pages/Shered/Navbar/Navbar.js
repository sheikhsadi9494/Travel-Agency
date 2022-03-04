import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import useAuth from '../../../hooks/useAuth';
import { Link } from 'react-router-dom';

const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const Navbar = () => {
  const {user, logOut} = useAuth();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Link style={{textDecoration: 'none'}} to='/'>
          <Typography
            variant="h5"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex', fontWeight: 'bold', color: 'white'} }}
          >
            TravelDay
          </Typography>
          </Link>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
               <Box sx={{mx: 2}}>
               <Link style={{textDecoration: 'none'}} to='/'>
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'black', display: 'block' }}
              >
                Home
              </Button>
              </Link>
              { 
            user.email &&   
            <Link style={{textDecoration: 'none'}} to='/myBookings'>
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'black', display: 'block' }}
              >
                My booking
              </Button>
              </Link>
          }

          { 
             user.email &&
              <Link style={{textDecoration: 'none'}} to='/manageAllOrders'>
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'black', display: 'block'}}
              >
                Manage All booking
              </Button>
              </Link>
          }

          {   
             user.email &&
            <Link style={{textDecoration: 'none'}} to='/addTravelPlan'>
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'black', display: 'block' }}
              >
                Add Travel Plan
              </Button>
              </Link>
          }
               </Box>

         
            </Menu>
          </Box>
          {/* <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none', textAlign: 'center'} }}
          >
            Travel Day
          </Typography> */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex'}, mx: 5 }}>
           
          { 
            user.email &&   
            <Link style={{textDecoration: 'none'}} to='/myBookings'>
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block', mx: 2}}
              >
                My Orders
              </Button>
              </Link>
          }

          { 
             user.email &&
              <Link style={{textDecoration: 'none'}} to='/manageAllOrders'>
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                Manage All Orders
              </Button>
              </Link>
          }

          {   
             user.email &&
            <Link style={{textDecoration: 'none'}} to='/addTravelPlan'>
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block', mx: 2}}
              >
                Add Travel Plan
              </Button>
              </Link>
          }
         
          </Box>

          <Box sx={{mx: 2}}>
          {
            user.email ?
            
               <Button onClick={logOut} color="inherit">LogOut</Button>
            
            :
            <Link style={{textDecoration: 'none', color: 'white'}} to='/login'>
               <Button color="inherit">Login</Button>
            </Link>
            }
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
            <Typography textAlign="center">{user.displayName}</Typography>
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
