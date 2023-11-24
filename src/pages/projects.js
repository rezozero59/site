import AnimatedText from "@/components/AnimatedText";
import { GithubIcon } from "@/components/Icons";
import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import proj1 from "../../public/images/projects/archi2.webp";
import proj1b from "../../public/images/projects/archi3.webp";
import proj1c from "../../public/images/projects/bluel2.webp";
import proj1d from "../../public/images/projects/bluel5.webp";

import proj2 from "../../public/images/projects/kasa6.webp";
import proj2b from "../../public/images/projects/kasa5.webp";
import proj2c from "../../public/images/projects/kasa4.webp";
import proj2d from "../../public/images/projects/kasa3.webp";
import proj2f from "../../public/images/projects/kasa2.webp";

import proj3 from "../../public/images/projects/Grimoire.webp";
import proj3b from "../../public/images/projects/grimoire2.webp";
import proj3c from "../../public/images/projects/grimoire3.webp";
import proj3d from "../../public/images/projects/grimoire4.webp";
import proj3f from "../../public/images/projects/grimoire5.webp";
import proj3g from "../../public/images/projects/grimoire6.webp";

import proj4 from "../../public/images/projects/booki.webp";
import proj4b from "../../public/images/projects/booki2.webp";
import proj4c from "../../public/images/projects/booki3.webp";
import proj4d from "../../public/images/projects/booki5.webp";
import proj4e from "../../public/images/projects/booki6.webp";

import proj5 from "../../public/images/projects/carducci.webp";
import proj5b from "../../public/images/projects/carducci2.webp";
import proj5c from "../../public/images/projects/carducci3.webp";
import proj5d from "../../public/images/projects/carducci4.webp";

