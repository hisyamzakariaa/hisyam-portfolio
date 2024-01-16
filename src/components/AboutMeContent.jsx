import classes from "./AboutMeContent.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHtml5 } from "@fortawesome/free-brands-svg-icons";
import { faCss3Alt } from "@fortawesome/free-brands-svg-icons";
import { faJs } from "@fortawesome/free-brands-svg-icons";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import malaysia from '../assets/malaysia-flag-round-circle-icon.svg'
import usa from '../assets/usa-flag-round-circle-icon.svg'
import japan from '../assets/japan-flag-round-circle-icon.svg'
import { ABOUT_ME } from "../data";

function AboutMeContent() {
  return (
    <>
      <div className={classes.content}>
        <h1>Skills</h1>
        <p>Throught out my learning period, I have learned these stacks and I am confident enough to say that I have the adequate skills to be a Frontend Developer.</p>
        <ul className={classes.icon_list}>
            <li>
            <span className={classes.html}><FontAwesomeIcon icon={faHtml5} size="3x" /></span>
            </li>
            <li>
            <FontAwesomeIcon icon={faCss3Alt} size="3x" className={classes.css}/>
            </li>
            <li>
            <FontAwesomeIcon icon={faJs} size="3x" className={classes.js}/>
            </li>
            <li>
            <FontAwesomeIcon icon={faReact} size="3x" className={classes.react}/>
            </li>
        </ul>
      </div>
      <div className={classes.content}>
        <h1>Language</h1>
        <p>Malay has always been my native language but communicating in English has never been a problem to me as it is my second language and currently learning Japanese as my third language.</p>
        <ul className={classes.language}>
            <li>Malay<img src={malaysia} alt="Malaysia flag icon" /></li>
            <li>English<img src={usa} alt="USA flag icon" /></li>
            <li>Japanese<img src={japan} alt="Japan flag icon" /></li>
        </ul>
      </div>
      {ABOUT_ME.map((about) => (
        <div key={about.title} className={classes.content}>
          <h1>{about.title}</h1>
          <p>{about.description}</p>
          <Link to={about.link}><button>Take Me There!</button></Link>
        </div>
      ))}
    </>
  );
}

export default AboutMeContent;
