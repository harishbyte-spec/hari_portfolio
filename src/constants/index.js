import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a web developer with a vast array of knowledge in many different front end and back end
languages, responsive frameworks, databases, and best code practices. My objective is simply to be the
best web developer that I can be and to contribute to the technology industry all that I know and can
do. I am dedicated to perfecting my craft by learning from more seasoned developers, remaining
humble, and continuously making strides to learn all that I can about development`;

export const ABOUT_TEXT = `I am a passionate MERN stack developer with expertise in MongoDB, Express.js, React.js, and Node.js. As a fresher, I focus on building dynamic and responsive web applications. My recent projects utilize Framer Motion for engaging animations and Tailwind CSS for modern styling.

Dedicated to continuous learning, I strive to stay updated with the latest technologies and best practices in web development. I am enthusiastic about contributing to impactful projects and enjoy collaborating with like-minded professionals. My goal is to create innovative solutions that not only meet user needs but also provide an exceptional user experience.

I am excited to bring creative ideas to life and make a meaningful impact in the tech industry.`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Senior Full Stack Developer",
    company: "Google Inc.",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  {
    year: "2022 - 2023",
    role: "Frontend Developer",
    company: "Adobe",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  },
  {
    year: "2021 - 2022",
    role: "Full Stack Developer",
    company: "Facebook",
    description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  },
  {
    year: "2020 - 2021",
    role: "Software Engineer",
    company: "Paypal",
    description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
    technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  },
];

export const PROJECTS = [
  {
    title: "E-Commerce Website",
    image: project1,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB", "Tailwind", "Redux", ],
  },
  {
    title: "Task Management App",
    image: project2,
    description:
      "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
    technologies: ["HTML", "CSS", "React", "Mongoose"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["React", "Tailwind", "Framer Motion"],
  },
  {
    title: "Chat Application",
    image: project4,
    description:
      "A React.js chat application with Tailwind CSS, offering real-time messaging, user authentication, and a responsive design. Supports chat rooms and private direct messaging.",
    technologies: ["ReactJs", "Tailwind", "mySQL"],
  },
];

export const CONTACT = {
  address: "767 Fifth Avenue, New York, NY 10153 ",
  phoneNo: "6374232906",
  email: "harishsha@outlook.com",
};