import imgTvShow from "../../public/images/projects/tvshow.webp";

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
    content: {
      additionalText:
        "Ici, tout est codé en pur Javascript. En apui sur une API, les images sont chargées dynamiquement. On y trouve aussi un système de filtre des images. Les opération CRUD sont réalisées en Javascript. La création de projet est réalisée via un formulaire et l'accès par une modale. L'édition est rendue possible seulement avec authentification. Apprendre à coder en pur Javascript est un exercice très formateur, la gestion des requêtes les affichages dynamiques, ou encore apprendre à refactoriser ont permis de progresser.",
      additionalImages: [proj1b, proj1c, proj1d],
    },
  },
  {
    type: "React, API",
    title: "TV Show, recherche et suggestions de séries",
    summary:
      "Une application de recherche de séries codée en React, avec utilisation d'une API externe qui propose de façon dynamique des recommandations.",
    img: imgTvShow,
    github: "https://tvwatch-laurent-delassus-projects.vercel.app/",
    content: {
      additionalText:
        "Uitilisation de React et d'une API de séries pour proposer un léger clone de Netflix, encore en cours de développement... ",
      additionalImages: [],
    },
  },
  {
    type: "React, Sass",
    title: "Kasa, location immobilière",
    summary: "Une application de location immobilière codée en React.",
    img: proj2,
    github: "https://github.com/rezozero59/06-react-kasa-laurent-delassus.git",
    content: {
      additionalText:
        "Préparation du projet côté front-end avec l'utilisation du framework React. Le projet est découpé en composants, dont certains réutilisables. Le projet est réalisé en Sass, responsive, et les animations sont réalisées sans librairies React externe. Apprendre à coder en React est un exercice très formateur, la gestion des états, les affichages dynamiques, les customs hooks, ou encore apprendre à refactoriser ont permis de progresser.",
      additionalImages: [proj2b, proj2c, proj2d, proj2f],
    },
  },
  {
    type: "Node, Express, MongoDB",
    title: "Mon vieux grimoire, notation de livres",
    summary:
      "Back-end d'un site de notation de livres avec crétion d'un API Rest, d'une base de données MongoDB et d'un serveur Node.js.",
    img: proj3,
    github: "https://github.com/rezozero59/P7-grimoire-delassus.git",
    content: {
      additionalText:
        "En lien avec un front-end déjà codé avec React, ce projet est un back-end réalisé avec Node.js, Express et MongoDB. L'API Rest est sécurisée avec JWT. Les opérations CRUD sont réalisées avec Mongoose. La base de données MongoDB est hébergée sur MongoDB Atlas. Apprendre à coder en Node.js est un exercice très formateur, la gestion des requêtes, les affichages dynamiques, ou encore apprendre à refactoriser ont permis de progresser. Créer les routes, les middlewares, les controllers, les models, les schémas, les validations, les tests, les middlewares d'authentification, les middlewares de gestion des erreurs, les middlewares de gestion des fichiers m'ont permis de voir l'importance de la séparation des préoccupations.",
      additionalImages: [proj3b, proj3c, proj3d, proj3f, proj3g],
    },
  },
  {
    type: "HTML,CSS",
    title: "Booki, site d'hébergements de vacances",
    summary: "Intégration d'une maquette en HTML et CSS.",
    img: proj4,
    github:
      "https://github.com/rezozero59/booki-starter-code-master-Delassus.git",
    content: {
      additionalText:
        "Exercice d'intégration d'une maquette en HTML et CSS. Ici, pas de Javascript, pas de framework, pas de bibliothèque, juste du HTML et du CSS. C'était le premier projet réalisé en HTML et CSS, et il a permis de découvrir les bases de l'intégration web.",
      additionalImages: [proj4b, proj4c, proj4d, proj4e],
    },
  },
  {
    type: "SEO, accessibilité, debug",
    title: "Nina, Carducci, photographe",
    summary:
      "Amélioration des performances, de l'accessibilité et du SEO d'un site de photographe.",
    img: proj5,
    github: "https://github.com/rezozero59/Projet5-OC-delassus.git",
    content: {
      additionalText:
        "Optimisation du référencement naturel, du SEO, de l'accessibilité, des performances, et debboogage des fonctionnnalités problématiques. Allègement des fichiers, minification,HTML sémantique, balises meta, microdonnées... Les outils de développement de Chrome ont été utilisés pour analyser les performances et les problèmes d'accessibilité.  Apprendre à optimiser un site web est un exercice très formateur, la gestion des performances, de l'accessibilité, ou encore apprendre à débugger ont permis de progresser. ",
      additionalImages: [proj5b, proj5c, proj5d],
    },
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
      className=" h-90vh flex flex-col w-full items-center justify-between rounded-3xl border
      border-solid border-dark bg-light p-12 shadow-2xl dark:border-light dark:bg-dark lg:flex-col 
      lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4"
    >
      <div className="flex w-full flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
        <button
          className=" h-10  rounded-lg bg-myred p-2 px-6 text-lg font-semibold text-light dark:bg-myred dark:text-light sm:px-4 sm:text-base cursor-default"
          aria-label="technologie utilisée"
        >
          {type}
        </button>
        <h2 className="my-2 text-4xl  font-bold lg:text-3xl xs:text-2xl">
          {title}
        </h2>
        <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">
          {summary}
        </p>
        <div className="w-full overflow-hidden rounded-lg lg:w-full mb-8">
          <FramerImage
            src={img}
            alt={title}
            className=" w-full h-auto rounded-lg hover:cursor-pointer"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
            onClick={() =>
              onProjectClick({
                type,
                title,
                summary,
                img,
                github,
              })
            }
          />
        </div>

        <div className="mt-2 w-full flex items-center justify-between ">
          <Link
            href={github}
            target={"_blank"}
            className="w-10 mr-8 hover:cursor-pointer"
          >
            <GithubIcon />
          </Link>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onProjectClick({
                type,
                title,
                summary,
                img,
                github,
              });
            }}
            className="ml-8 h-10 w-48 rounded-lg bg-dark p-2 px-6 text-lg font-semibold text-light dark:bg-light dark:text-dark sm:px-4 sm:text-base hover:cursor-pointer"
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
    setSelectedProject({
      ...project, // Ceci inclut type, title, summary, img, github
      content: projects.find((p) => p.title === project.title)?.content, // Ajoute le contenu supplémentaire
    });
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
        className={`mb-16   flex w-full flex-col items-center justify-center dark:text-light`}
      >
        <Layout>
          <div className="flex items-center  ">
            <AnimatedText
              text=" Projets & Idées !"
              className="mb-8 text-5xl text-myred font-bold dark:text-myred sm:mb-8 md:text-3xl border-t-2 pt-8 border-gray-900 dark:border-light"
            />
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-1 gap-4 px-16 md:px-8   ">
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
