import React from "react";
import styles from "./Footer.module.css";
import {
  Facebook,
  Twitter,
  YouTube,
  LinkedIn,
  Instagram,
  Language,
  LocationOn,
} from "@mui/icons-material";

const footerElementsData = [
  {
    title: "Company",
    items: [
      "About us",
      "Our offerings",
      "Newsroom",
      "Investors",
      "Blog",
      "Careers",
      "AI",
      "Gift cards",
    ],
  },
  {
    title: "Products",
    items: [
      "Ride",
      "Drive",
      "Deliver",
      "Eat",
      "Uber for Business",
      "Uber Freight",
    ],
  },
  {
    title: "Global citizenship",
    items: ["Safety", "Diversity and Inclusion", "Sustainability"],
  },
  {
    title: "Travel",
    items: ["Airports", "Cities"],
  },
];

const Footer = () => (
  <div className={styles.FooterContainer}>
    <img
      height={20}
      src="https://freelogopng.com/images/all_img/1659768779uber-logo-white.png"
      alt="Uber Logo"
    />
    <p className={styles.VisitHelpCenter}>Visit Help Center</p>
    <div className={styles.FooterElementsGridContainer}>
      {footerElementsData.map((footerElementData) => (
        <div key={footerElementData.title}>
          <h4>{footerElementData.title}</h4>
          {footerElementData.items.map((item) => (
            <p className={styles.FooterElements} key={item}>
              {item}
            </p>
          ))}
        </div>
      ))}
    </div>
    <div>
      <div  className={styles.FooterLinks}>
        <div className={styles.FooterLinksOne}>
          <Facebook />
          <Twitter />
          <YouTube />
          <LinkedIn />
          <Instagram />
        </div>
        <div className={styles.FooterLinksTwo}>
          <p>
            <Language />
            English
          </p>
          <p>
            <LocationOn />
            Pune
          </p>
        </div>
      </div>
      <div className={styles.StoreLinks}>
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
      <div className={styles.CopyrightContainer}>
        <p>© 2023 Uber Technologies Inc.</p>
        <div >
          <p>Privacy</p>
          <p>Accessibility</p>
          <p>Terms</p>
        </div>
      </div>
    </div>
  </div>
);

export default Footer;
