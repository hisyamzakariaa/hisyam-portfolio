import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faCopyright } from "@fortawesome/free-regular-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import classes from "./Footer.module.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <div className={classes.text}>
        <p>
          Designed and Prepared by Hisyam Zakaria{" "}
          <FontAwesomeIcon icon={faCopyright} />
        </p>
      </div>
      <div className={classes.icon_container}>
        <p>
          <FontAwesomeIcon
            size="2x"
            icon={faEnvelope}
            className={classes.icon}
          /> hisyamzakariaa@gmail.com
        </p>
        <p>
          <FontAwesomeIcon
            size="2x"
            icon={faLinkedin}
            className={classes.icon}
          /> <Link to='https://www.linkedin.com/in/zulhisyam' target="blank">https://www.linkedin.com/in/zulhisyam</Link> 
        </p>
        <p>
          <FontAwesomeIcon size="2x" icon={faGithub} className={classes.icon} /> <Link target="blank" to='https://github.com/hisyamzakariaa'>https://github.com/hisyamzakariaa</Link>
        </p>
      </div>
      <p></p>
    </>
  );
}

export default Footer;
