import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.png";

export const HERO_CONTENT = `I am an enthusiastic and dedicated frontend developer, I’m eager to apply my skills in creating dynamic and engaging web experiences. Recently graduated with a strong foundation in front-end technologies, I have developed proficiency in HTML, CSS, and JavaScript, and am familiar with frameworks like React. I am excited to contribute my fresh perspective and technical skills to a team where I can learn, grow, and help deliver outstanding user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and adaptable frontend developer with a passion for building efficient and user-friendly web applications. With 2 years of experience as a helpdesk engineer and a recent bootcamp certification from AccioJob, I’ve developed a solid foundation in HTML, CSS, JavaScript, and React. My technical skills extend to back-end technologies like Node.js and databases such as MongoDB and MySQL. Driven by a curiosity about technology and a desire to solve problems creatively, I thrive in collaborative environments and am committed to delivering high-quality solutions. Outside of coding, I enjoy playing games and traveling, which helps me stay inspired and engaged with diverse perspectives.`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Full Stack Developer Apprentice",
    company: "Acciojob .",
    description: `Learning full stack development under the guidance of teachers and mentors from reputable companies such as Google, Flipkart, and Myntra. Created multiple frontend projects and solved over 250+ DSA (Data Structures and Algorithms) questions on the AccioJob platform.`,
  },
  {
    year: "2021 - 2023",
    role: "Helpdesk Engineer",
    company: "NSEIT Limited",
    description: `Took ownership of customer-reported issues, seeing them through to resolution and maintaining customer satisfaction. Performed in-depth troubleshooting tailored to the customer’s skill level, ensuring clear communication and effective resolution. Collaborated with cross-functional teams to escalate complex technical issues and facilitate knowledge sharing, contributing to continuous improvement initiatives within the organization.`,
  },
];

export const PROJECTS = [
  {
    title: "Movix-App (For the Entertainment Geeks)",
    image: project1,
    link: "https://movies-movix-app.netlify.app/",
    description:
      " Developed Movix app using React and Redux, enabling seamless search for movies and TV shows. Designed dynamic homepage with trending, top-rated, and popular carousels for engaging user experience",
    technologies: [
      "HTML",
      "CSS",
      "Javascript",
      "React",
      "Redux",
      "Material-UI",
    ],
  },
  {
    title: "The Bloggggg (MERN Stack)",
    image: project2,
    link: "https://blog-app-22b8.onrender.com/",
    description:
      "Developed a dynamic blog management application using the MERN stack (MongoDB, Express.js,React.js, Node.js) and Tailwind CSS. A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    technologies: [
      "HTML",
      "Tailwind-CSS",
      "React",
      "Node.js",
      "Express",
      "Mongo DB",
    ],
  },
  {
    title: "Podcast Platform",
    image: project3,
    link: "https://podcast-platform7.netlify.app/",
    description:
      "Developed a sophisticated Podcast Platform, implementing robust authentication mechanisms using Firebase.  Leveraged advanced React components and state management techniques, while integrating Redux Toolkit to efficiently handle user and podcast state, ensuring a dynamic and interactive user experience.",
    technologies: ["HTML", "CSS", "Javascript", "React", "Redux", "Firebase"],
  },
];

export const CONTACT = {
  address: "Rabale, Navi-Mumbai, MH 400-701 ",
  // phoneNo: "+12 4555 666 00 ",
  email: "amitkpc11@gmail.com",
};
