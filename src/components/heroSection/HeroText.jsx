import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const HeroText = () => {
  return (
    <div className="flex flex-col md:gap-6 gap-3  h-full justify-center md:text-left sm:text-center">
      <motion.h2
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="lg:text-5xl md:text-4xl sm:text-2xl  uppercase text-lightGrey "
      >
        Aspirant Full Stack Web Developer
      </motion.h2>
      <motion.h1
        variants={fadeIn("right", 0.4)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="md:text-[2.8rem] lg:text-6xl sm:text-4xl text-orange font-bold uppercase"
      >
        Jerald <br className="sm:hidden md:block" />
        Cahulogan
      </motion.h1>
      <motion.p
        variants={fadeIn("up", 0.6)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="lg:text-2xl md:text-xl text-lg md:mt-4 mt-2 md:w-96 w-80"
      >
        An Aspirant Web Developer passionate about building modern websites and
        continuously learning new technologies.
      </motion.p>
    </div>
  );
};

export default HeroText;
