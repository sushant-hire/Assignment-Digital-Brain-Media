import React from "react";
import styles from "./AboutUs.module.css";
import PeopleRoundedIcon from "@mui/icons-material/PeopleRounded";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import PublicOutlinedIcon from "@mui/icons-material/PublicOutlined";

const features = [
  {
    imgSrc:
      "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_698,h_465/v1613520218/assets/3e/e98625-31e6-4536-8646-976a1ee3f210/original/Safety_Home_Img2x.png",
    imgAlt: "Man Driving",
    title: "Our commitment to your safety",
    description:
      "With every safety feature and every standard in our Community Guidelines, we're committed to helping to create a safe environment for our users.",
    links: [
      { text: "Read about our Community Guidelines" },
      { text: "See all safety features" },
    ],
  },
  {
    imgSrc:
      "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_698,h_465/v1613520285/assets/c2/91ea9c-90d7-4c36-a740-d7844536694e/original/Cities_Home_Img2x.png",
    imgAlt: "City Traffic",
    title: "Setting 10,000+ cities in motion",
    description:
      "The app is available in thousands of cities worldwide, so you can request a ride even when you’re far from home.",
    links: [{ text: "View all cities" }],
  },
];

const sections = [
  {
    icon: <PeopleRoundedIcon />,
    title: "About us",
    description:
      "Find out how we started, what drives us, and how we’re reimagining how the world moves.",
    link: { text: "Learn more about Uber" },
  },
  {
    icon: <ArticleOutlinedIcon />,
    title: "Newsroom",
    description:
      "See announcements about our latest releases, initiatives, and partnerships.",
    link: { text: "Go to Newsroom" },
  },
  {
    icon: <PublicOutlinedIcon />,
    title: "Global citizenship",
    description:
      "Read about our commitment to making a positive impact in the cities we serve.",
    link: { text: "See our partnerships" },
  },
];

function AboutUs() {
  return (
    <div className={styles.AboutUsContainer}>
      <h1>Focused on safety, wherever you go</h1>
      <div className={styles.AboutUsFeatures}>
        {features.map((feature) => (
          <div key={feature.title} className={styles.AboutUsFeaturesMap} >
            <img height={365} src={feature.imgSrc} alt={feature.imgAlt} />
            <h4>{feature.title}</h4>
            <p>{feature.description}</p>
            <div>
              {feature.links.map((link) => (
                <p key={link.text}>{link.text}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className={styles.AboutUsSections}>
        {sections.map((section) => (
          <div key={section.title} className={styles.AboutUsSectionsMap} >
            {section.icon}
            <h4>{section.title}</h4>
            <span>{section.description}</span>
            <p>{section.link.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AboutUs;
