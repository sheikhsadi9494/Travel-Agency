import { Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import ManageAllOrder from "../ManageAllOrder/ManageAllOrder";
import MyBooking from "../MyBooking/MyBooking";
import Footer from "../Shered/Footer/Footer";
import Navbar from "../Shered/Navbar/Navbar";
import Navigation from "../Shered/Navigation/Navigation";

const ManageAllOrders = () => {
  const [bookings, setBookings] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    fetch(`https://whispering-depths-35702.herokuapp.com/allBookings`)
      .then((res) => res.json())
      .then((data) => setBookings(data));
  }, [user.email]);

  return (
    <div>
      <Navbar></Navbar>
      <Typography
        sx={{ textAlign: "center", fontWeight: "bold", marginY: 5 }}
        variant="h4"
        gutterBottom
        component="div"
      >
        Manage All Orders
      </Typography>
      <Container sx={{ mb: 5 }}>
        <Grid container spacing={2}>
          {bookings.map((booking) => (
            <ManageAllOrder
              key={booking._id}
              booking={booking}
              bookings={bookings}
              setBookings={setBookings}
            ></ManageAllOrder>
          ))}
        </Grid>
      </Container>
      <Footer></Footer>
    </div>
  );
};

export default ManageAllOrders;
