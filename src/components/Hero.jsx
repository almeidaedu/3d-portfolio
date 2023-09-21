import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`
          ${styles.paddingX} 
          absolute 
          inset-0 
          top-[120px] 
          max-w-7xl 
          mx-auto 
          flex 
          flex-row 
          items-start 
          gap-5
        `}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Olá, eu sou <span className="text-[#915eff]">Eduardo</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Eu sou um desenvolvedor Javascript Pleno,{" "}
            <br className="sm:block hidden" />
            desenvolvo aplicações web usando Vue/React e{" "}
            <br className="sm:block hidden" />
            API&rsquo;s usando NodeJS.
          </p>
        </div>
      </div>

      <ComputersCanvas />
    </section>
  );
};

export default Hero;
