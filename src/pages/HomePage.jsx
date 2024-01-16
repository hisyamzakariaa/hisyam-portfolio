import doodle from "../assets/doodle-svg/ZombieingDoodle.svg";
import Image from "../components/Image";

import classes from "./HomePage.module.css";
function HomePage() {
  return (
    <div className={classes.content}>
      <div className={classes.text}>
        <h1>WELCOME!</h1>
        <h3>
          Welcome to Hisyam's Portfolio - Where Creativity and Innovation
          Collide!
        </h3>

        <p>
          Step into the captivating world, a showcase of artistic prowess,
          technical finesse, and a passion for web development.
          From 'Home' section to 'Projects' section, each piece tells a story of dedication, skill, and a relentless pursuit of pushing boundaries. Whether you're here as a potential collaborator, employer, or simply an admirer of the arts, I invite you to explore the depths of my  portfolio. Each click unveils a new facet of my journey, showcasing not just the finished product but the thought process and passion that went into its creation. Feel free to immerse yourself!
        </p>

        <p>
          As you browse through my portfolio, I hope you find inspiration and a glimpse into the possibilities that await when talent meets dedication. Thank you for visiting, and enjoy the journey through my portfolio. Your presence is truly appreciated, and I look forward to the exciting  possibilities ahead!
        </p>
      </div>
      <Image
        src={doodle}
        alt="Doodle of a walking guy"
        width="25rem"
        height="auto"
      />
    </div>
  );
}

export default HomePage;
