import { Alert, Button, CircularProgress, Container, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const Register = () => {
    const [registerData, setRegisterData] = useState([]);
    const { register, isLoading, user, authError, signInWithGoogle} = useAuth();
    const navigate = useNavigate();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newRegisterData = {...registerData};
        newRegisterData[field] = value;
        setRegisterData(newRegisterData);
        e.preventDefault();
    }

    const handleRegisterSubmit = e => {
      e.preventDefault();
        if(registerData.password !== registerData.password2){
            alert('password did not match');
            return
        }
        register(registerData.email, registerData.password, registerData.name, navigate);
    }

    const handleGoogleSignIn = e => {
      e.preventDefault();
      signInWithGoogle(navigate);
    }

    return (
        <Container style={{textAlign: 'center'}}>
        <Box sx={{marginY: "50px" }}>
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
        { !isLoading &&
          <form onSubmit={handleRegisterSubmit}>
          <TextField
            sx={{ width: "100%" }}
            label="Name"
            type="text"
            name="name"
            onBlur={handleOnBlur}
            variant="standard"
          />
          <TextField
            sx={{ width: "100%" }}
            label="Email"
            type="email"
            name="email"
            onBlur={handleOnBlur}
            variant="standard"
          />
          <TextField
            sx={{ width: "100%" }}
            label="Password"
            type="password"
            name="password"
            onBlur={handleOnBlur}
            variant="standard"
          />
          <TextField
            sx={{ width: "100%" }}
            label="Retype Your Password"
            type="password"
            name="password2"
            onBlur={handleOnBlur}
            variant="standard"
          />
          <Box>
             <Button type="submit" sx={{width: '100%', marginY: '10px'}} variant="contained">Register</Button>
          </Box>
        </form>
         } 
        {
          isLoading && <CircularProgress />
        }
        <p style={{textAlign: 'center'}}>already have an account ? please <Link to="/login">login</Link></p>
        <p style={{textAlign: 'center', marginTop: '30px', marginBottom: '15px'}}>-------- or --------</p>
          <Box style={{ marginY: '10px'}}>
             <Button onClick={handleGoogleSignIn} color="warning" type="submit" sx={{width: '100%'}} variant="contained"><i class="fa-brands fa-google"></i>_Sign in With Google</Button>
          </Box>

        {
          user.email && 
          <Alert sx={{marginTop: '20px'}} severity="success">Register user successfully</Alert>
        }
        {
          authError && 
          <Alert sx={{marginTop: '20px'}} severity="error">{authError}</Alert>
        }
        </Box>
      </Container>
    );
};

export default Register;