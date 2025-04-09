import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiLaravel } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaPhp } from "react-icons/fa6";
import { SiMongodb } from "react-icons/si";
import { SiPhpmyadmin } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import { useState } from "react";

const skills = [
  { skill: "HTML", icon: FaHtml5, color: "#f06529" },
  { skill: "CSS", icon: FaCss3Alt, color: "#0099cc" },
  { skill: "JavaScript", icon: IoLogoJavascript, color: "#ffc107" },
  { skill: "ReactJS", icon: FaReact, color: "#61dbfb" },
  { skill: "TailwindCSS", icon: RiTailwindCssFill, color: "#2965f1" },
  { skill: "Laravel", icon: SiLaravel, color: "#FF2D20" },
  { skill: "MongoDB", icon: SiMongodb, color: "#4db33d" },
  { skill: "Php", icon: FaPhp, color: "#787CB5" },
  { skill: "PhpMyAdmin", icon: SiPhpmyadmin, color: "#FF7F00" },
];

const AllSkillsSM = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-12 my-12">
      {skills.map((item, index) => {
        const Icon = item.icon;
        const isHovered = hoveredIndex === index;

        return (
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
            key={index}
            className="flex flex-col items-center"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <Icon
              className="text-7xl text-orange transition-colors duration-300"
              style={{ color: isHovered ? item.color : "" }} // overrides only on hover
            />
            <p className="text-center mt-4">{item.skill}</p>
          </motion.div>
        );
      })}
    </div>
  );
};

export default AllSkillsSM;
