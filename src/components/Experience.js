import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";
import Image from "next/image";

const Details = ({ position, time, address, work }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-4 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-start justify-between md:w-[80%]"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold  text-myred dark:text-myred text-2xl sm:text-xl xs:text-lg">
          {position}{" "}
        </h3>
        <span className="capitalize text-dark/75 font-medium dark:text-light/50 xs:text-sm">
          {time} | {address}
        </span>
        <p className="font-medium w-full md:text-sm"> {work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="my-16">
      <div className="flex items-center ">
        <h2 className="font-bold text-myred text-5xl mb-16 w-full text-center md:text-3xl  border-t-2 pt-8 border-gray-900 dark:border-light ">
          Le Dev&apos;Web
        </h2>
      </div>

      <div ref={ref} className="relative w-[75%] mx-auto lg:w-[90%] md:w-full">
        <motion.div
          className="absolute left-9 top-0 w-[4px] md:w-[2px] md:left-[30px] xs:left-[20px] h-full bg-dark 
            origin-top  dark:bg-myred dark:shadow-3xl"
          style={{ scaleY: scrollYProgress }}
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
            position="Développeur web"
            time="2022-aujourd'hui"
            address="Lille, France"
            work="Applications web complètes, de la conception à la mise en ligne, en passant par le développement front-end et back-end. 
            Formation: Open Classrooms, NCP5 Développeur web full-stack. 
            Certifications: React JS, Vue JS, Next JS, Node JS"
          />

          <Details
            position="Photographe professionnel"
            time="2015-aujourd'hui"
            address="Lille, France"
            work="Prestations et reportages photos pour les entreprises et les particuliers, en France et à l'étranger. Depuis, la barre des 60 mariages mariages a été franchie, et je ne compte plus les shootings photos et les reportages!
            Mise en place de formations et d'ateliers.
            "
          />

          <Details
            position="Formateur & Conseiller pédagogique en numérique"
            time="2021-2022"
            address="Croix, Wasquehal, Hem"
            work="Accompagnements et conseils auprès des inspections et des équipes d’écoles.
            Formations en lien avec le numérique."
          />

          <Details
            position="Professeur des écoles"
            time="2007-2021"
            address="Wattrelos, France"
            work="Mise en place de situations d’apprentissages variées et suivi des élèves, mise en place d’adaptations.
            Projets interdisciplinaires."
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
