import React, { useState } from "react";
import styles from "./Hero.module.css";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";
import KeyIcon from "@mui/icons-material/Key";

function Hero() {
  const [activeCard, setActiveCard] = useState("ride");
  const [backgroundImage, setBackgroundImage] = useState(
    "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_1899,h_805/v1613521692/assets/d9/ce6c00-32b0-4b93-9f0d-6f927d93da08/original/Rider_Home_bg_desktop2x.png"
  );
  const handleCardClick = (card) => {
    setActiveCard(card);
    if (card === "ride") {
      setBackgroundImage(
        "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_1899,h_805/v1613521692/assets/d9/ce6c00-32b0-4b93-9f0d-6f927d93da08/original/Rider_Home_bg_desktop2x.png"
      );
    } else if (card === "drive") {
      setBackgroundImage(
        "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_1899,h_833/v1613521435/assets/bc/0529b6-c37a-416b-9907-2cb44c4c2888/original/Earner_Home_bg_desktop2x.png"
      );
    } else if (card === "rent") {
      setBackgroundImage(
        "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_1899,h_778/v1677102595/assets/66/2853af-061f-4176-8c6b-f2ddef091599/original/UberIM_002309-%281%29.jpg"
      );
    }
  };

  return (
    <div
      className={styles.HeroContainer}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className={styles.EntireCardContainer}>
        <div className={styles.CardContainer}>
          <div
            className={
              activeCard === "ride" ? styles.ActiveCard : styles.InactiveCard
            }
            onClick={() => handleCardClick("ride")}
          >
            <DirectionsCarIcon />
            <h4>Ride</h4>
          </div>
          <div
            className={
              activeCard === "drive" ? styles.ActiveCard : styles.InactiveCard
            }
            onClick={() => handleCardClick("drive")}
          >
            <SignalCellularAltIcon />
            <h4>Drive or deliver</h4>
          </div>
          <div
            className={
              activeCard === "rent" ? styles.ActiveCard : styles.InactiveCard
            }
            onClick={() => handleCardClick("rent")}
          >
            <KeyIcon />
            <h4>Rent your fleet</h4>
          </div>
        </div>
        {activeCard === "ride" && (
          <div className={styles.CardDeetsOne}>
            <h1>Request a ride now</h1>
            <div className={styles.InputContainer}>
              <input
                placeholder="Enter pickup location"
                className={styles.Pickup}
              />
              <input
                placeholder="Enter destination"
                className={styles.Destination}
              />
            </div>
            <div className={styles.ButtonContainer}>
              <button className={styles.RequestButton}>Request now</button>
              <button className={styles.ScheduleButton}>
                Schedule for later
              </button>
            </div>
          </div>
        )}
        {activeCard === "drive" && (
          <div className={styles.CardDeetsTwo}>
            <h1>
              Get in the driver’s <br /> seat and get paid
            </h1>
            <p className={styles.CardDeetsTwoP1}>
              Drive on the platform with the largest network of active riders.
            </p>
            <button className={styles.SignupButton}>Sign up to drive</button>
            <p className={styles.CardDeetsTwoP2}>
              Learn more about driving and delivering
            </p>
          </div>
        )}
        {activeCard === "rent" && (
          <div className={styles.CardDeetsThree}>
            <h1>Make money by renting out your car</h1>
            <p>
              Connect with thousands of drivers and earn more per week with
              Uber’s free fleet management tools.
            </p>
            <button className={styles.GetStarted}>Get started</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Hero;
