import AnimatedText from "@/components/AnimatedText";
import { GithubIcon } from "@/components/Icons";
import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import proj1 from "../../public/images/projects/archi2.webp";
import proj2 from "../../public/images/projects/kasa2.webp";
import proj3 from "../../public/images/projects/Grimoire.webp";
import proj4 from "../../public/images/projects/booki.webp";
import proj5 from "../../public/images/projects/carducci.webp";

import leftArrow from "../../public/images/codeLeft.png";
import rightArrow from "../../public/images/codeRight.png";
import ProjectModal from "@/components/ProjectModal";
import { useState } from "react";

const FramerImage = motion(Image);

const projects = [
  {
    type: "Vanilla JavaScript",
    title: "Sophie, Bluel, architecte d'intérieur",
    summary:
      "Une application de portfolio pour un architecte d'intérieur codé en pur Javascript, sans framework ni bibliothèque.",
    img: proj1,
    github:
      "https://github.com/rezozero59/Portfolio-architecte-sophie-bluel.git",
  },
  {
    type: "React, Sass",
    title: "Kasa, location immobilière",
    summary: "Une application de location immobilière codée en React.",
    img: proj2,
    github:
      "https://github.com/rezozero59/Portfolio-architecte-sophie-bluel.git",
  },
  {
    type: "Node, Express, MongoDB",
    title: "Mon vieux grimoire, notation de livres",
    summary:
      "Back-end d'un site de notation de livres avec crétion d'un API Rest, d'une base de données MongoDB et d'un serveur Node.js.",
    img: proj3,
    github:
      "https://github.com/rezozero59/Portfolio-architecte-sophie-bluel.git",
  },
  {
    type: "HTML,CSS",
    title: "Booki, site d'hébergements de vacances",
    summary: "Intégration d'une maquette en HTML et CSS.",
    img: proj4,
    github:
      "https://github.com/rezozero59/Portfolio-architecte-sophie-bluel.git",
  },
  {
    type: "SEO, accessibilité, debug",
    title: "Nina, Carducci, photographe",
    summary:
      "Amélioration des performances, de l'accessibilité et du SEO d'un site de photographe.",
    img: proj5,
    github:
      "https://github.com/rezozero59/Portfolio-architecte-sophie-bluel.git",
  },
];

const FeaturedProject = ({
  type,
  title,
  summary,
  img,
  github,
  onProjectClick,
}) => {
  return (
    <article
      className=" flex flex-col w-full items-center justify-between rounded-3xl border
      border-solid border-dark bg-light p-12 shadow-2xl dark:border-light dark:bg-dark lg:flex-col 
      lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4"
    >
      <div className="flex w-full flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
        <button
          className=" h-10  rounded-lg bg-myred p-2 px-6 text-lg font-semibold text-light dark:bg-myred dark:text-light sm:px-4 sm:text-base"
          aria-label="Voir le projet"
        >
          {type}
        </button>
        <h2 className="my-2 text-4xl underline font-bold lg:text-3xl xs:text-2xl">
          {title}
        </h2>
        <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">
          {summary}
        </p>
        <div className="w-full overflow-hidden rounded-lg lg:w-full mb-8">
          <FramerImage
            src={img}
            alt={title}
            className=" w-full h-auto rounded-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
            onClick={() =>
              onProjectClick({ type, title, summary, img, github })
            }
          />
        </div>

        <div className="mt-2 w-full flex items-center justify-between ">
          <Link href={github} target={"_blank"} className="w-10 mr-8">
            <GithubIcon />
          </Link>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onProjectClick({ type, title, summary, img, github });
            }}
            className="ml-8 h-10 w-48 rounded-lg bg-dark p-2 px-6 text-lg font-semibold text-light dark:bg-light dark:text-dark sm:px-4 sm:text-base"
            aria-label="Voir le projet"
          >
            Voir le projet
          </button>
        </div>
      </div>
    </article>
  );
};

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <>
      <Head>
        <title>Laurent Delassus Developpeur web</title>
        <meta
          name="description"
          content="Découverte des projets web réalisés par Laurent Delassus, développeur web full-stack, passionné et créatif, transformer les idées en applications web innovantes."
        />
      </Head>

      <section
        id="projects"
        className={`mb-16  flex w-full flex-col items-center justify-center dark:text-light`}
      >
        <Layout>
          <div className="flex items-center ">
            <Image
              src={leftArrow}
              alt=""
              className="h-16 w-16 dark:invert  "
              sizes=""
              priority
            />
            <AnimatedText
              text="Des projets et des idées !"
              className="mb-8 !text-5xl text-myred font-bold dark:text-myred !leading-tight sm:mb-8 md:text-3xl sm:!text-xl border-t-2 pt-8 border-gray-900 dark:border-light"
            />
            <Image
              src={rightArrow}
              alt="Portrait de Laurent Delassus"
              className="h-16 w-16 "
              sizes=""
              priority
            />
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-1 gap-4    ">
            {projects.map((project, index) => (
              <div key={index} className="col-span-1">
                <FeaturedProject
                  type={project.type}
                  title={project.title}
                  summary={project.summary}
                  img={project.img}
                  github={project.github}
                  onProjectClick={openModal}
                />
              </div>
            ))}
          </div>
          {selectedProject && (
            <ProjectModal
              isOpen={!!selectedProject}
              onClose={closeModal}
              project={selectedProject}
            />
          )}
        </Layout>
      </section>
    </>
  );
}
