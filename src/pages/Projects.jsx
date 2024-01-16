import classes from "./Project.module.css";
import Image from "../components/Image";
import { projectData } from "../data";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faScrewdriverWrench } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function ProjectsPage() {
  return (
    <div className={classes.container}>
      <h1>My Projects!</h1>
      {projectData.map((project) => (
        <div className={classes.project_container} key={project.id}>
          <hr />
          <Image
            src={project.image}
            alt={project.alt}
            width="50rem"
            height="auto"
          />
          <h3>{project.name}</h3>
          <p>{project.description}</p>
          <Link target="blank" to={project.link}><button>See Project</button></Link>
        </div>
      ))}

      <div className={classes.footer}>
        <FontAwesomeIcon
          icon={faScrewdriverWrench}
          size="3x"
          className={classes.wrench}
        />
        <h3>
          There will be more projects to come so stay tuned! 
        </h3>
      </div>
    </div>
  );
}

export default ProjectsPage;
