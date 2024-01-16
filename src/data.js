import timer from "./assets/timer-stopwatch.jpg";
import todo from "./assets/todo-java.jpg";
import insta from "./assets/instasyam.jpg";

export const projectData = [
  {
    id: 1,
    description:
      "A simple timer and stopwatch web app to record time. This project is built with react and used the react hooks such as useEffect, useState and useRef in its functionality",
    name: "Timer-Stopwatch",
    alt: "A picture of the timer web app",
    image: timer,
    link: "https://hisyamzakariaa.github.io/timer-stopwatch/",
  },
  {
    id: 2,
    description:
      "A classic to-do web app that is built with vanilla JavaScript. This web app collects data from users and store them in an array which is then stored in the local storage. This data can be deleted and retrieved from 'Completed Todo' section if necessary.",
    name: "Todo App",
    alt: "A picture of the todo web app",
    image: todo,
    link: "https://hisyamzakariaa.github.io/final-part3/",
  },
  {
    id: 3,
    description:
      'A clone of Instagram which is built with React. This project uses free API to fetch the random user profiles and display them on the homepage. It also includes the react-router functionality. However, only "Homepage" and "Explore" are working. Other pages are yet to be included',
    name: "Instagram Clone",
    alt: "A picture of the Instasyam web app",
    image: insta,
    link: "https://hisyamzakariaa.github.io/instagram-clone/",
  },
];

export const ABOUT_ME = [
  {
    title: "Projects",
    description:
      "Since I have no experience in working in this field yet, I have nothing to show you. However, to prove that I am capable of being a frontend developer, I have built some projects for the past months from scratch on my own. Hit the button below to see them!",
    link: "/projects",
  },
  {
    title: "Education",
    description:
      "Since high school, I used to dream to become an engineer just like my father and I did pursue my study in engineering. However as I grow older, I realised that it was not what I wanted. I found passion in programming and that was when I decided to change my career.",
    link: "/education",
  },
];



import FUND_CERT from "./assets/Fundamental.jpg";

export const CERTIFICATE = [
  {
    id: "cert1",
    school: "Sigma School",
    description: "Learned about the fundamentals of HTML, CSS, and JavaScript",
    cert: FUND_CERT,
  },
];

export const WORK_EXP = [
  {
    position: "SITE ENGINEER",
    company: "ZZ Zakaria Enterprise",
    period: "(February 2023 - December 2023)",
    id: "work1",
    description: [
      "Responsible for operating machine on site",
      "Materials and machines handling and checking on site",
      "Liaise with clients to make sure current progress meet the requirements of the project",
      "Managing reports and updating work progress to the client",
    ],
  },
  {
    position: "JUNIOR ENGINEER",
    company: "Tars Engineering Sdn Bhd",
    period: "(November 2022 - February 2023)",
    id: "work2",
    description: [
      "Analyze slope condition along the MRT Sungai Buloh - Kajang Line",
      "Responsible in handling reports",
      "Liaise with client to check and analyze sites condition",
    ],
  },
  {
    position: "CIVIL ENGINEER TRAINEE",
    company: "P-Excell Management Sdn Bhd",
    period: "(July 2021 - October 2021)",
    id: "work3",
    description: [
      "Assist supervisor in monitoring labors",
      "Handle material checking on-site",
      "Track project work progress",
      "Involve in report organizing",
      "Help supervisor to check house defect",
    ],
  },
];