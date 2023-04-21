import React from "react";
import styles from "./RideWithUber.module.css";
import EastRoundedIcon from "@mui/icons-material/EastRounded";

const contents = [
  {
    imgSrc:
      "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_188,h_188/v1649914471/assets/89/8e4239-5e7d-4de7-bf71-00cc32d468db/original/Auto-150X150p4x.png",
    alt: "Uber Auto",
    title: "Uber Auto",
    description:
      "Get affordable Uber Auto rides without any haggling. Request Uber Auto and ride comfortably around your city.",
  },

  {
    imgSrc:
      "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_188,h_188/v1649914539/assets/86/82f8b3-e2e6-45f8-a8f7-fdc511f709e0/original/Moto-150X150p4x.png",
    alt: "Uber Moto",
    title: "Uber Moto",
    description:
      "Get affordable bike rides at your doorstep. Skip the crowd and zip through traffic with Uber Moto.",
  },
  {
    imgSrc:
      "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_188,h_188/v1630531077/assets/38/494083-cc23-4cf7-801c-0deed7d9ca55/original/uber-hourly.png",
    alt: "Uber Rentals",
    title: "Uber Rentals",
    description:
      "Book Rentals to save time with one car and driver for your multi-stop trips.",
  },
  {
    imgSrc:
      "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_188,h_188/v1649914597/assets/f7/7f583f-447a-4cf7-8da6-6ad254f0a66b/original/Intercity-150X150p4x.png",
    alt: "Uber Intercity",
    title: "Uber Intercity",
    description:
      "Book Intercity to head outstation anytime in convenient and affordable cars.",
  },
];

function RideWithUber() {
  return (
    <div className={styles.RideWithUberContainer}>
      <h1>Ride with Uber</h1>
      <div className={styles.RideWithUberGridContainer}>
        {contents.map((content, index) => (
          <div key={index} className={styles.RideWithUberElements}>
            <img height={150} src={content.imgSrc} alt={content.alt} />
            <div>
              <h2>{content.title}</h2>
              <p>{content.description}</p>
            </div>
            <EastRoundedIcon className={styles.Arrow} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default RideWithUber;
