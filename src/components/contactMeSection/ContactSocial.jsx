import SingleContactSocial from "./SingleContactSocial";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";

const ContactSocial = () => {
  return (
    <div className="flex gap-4">
      <SingleContactSocial
        link="https://www.linkedin.com/in/jerald-montes-cahulogan-7a2324351/"
        Icon={FaLinkedinIn}
      />
      <SingleContactSocial
        link="https://github.com/JeraldMontesCahulogan"
        Icon={FiGithub}
      />
      <SingleContactSocial
        link="https://www.instagram.com/jerald_montes_cahulogan?igsh=YzljYTk1ODg3Zg=="
        Icon={FaInstagram}
      />
    </div>
  );
};

export default ContactSocial;
