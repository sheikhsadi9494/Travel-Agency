import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

const ManageAllOrder = ({ booking, setBookings, bookings }) => {
  const {
    clientName,
    email,
    Price,
    discription,
    time,
    img,
    _id,
    serviceName,
    status,
  } = booking;
  const [newStatus, setNewStaus] = useState([]);
  console.log(newStatus);

  const handleDeleteBooking = (id) => {
    const proceed = window.confirm("Are you want to sure to delete this file");
    if (proceed) {
      const url = `https://whispering-depths-35702.herokuapp.com/allBookings/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("cancle order successfully");
            const remaining = bookings?.filter(
              (booking) => booking?._id !== id
            );
            setBookings(remaining);
          }
        });
    }
  };

  const handleUpdateStatus = (id) => {
    const update = { status };
    const url = `https://whispering-depths-35702.herokuapp.com/allBookings/${id}`;
    fetch(url, {
      method: "PUT",
      header: {
        "content-type": "application/json",
      },
      body: JSON.stringify(update),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          console.log(data);
          setNewStaus(update);
        }
      });
  };

  return (
    <Grid item xs={12} md={6} lg={4}>
      <Card>
        <CardMedia
          component="img"
          alt="green iguana"
          height="140"
          image={img}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {serviceName}
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Box>
              <Typography
                gutterBottom
                variant="body2"
                sx={{ fontWeight: "bold" }}
                component="div"
              >
                Email: {email}
              </Typography>
              <Typography
                gutterBottom
                variant="body2"
                sx={{ fontWeight: "bold" }}
                component="div"
              >
                Price: {Price}
              </Typography>
            </Box>
            <Box>
              {status === status ? (
                <Typography
                  gutterBottom
                  variant="body2"
                  sx={{ fontWeight: "bold", color: "gray" }}
                  component="div"
                >
                  status : {status}
                </Typography>
              ) : (
                <Typography
                  gutterBottom
                  variant="body2"
                  sx={{ fontWeight: "bold", color: "gray" }}
                  component="div"
                >
                  status : {newStatus}
                </Typography>
              )}
            </Box>
          </Box>
          <Typography variant="body2" color="text.secondary">
            {discription}
          </Typography>
        </CardContent>
        <Button
          onClick={() => handleDeleteBooking(_id)}
          sx={{ mx: 2, mb: 3 }}
          variant="contained"
        >
          Cancel Booking
        </Button>
        <Button
          onClick={() => handleUpdateStatus(_id)}
          sx={{ mb: 3 , backgroundColor: '#F79508'}}
          variant="contained"
        >
          Update Status
        </Button>
      </Card>
    </Grid>
  );
};

export default ManageAllOrder;
