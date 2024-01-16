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
            A civil engineer graduate with minor experience in construction
            industry. Currently looking foropportunities to change career to web
            development. Possess experience in creating responsive website using
            Html, CSS, JavaScript and React.
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
