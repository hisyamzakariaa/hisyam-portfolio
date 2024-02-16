import AboutMeContent from "../components/AboutMeContent";
import Image from "../components/Image";
import classes from "./AboutMe.module.css";
// import laptop2 from '../assets/laptop2.jpg'
import doodle from "../assets/doodle-svg/UnboxingDoodle.svg";
// import alone from "../assets/graduate-alone.jpeg";
import sis from "../assets/graduate-sis.jpeg";

function AboutMePage() {
  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <Image src={sis} alt="" width="auto" height='50rem'/>
        {/* <Image src={laptop2} alt="" size="30rem" /> */}
        <div className={classes.header_text}>
          <h1>About Me</h1>
          <p>
          Enthusiastic and results-driven civil engineer with one year of experience in engineering industry and possess knowledge in web development. Eager to leverage my skills and commitment to excellence in a new and challenging role. Seeking an opportunity to contribute to innovative projects and further develop my expertise in a dynamic professional environment.
          </p>
          <br />
          <br />
          <p style={{fontSize:'small', fontStyle: 'Italic'}}>
            PS: Since I was too busy with work on the graduation week, I had no time to set a post-convo photoshoot. So this is the only decent picture I have. Say hi to me and my sister!
          </p>
        </div>
      </div>
      <div className={classes.content}>
        <AboutMeContent />
      </div>
    </div>
  );
}

export default AboutMePage;
