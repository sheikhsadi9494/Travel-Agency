import { Box } from "@mui/system";
import React from "react";
import Services from "../../OurServices/Services";
import Footer from "../../Shered/Footer/Footer";
import Navbar from "../../Shered/Navbar/Navbar";
import Navigation from "../../Shered/Navigation/Navigation";
import AboutUs from "../AboutUs/AboutUs";
import Banner from "../Banner/Banner";
import OurAcivement from "../OurAcivement/OurAcivement";
import CoreValues from "../OurCoreValues/CoreValues";

const HomeContainer = () => {
  return (
    <Box>
        {/* <Navigation></Navigation> */}
        <Navbar></Navbar>
        <Banner></Banner>
        <OurAcivement></OurAcivement>
        <Services></Services>
        <CoreValues></CoreValues>
        <AboutUs></AboutUs>
        <Footer></Footer>
    </Box>
  );
};

export default HomeContainer;
