import { WORK_EXP } from "../data";
import classes from "./Experience.module.css";

function ExperiencePage() {
  return (
    <>
      <div className={classes.header}>
        <h1>My Work Experience!</h1>
        <p>After graduating from engineering school, I wasted no time and jumped into the industry right away! I looked for the job openings and applied as much as I can and later, I managed to get multiple calls for interview and eventually secured a position as an engineer.</p>
      </div>

      <div className={classes.exps_container}>
        {WORK_EXP.map((exp) => (
          <div className={classes.exp_container} key={exp.id}>
            <hr></hr>
            <h2>{exp.position}</h2>
            <h3>{exp.company + " " + exp.period}</h3>
            <ul className={classes.exp_desc}>
              {exp.description.map((desc) => (
                <li key={desc}>{desc}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </>
  );
}

export default ExperiencePage;
