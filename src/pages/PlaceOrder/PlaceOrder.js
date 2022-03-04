import { Alert, Box, Button, Container, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PlaceOrderModal from '../../PlaceOrderModal/PlaceOrderModal';
import Services from '../OurServices/Services';
import Navbar from '../Shered/Navbar/Navbar';
import Navigation from '../Shered/Navigation/Navigation';

const PlaceOrder = () => {
    const {id} = useParams();
    const [openModal, setOpenModal] = React.useState(false);
    const handleCloseModal = () => setOpenModal(false);
    const handleOpenModal = () => setOpenModal(true);
    const [successfullyOrder, setSuccessfullyOrder] = React.useState(false)

    const [service, setService] = useState([]);
    const {img, serviceName, discription, Price, time} = service;
    useEffect(() => {
        fetch(`https://whispering-depths-35702.herokuapp.com/services/${id}`)
        .then(res => res.json())
        .then(data => setService(data));
    }, [])
    return (
        <Box>
            <Navbar></Navbar>
            <Container>
            {
                  successfullyOrder &&
                  <Alert sx={{my: 4, width: '60%',mx: 'auto'}} severity="success">Your Booking Conform Successfully !</Alert>
            }
            <Box sx={{ mx: 'auto'}}>
                <Box  sx={{ width: '50%', mx: 'auto', mt: 2}}>
                  <img style={{width: '100%', borderRadius: '10px'}} src={img} alt="" />
                </Box>
                <Box sx={{ marginX: 5}}>
                  <Typography gutterBottom variant="h4" sx={{fontWeight: 'bold', color: 'black'}} component="div">
                    {serviceName}
                  </Typography>
                  <Typography gutterBottom variant="h6" sx={{color: 'black', fontWeight: 'bold'}} component="div">
                    Price: $ {Price} <br />
                    Time: {time}
                  </Typography>
                  <Typography gutterBottom variant="body2" sx={{color: 'black'}} component="div">
                    {discription}
                  </Typography>
                  <Button variant="contained" onClick={handleOpenModal}>Book Now</Button>
                </Box>
            </Box>
            </Container>
            <PlaceOrderModal
            service={service}
            openModal={openModal}
            handleCloseModal={handleCloseModal}
            setSuccessfullyOrder={setSuccessfullyOrder}
            >
            </PlaceOrderModal>
        </Box>
    );
};

export default PlaceOrder;