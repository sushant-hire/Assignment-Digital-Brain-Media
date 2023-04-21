import React from "react";
import styles from "./SignUpTo.module.css";
import EastRoundedIcon from "@mui/icons-material/EastRounded";

function SignUpTo() {
  return (
    <div className={styles.SignUpToContainer}>
      <div className={styles.SignUpToDriveContainer}>
        <h1>Sign up to drive</h1>
        <EastRoundedIcon
          className={styles.Arrow}
          style={{ fontSize: "3rem" }}
        />
      </div>
      <div className={styles.SignUpToRideContainer}>
        <h1> Sign up to ride</h1>
        <EastRoundedIcon
          className={styles.Arrow}
          style={{ fontSize: "3rem" }}
        />
      </div>
    </div>
  );
}

export default SignUpTo;
