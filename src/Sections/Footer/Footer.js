import React from "react";
import styles from "./Footer.module.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import LanguageIcon from "@mui/icons-material/Language";
import LocationOnIcon from "@mui/icons-material/LocationOn";

function Footer() {
  return (
    <div className={styles.FooterContainer}>
      <img
        height={20}
        src="https://freelogopng.com/images/all_img/1659768779uber-logo-white.png"
        alt="Uber Logo"
      />{" "}
      <p>Visit Help Center</p>
      <div className={styles.FooterElementsGridContainer}>
        <div>
          <p>Company</p>
          <p>About us</p>
          <p>Our offerings</p>
          <p>Newsroom</p>
          <p>Investors</p>
          <p>Blog</p>
          <p>Careers</p>
          <p>AI</p>
          <p>Gift cards</p>
        </div>
        <div>
          <p>Products</p>
          <p>Ride</p>
          <p>Drive</p>
          <p>Deliver</p>
          <p>Eat</p>
          <p>Uber for Business</p>
          <p>Uber Freight</p>
        </div>
        <div>
          <p>Global citizenship</p>
          <p>Safety</p>
          <p>Diversity and Inclusion</p>
          <p>Sustainability</p>
        </div>
        <div>
          <p>Travel</p>
          <p>Airports</p>
          <p>Cities</p>
        </div>
      </div>
      <div>
        <div>
          <FacebookIcon />
          <TwitterIcon />
          <YouTubeIcon />
          <LinkedInIcon />
          <InstagramIcon />
        </div>
        <div>
          <p>
            <LanguageIcon />
            English
          </p>
          <p>
            <LocationOnIcon />
            Pune
          </p>
        </div>
        <div>
          <img
            height={50}
            src="https://d1a3f4spazzrp4.cloudfront.net/uber-com/1.3.8/d1a3f4spazzrp4.cloudfront.net/illustrations/app-store-google-4d63c31a3e.svg"
            alt="Play Store"
          />
          <img
            height={50}
            src="https://d1a3f4spazzrp4.cloudfront.net/uber-com/1.3.8/d1a3f4spazzrp4.cloudfront.net/illustrations/app-store-apple-f1f919205b.svg"
            alt="App Store"
          />
        </div>
        <div>
          <p>© 2023 Uber Technologies Inc.</p>
          <div>
            <p>Privacy</p>
            <p>Accessibility</p>
            <p>Terms</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
