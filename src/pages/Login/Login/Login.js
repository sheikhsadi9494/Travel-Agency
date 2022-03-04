import { Alert, Button, CircularProgress, Container, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const Login = () => {
    const [loginData, setLoginData] = useState([]);
    const { user, login, authError ,isLoading, signInWithGoogle} = useAuth();

    const location = useLocation();
    const navigate = useNavigate();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = {...loginData};
        newLoginData[field] = value;
        setLoginData(newLoginData);
        e.preventDefault();
    }

    const handleLoginSubmit = e => {
        e.preventDefault();
        login(loginData.email, loginData.password, location, navigate);
    }

    const handleGoogleSignIn = e => {
      e.preventDefault();
      signInWithGoogle(location, navigate);
    }


  return (
    <Container style={{textAlign: 'center'}}>
      <Box sx={{ marginY: "50px" }}>
      <Typography variant="h3" gutterBottom component="div">
        TravelDay
      </Typography>
      </Box>
      <Box  
        style={{
          border: "1px solid gray",
          width: "45%",
          margin: "auto",
          padding: "40px",
          borderRadius: '5px'
        }}>
      {!isLoading &&
        <form onSubmit={handleLoginSubmit}>
        <TextField
          sx={{ width: "100%" }}
          label="Email"
          type="email"
          name="email"
          onBlur={handleOnChange}
          variant="standard"
        />{" "}
        <br />
        <TextField
          sx={{ width: "100%" }}
          label="Password"
          type="password"
          name="password"
          onBlur={handleOnChange}
          variant="standard"
        />
        <Box>
           <Button type="submit" sx={{width: '100%', marginY: '10px'}} variant="contained">Login</Button>
        </Box>
      </form>
      }
      {
        isLoading && <CircularProgress />
      }
      <p style={{textAlign: 'center'}}>dont have an account ? <Link to="/register">register</Link></p>
      <p style={{textAlign: 'center', marginTop: '30px', marginBottom: '15px'}}>-------- or --------</p>
        <Box style={{marginY: '10px'}}>
           <Button onClick={handleGoogleSignIn} color="warning" type="submit" sx={{width: '100%'}} variant="contained"><i class="fa-brands fa-google"></i>_Sign in With Google</Button>
        </Box>
        {
          user.email &&
          <Alert severity="success">This is a success alert — check it out!</Alert>
        }
        {
          authError &&
          <Alert severity="error">{authError}</Alert>
        }
      </Box>
    </Container>
  );
};

export default Login;