import classes from "./Education.module.css";

import IIUM2 from "../assets/IIUM2.jpg";
import SS from "../assets/LencanaSS.png";
import Image from "../components/Image";



function EducationPage() {
  return (
    <div className={classes.main_container}>
      <div className={classes.header}>
        <h1>My Education Background!</h1>
        <p>
          As for my secondary education, I spent my high school years at Sekolah
          Menengah Kebangsaan Sultan Sulaiman, which is known as one of the best
          schools in Kuala Terengganu and took my SPM here in 2016. And after
          that, I pursue my study in engineering at International Islamic
          University Malaysia and spent 5 good years to finish my foundation and
          degree there.
        </p>
        <hr />
      </div>

      <div className={classes.eds_container}>
        <div className={classes.ed_container}>
          <Image
            src={IIUM2}
            alt="A picture of IIUM"
            height="auto"
            width="400px"
          />
          <div className={classes.text}>
            <h2>INTERNATIONAL ISLAMIC UNIVERSITY MALAYSIA</h2>
            <ul>
              <li>
                <h3>Bachelor Of Engineering (Hons) Civil / 2018 - 2022</h3>
              </li>
              <li>
                <h3>
                  Foundation Study In Engineering And Computer Science / 2017 -
                  2018
                </h3>
              </li>
            </ul>
          </div>
        </div>
        <div className={classes.ed_container}>
          <Image
            src={SS}
            alt="A logo of SMK Sultan Sulaiaman K. Terengganu"
            height="auto"
            width="400px"
          />
          <div className={classes.text}>
            <h2>SMK SULTAN SULAIMAN</h2>
            <ul>
              <li>
                <h3>Sijil Pelajaran Malaysia (SPM) / 2013 - 2016</h3>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EducationPage;
