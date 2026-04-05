import { FaReact, FaHtml5, FaCss3Alt, FaNodeJs, FaGitAlt } from 'react-icons/fa';
import { SiJavascript, SiNextdotjs, SiTailwindcss, SiTypescript } from 'react-icons/si';

export const MY_DETAILS = {
  name: "Nitesh Sharma  ",
  role: "Creative Frontend Developer",
  shortIntro: "Crafting modern, responsive, and performant web experiences.",
  bio: "Hi, I'm Nitesh. A passionate frontend developer with 3+ years of experience in building sleek, scalable, and accessible UIs. I specialize in the React ecosystem and love playing with Web animations.",
  email: "niteshsharmad345@gmail.com",
  phone: "+91 9873589608",
  location: "New Delhi, India"
};

export const SKILLS = [
  { name: "HTML5", icon: FaHtml5, progress: 95 },
  { name: "CSS3 / Sass", icon: FaCss3Alt, progress: 90 },
  { name: "JavaScript (ES6+)", icon: SiJavascript, progress: 85 },
  { name: "TypeScript", icon: SiTypescript, progress: 75 },
  { name: "React", icon: FaReact, progress: 90 },
  { name: "Next.js", icon: SiNextdotjs, progress: 80 },
  { name: "Tailwind CSS", icon: SiTailwindcss, progress: 95 },
  { name: "Node.js", icon: FaNodeJs, progress: 70 },
];

export const SERVICES = [
  { title: "UI/UX Design", description: "Designing intuitive and engaging user interfaces utilizing glassmorphism and modern aesthetics." },
  { title: "Frontend Development", description: "Building responsive, fast, and SEO-friendly SPAs using React and Next.js." },
  { title: "Web Animations", description: "Adding life to static designs using Framer Motion and smooth CSS transitions." }
];

export const PROJECTS = [
  {
    id: 1,
    title: "Glamflicks by Shweta",
    category: "Business",
    image: "https://image.thum.io/get/width/1200/crop/800/https://www.glamflicksbyshweta.com/",
    description: "A professional business website tailored for a beauty and glamour brand.",
    techStack: ["React", "Tailwind CSS"],
    liveLink: "https://www.glamflicksbyshweta.com/",
    githubLink: "#"
  },
  {
    id: 2,
    title: "Vishwakarma Work",
    category: "Business",
    image: "https://image.thum.io/get/width/1200/crop/800/https://www.vishwakarmawork.com/",
    description: "Corporate platform showcasing manufacturing and engineering services.",
    techStack: ["Next.js", "Framer Motion"],
    liveLink: "https://www.vishwakarmawork.com/",
    githubLink: "#"
  },
  {
    id: 3,
    title: "Fensa Window",
    category: "E-Commerce",
    image: "https://image.thum.io/get/width/1200/crop/800/https://fensawindow.com/",
    description: "An elegant catalog and e-commerce platform for architectural windows and doors.",
    techStack: ["Next.js", "Tailwind"],
    liveLink: "https://fensawindow.com/",
    githubLink: "#"
  },
  {
    id: 4,
    title: "Appliances Kart",
    category: "E-Commerce",
    image: "https://image.thum.io/get/width/1200/crop/800/https://applianceskart.com/",
    description: "A comprehensive digital storefront for home and electronic appliances.",
    techStack: ["React", "CSS Modules"],
    liveLink: "https://applianceskart.com/",
    githubLink: "#"
  }
];
