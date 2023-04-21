import React from "react";
import styles from "./DownloadApps.module.css";
import EastRoundedIcon from "@mui/icons-material/EastRounded";

const apps = [
  {
    imgSrc:
      "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_188,h_188/v1618459302/assets/8e/cbcd2e-e7f1-4bd1-ae4e-5343b99ff22f/original/Driver-App-logo.png",
    altText: "Driver App logo",
    appName: "Driver",
  },
  {
    imgSrc:
      "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_188,h_188/v1618459257/assets/13/6bfdbd-cdb6-4221-92c1-cab1feaa39f3/original/Rider-App-logo.png",
    altText: "Uber App logo",
    appName: "Uber",
  },
];

function DownloadApps() {
  return (
    <div className={styles.DownloadAppsContainer}>
      <h1>There’s more to love in the apps</h1>
      <div className={styles.DownloadAppsMapContainer}>
        {apps.map((app, index) => (
          <div key={index} className={styles.DownloadAppsGridContainer}>
            <img height={130} src={app.imgSrc} alt={app.altText} />
            <h2>Download the {app.appName} app</h2>
            <EastRoundedIcon className={styles.Arrow} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default DownloadApps;
