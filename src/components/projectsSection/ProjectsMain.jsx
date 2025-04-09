import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const projects = [
  {
    name: "Deja Brew",
    year: "Dec2023",
    align: "right",
    image: "../../public/images/website-img-1.jpg",
    link: "#",
    details:
      "A web-based Coffee Shop POS system using PHP, HTML, CSS, and phpMyAdmin with separate pages for admin and cashier. Admins manage products and view sales reports; cashiers handle orders and transactions",
  },
  {
    name: "Spendzilla",
    year: "Dec2024",
    align: "left",
    image: "../../public/images/website-img-3.jpg",
    link: "#",
    details:
      "A web-based Finance Tracking system built with Laravel, Tailwind CSS, and phpMyAdmin. It enables users to track their income, expenses, and budget, offering real-time analytics and visualizations for effective personal finance management.",
  },
  {
    name: "E-Commerce",
    year: "Jan2025",
    align: "right",
    image: "../../public/images/website-img-2.webp",
    link: "#",
    details:
      "A full-stack E-commerce website built with the MERN stack and integrated with Stripe for secure payments. Includes an admin dashboard for product management and sales analytics, and a user-friendly interface for browsing, purchasing, and order tracking.",
  },
  {
    name: "Kasandigan",
    year: "Apr2025",
    align: "left",
    image: "../../public/images/website-img-4.jpg",
    link: "#",
    details:
      "A full-stack web-based Barangay Complaint System built with Laravel, Tailwind CSS, and phpMyAdmin. It features role-based access for admins (barangay captains), officials, and residents—residents can file and monitor their own complaints, while admins and officials manage and resolve them.",
  },
];

const ProjectsMain = () => {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4">
      <motion.div
        variants={fadeIn("top", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <ProjectsText />
      </motion.div>
      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
        {projects.map((project, index) => {
          return (
            <SingleProject
              key={index}
              name={project.name}
              year={project.year}
              align={project.align}
              image={project.image}
              details={project.details}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsMain;
