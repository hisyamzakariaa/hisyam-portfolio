import classes from "./Certificate.module.css";

import Image from "../components/Image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faScrewdriverWrench } from "@fortawesome/free-solid-svg-icons";
import { CERTIFICATE } from "../data";

function CertificatesPage() {
  return (
    <>
      <div className={classes.certs_container}>
        <h1>My Certificates!</h1>
        <p>
          I started my journey in web development in June 2023 when I signed up
          for a coding bootcamp as a part-time student since I was still working
          as an engineer. It was a bit strugle for me to manage my time as a
          student and also as a working man. But I think I did it very well and
          here I am, building my own portfolio using ReactJs!
        </p>
        <hr />
        {CERTIFICATE.map((cert) => (
          <div className={classes.cert_container} key={cert.id}>
            <Image
              src={cert.cert}
              alt="This is an image of the certificate"
              width="500px"
              height="auto"
            />
            <h2>{cert.school}</h2>
            <p>{cert.description}</p>
          </div>
        ))}
        <div className={classes.footer}>
          <FontAwesomeIcon
            icon={faScrewdriverWrench}
            size="3x"
            className={classes.wrench}
          />
          <h3>I am still working on my skills and currently studying ReactJs and NodeJs at Udemy. So, more certificates are coming and they will be updated and displayed here!</h3>
        </div>
      </div>
    </>
  );
}

export default CertificatesPage;
