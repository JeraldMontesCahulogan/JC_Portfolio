import SingleSkill from "./SingleSkill";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiLaravel } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { FaPhp } from "react-icons/fa6";
import { SiPhpmyadmin } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const skills = [
  {
    skill: "HTML",
    icon: FaHtml5,
    color: "#f06529",
  },
  {
    skill: "CSS",
    icon: FaCss3Alt,
    color: "#0099cc",
  },
  {
    skill: "JavaScript",
    icon: IoLogoJavascript,
    color: "#ffc107",
  },
  {
    skill: "ReactJS",
    icon: FaReact,
    color: "#61dbfb",
  },
  {
    skill: "TailwindCSS",
    icon: RiTailwindCssFill,
    color: "#2965f1",
  },
  {
    skill: "Laravel",
    icon: SiLaravel,
    color: "#FF2D20",
  },
  {
    skill: "MongoDB",
    icon: SiMongodb,
    color: "#4db33d",
  },
  {
    skill: "Php",
    icon: FaPhp,
    color: "#787CB5",
  },
  {
    skill: "PhpMyAdmin",
    icon: SiPhpmyadmin,
    color: "#FF7F00",
  },
];

const AllSkills = () => {
  return (
    <div>
      <div className="flex items-center justify-center relative gap-4 max-w-[1200px] mx-auto">
        {skills.map((item, index) => (
          <motion.div
            variants={fadeIn("up", `0.${index}`)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0 }}
            key={index}
          >
            <SingleSkill
              text={item.skill}
              imgSvg={<item.icon />}
              color={item.color}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AllSkills;
