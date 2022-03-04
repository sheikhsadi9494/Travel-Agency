import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { TextField } from "@mui/material";
import useAuth from "../hooks/useAuth";
import PlaceOrder from "../pages/PlaceOrder/PlaceOrder";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function PlaceOrderModal({
  openModal,
  handleCloseModal,
  service,
  setSuccessfullyOrder,
}) {
  const { user } = useAuth();
  const { img, serviceName, discription, Price, time } = service;

  const initialInfo = { clientName: user.displayName, email: user.email };
  const [bookingDetails, setBookingDetails] = React.useState(initialInfo);

  const handleBlur = (e) => {
    e.preventDefault();
    const field = e.target.name;
    const value = e.target.value;
    const newDetails = { ...bookingDetails };
    newDetails[field] = value;
    setBookingDetails(newDetails);
  };

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    //collact data
    const booking = {
      ...bookingDetails,
      img,
      serviceName,
      discription,
      Price,
      time,
      status: "pending",
    };
    console.log(booking);
    //send data to the server
    fetch("https://whispering-depths-35702.herokuapp.com/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          setSuccessfullyOrder(true);
          handleCloseModal();
        }
      });
  };

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={openModal}
        onClose={handleCloseModal}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openModal}>
          <Box sx={style} style={{ borderRadius: "10px", border: 0 }}>
            <Typography id="transition-modal-title" variant="h5" component="h2">
              Booking Details
            </Typography>
            <form onSubmit={handleBookingSubmit}>
              <TextField
                label="Client Name"
                sx={{ width: "95%", margin: 1 }}
                name="clientName"
                defaultValue={user.displayName}
                onBlur={handleBlur}
                size="small"
              />
              <TextField
                label="Client Email"
                sx={{ width: "95%", margin: 1 }}
                name="email"
                defaultValue={user.email}
                onBlur={handleBlur}
                size="small"
              />
              <TextField
                label="Service Name"
                sx={{ width: "95%", margin: 1 }}
                name="serviceName"
                defaultValue={serviceName}
                onBlur={handleBlur}
                size="small"
                InputProps={{
                  readOnly: true,
                }}
              />
              <TextField
                label="Project Details"
                sx={{ width: "95%", margin: 1 }}
                multiline
                rows={4}
                name="projectDetails"
                defaultValue={discription}
                onBlur={handleBlur}
                InputProps={{
                  readOnly: true,
                }}
              />
              <TextField
                label="Price"
                sx={{ width: "95%", margin: 1 }}
                name="price"
                defaultValue={`${Price} USD`}
                onBlur={handleBlur}
                size="small"
                InputProps={{
                  readOnly: true,
                }}
              />
              <TextField
                label="Time"
                sx={{ width: "95%", margin: 1 }}
                name="time"
                defaultValue={time}
                onBlur={handleBlur}
                size="small"
                InputProps={{
                  readOnly: true,
                }}
              />
              <Button sx={{ marginX: 1 }} type="submit" variant="contained">
                Place Booking
              </Button>
            </form>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
