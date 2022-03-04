import { Alert, Button, Container, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import Navigation from "../Shered/Navigation/Navigation";
import Footer from "../Shered/Footer/Footer";
import Navbar from "../Shered/Navbar/Navbar";

const AddTravel = () => {
  const [travelDetails, setTravelDetails] = React.useState({});
  const [serviceAddSuccessfully, setServiceAddSuccessfully] = useState(false);

  const handleBlur = (e) => {
    e.preventDefault();
    const field = e.target.name;
    const value = e.target.value;
    const newDetails = { ...travelDetails };
    newDetails[field] = value;
    setTravelDetails(newDetails);
  };

  const handleServicesSubmit = (e) => {
    e.preventDefault();
    //collact data
    const plans = {
      ...travelDetails,
    };
    //send data to the server
    fetch("https://whispering-depths-35702.herokuapp.com/", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(plans),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          setServiceAddSuccessfully(true);
        }
      });
  };

  return (
    <div>
      <Navbar></Navbar>
      <Typography
        sx={{ textAlign: "center", fontWeight: "bold", my: 5 }}
        variant="h4"
        gutterBottom
        component="div"
      >
        Add Travel Plan
      </Typography>
      <Container sx={{ mb: 15 }}>
        <form
          onSubmit={handleServicesSubmit}
          style={{ width: "50%", margin: "auto" }}
        >
          <TextField
            label="Service Name"
            sx={{ width: "95%", margin: 1 }}
            name="serviceName"
            size="small"
            onBlur={handleBlur}
          />
          <TextField
            label="Project Details"
            sx={{ width: "95%", margin: 1 }}
            multiline
            rows={4}
            name="discription"
            onBlur={handleBlur}
          />
          <TextField
            label="Location"
            sx={{ width: "95%", margin: 1 }}
            name="location"
            size="small"
            onBlur={handleBlur}
          />
          <TextField
            label="Price"
            sx={{ width: "95%", margin: 1 }}
            name="Price"
            size="small"
            onBlur={handleBlur}
          />
          <TextField
            label="Time"
            sx={{ width: "95%", margin: 1 }}
            name="time"
            size="small"
            onBlur={handleBlur}
          />
          <TextField
            label="Image Url"
            sx={{ width: "95%", margin: 1 }}
            name="img"
            size="small"
            onBlur={handleBlur}
          />
          <Button sx={{ marginX: 1 }} type="submit" variant="contained">
            Add Travel Plan
          </Button>
        </form>
        {serviceAddSuccessfully && (
          <Alert sx={{ my: 4, width: "60%", mx: "auto" }} severity="success">
            Service Add Successfully !
          </Alert>
        )}
      </Container>
      <Footer></Footer>
    </div>
  );
};

export default AddTravel;
