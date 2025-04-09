import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import { PiHexagonThin } from "react-icons/pi";
import hexaPic from "../../assets/hexaPic.png";

const HeroPic = () => {
  return (
    <motion.div
      variants={fadeIn("left", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0 }}
      className=" h-full flex items-center justify-center md:mt-0 mt-8"
    >
      <img
        // src="../../public/images/HexPicJ.png"
        src={hexaPic}
        alt="Abdelrahman Qassem"
        className="md:max-h-[660px] max-h-[330px] w-auto"
      />

      <div className=" absolute -z-10 flex justify-center items-center animate-pulse ">
        <PiHexagonThin className="md:h-[90%] sm:h-[120%] md:min-h-[600px] min-h-[470px] w-auto text-cyan blur-md animate-[spin_20s_linear_infinite] " />
      </div>
    </motion.div>
  );
};

export default HeroPic;
