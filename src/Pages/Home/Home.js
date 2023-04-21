import React from "react";
import NavBar from "../../Components/Nav Bar/NavBar";
import Footer from "../../Sections/Footer/Footer";
import SignUpTo from "../../Sections/Sign Up To/SignUpTo";
import DownloadApps from "../../Sections/Download Apps/DownloadApps";
import AboutUs from "../../Sections/About Us/AboutUs";
import RideWithUber from "../../Sections/Ride With Uber/RideWithUber";
import UberForBusiness from "../../Sections/Uber For Business/UberForBusiness";
import Hero from "../../Sections/Hero/Hero";

function Home() {
  return (
    <>
      <NavBar />
      <Hero />
      <UberForBusiness />
      <RideWithUber />
      <AboutUs />
      <DownloadApps />
      <SignUpTo />
      <Footer />
    </>
  );
}

export default Home;
