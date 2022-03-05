import { CircularProgress, Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import MyBooking from "../MyBooking/MyBooking";
import Footer from "../Shered/Footer/Footer";
import Navbar from "../Shered/Navbar/Navbar";
import Navigation from "../Shered/Navigation/Navigation";

const MyBookings = () => {
  const { user } = useAuth();
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetch(
      `https://whispering-depths-35702.herokuapp.com/bookings?email=${user.email}`
    )
      .then((res) => res.json())
      .then((data) => setBookings(data));
  }, [user.email]);
  console.log(bookings);
  return (
    <div>
      <Navbar></Navbar>
      <Typography
        sx={{ textAlign: "center", fontWeight: "bold", marginY: 5 }}
        variant="h4"
        gutterBottom
        component="div"
      >
        My Bookings
      </Typography>
      {bookings.length <= 0 ? (
        <Box sx={{ width: "3.5%", mx: "auto", my: 10 }}>
          <CircularProgress />
        </Box>
      ) : (
        <Container sx={{ mb: 15 }}>
          <Grid container spacing={2}>
            {bookings.map((booking) => (
              <MyBooking
                key={booking._id}
                booking={booking}
                bookings={bookings}
                setBookings={setBookings}
              ></MyBooking>
            ))}
          </Grid>
        </Container>
      )}
      <Footer></Footer>
    </div>
  );
};

export default MyBookings;
