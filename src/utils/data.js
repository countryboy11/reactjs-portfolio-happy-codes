import van1 from "../assets/van1.png";
import dell from "../assets/dell.png";
import lloyd from "../assets/lloyd.png";

export const PROFILE_DATA = {
  name: "HAPPY CODES",
  tagline:
    "We believe that the best solutions are born from shared knowledge and a supportive environment. With diverse skill sets and a unified approach, we're committed to delivering high-quality, innovative code with a smile.",
  email: "happycodes.imus@email.com",
  phone: "+63 912 345 6789",
  website: "https://happycodes.com",
};

export const Team = [
  {
    id: "01",
    image: van1,
    title: "Van Cabrera",
    role: "Backend Developer",
    skills: ["Python", "Django", "Data Analysis", "Database Management"],
    socialLinks: {
      github: "https://github.com/vancabreragit",
      linkedin: "https://linkedin.com/in/vancabrera",
      facebook: "https://web.facebook.com/van.cabrera.2024/",
    },
  },
  {
    id: "02",
    image: dell,
    title: "Krandelle Kalaw",
    role: "Frontend Developer",
    skills: ["Vue.js", "JavaScript", "UI/UX Design", "Responsive Design"],
    socialLinks: {
      github: "https://github.com/kalawgit",
      linkedin: "https://linkedin.com/in/krandelle",
      facebook: "https://web.facebook.com/krandellejosh.kalaw",
    },
  },
  {
    id: "03",
    image: lloyd,
    title: "Lloyd Teodoro",
    role: "DevOps Engineer",
    skills: ["Docker", "Containerization", "CI/CD", "System Administration"],
    socialLinks: {
      github: "https://github.com/lloydgit",
      linkedin: "https://linkedin.com/in/teodoro",
      facebook: "https://web.facebook.com/Lloydy0824",
    },
  },
];

export const PROJECTS = [
  {
    title: "Portable Wireless Fingerprint Attendance System",
    timeline: "2025",
    summary:
      "Built a portable fingerprint attendance machine that uses fingerprint recognition technology to accurately record attendance data. It offers a secure and efficient way to track employee or student attendance, reducing human error and the need for manual paperwork. These machines are compact and lightweight, making them easy to transport and use in various locations.",
  },
  {
    title: "Inventory Management System for Watch Retail Business",
    timeline: "2024",
    summary:
      "Developed an inventory management system for a watch flipping business. It allows efficient monitoring of watches – including brand, model, condition, acquisition details, and servicing. This system helps organize inventory stored locally or across platforms.",
  },
  {
    title: "OTG Drugstore POS System",
    timeline: "2023",
    summary:
      "Designed a POS system specifically tailored to the needs of a drugstore. It improves checkout speed and accuracy while integrating features vital for pharmacy operations, enhancing compliance and inventory control.",
  },
];

export const ABOUT_US_DATA = {
  introduction:
    "Hello! We are HappyCodes, a team of passionate IT professionals dedicated to crafting innovative and user-friendly digital solutions.",
  background:
    "Formed in 2022 by students from Cavite State University - Imus, HappyCodes was born from a shared desire to collaborate on meaningful projects and make a positive impact through technology.",
  skills:
    "Our collective expertise spans full-stack development, cloud computing, and modern programming paradigms. We specialize in creating scalable, efficient, and user-friendly software that meets the unique needs of our clients.",
  projects:
    "While still early in our journey, we've successfully delivered projects such as a Portable Wireless Fingerprint Attendance System, an Inventory Management System for a watch retail business, and an OTG Drugstore POS System, demonstrating our ability to tackle diverse challenges.",
  interests:
    "Beyond coding, we are a team that values creativity, collaboration, and continuous learning. We are driven by a passion for exploring new technologies and applying them to solve real-world problems.",
  careerGoals:
    "Our goal is to continue growing our expertise, expanding our portfolio, and establishing HappyCodes as a trusted partner for businesses seeking innovative and reliable software solutions. We are committed to delivering exceptional results and exceeding client expectations.",
  stats: {
    yearsOfExperience: "6+",
    numberOfProjects: 3,
    certificationsEarned: 6,
  },
};
