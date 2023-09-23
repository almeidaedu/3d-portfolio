import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

import ServiceCard from "../containers/ServiceCard";

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introdução</p>
        <h2 className={styles.sectionHeadText}>Resumo.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Atualmente desenvolvedor Javascript com experiência em frameworks de
        desenvolvimento como VueJS, NodeJS e ReactJS, banco de dados MongoDB e
        Redis. Estudando tecnologias DevOps para desenvolvimento pessoal e
        profissional com objetivo de fazer sempre melhor ao cliente e aos
        companheiros de equipe.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default About;
