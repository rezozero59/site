import React from "react";
import Layout from "./Layout";
import leftArrow from "../../public/images/codeLeft.png";
import rightArrow from "../../public/images/codeRight.png";
import Image from "next/image";

function Services() {
  return (
    <section
      id="services"
      className={`flex w-full flex-col items-center justify-center dark:text-light`}
    >
      <Layout>
        <div
          id="services"
          className="flex flex-col items-center border-t-2 border-gray-900 dark:border-light "
        >
          <div className="flex items-center ">
            <Image
              src={leftArrow}
              alt=""
              className="h-16 w-16 dark:invert "
              sizes=""
              priority
            />
            <h2 className="text-5xl font-bold text-myred text-center mt-16 mb-6 md:text-3xl sm:text-xl">
              Services de Développement Web
            </h2>
            <Image
              src={rightArrow}
              alt="Portrait de Laurent Delassus"
              className="h-16 w-16 "
              sizes=""
              priority
            />
          </div>
          <div className=" w-full grid grid-cols-2 gap-4 lg:grid-cols-1 md:place-items-center">
            <div className=" w-full border-2 bg-gray-300/20 border-dark dark:border-light dark:bg-light/5 rounded-md p-4 m-4 transition duration-300 transform hover:scale-105 shadow-lg">
              <h4
                className="text-xl font-bold mt-2 text-center mb-2 pb-4 sm:text-lg
              border-b-2 border-gray-600 dark:border-light"
              >
                Création de Sites Internet Modernes et Réactifs
              </h4>
              <p>
                Développer des sites web dynamiques, interactifs et optimisés
                pour tous les appareils.
              </p>
              <p>
                Conception de l&rsquo;interface utilisateur (UI) et de
                l&rsquo;expérience utilisateur (UX) pour une navigation
                intuitive et engageante.
              </p>
            </div>
            <div className="w-full border-2 bg-gray-300/20 border-dark dark:border-white dark:bg-light/5 rounded-md p-4 m-4 transition duration-300 transform hover:scale-105 shadow-lg">
              <h4
                className="text-xl font-bold mt-2 text-center mb-2 pb-4 sm:text-lg
              border-b-2 border-gray-600 dark:border-light"
              >
                Développement Full Stack, applications Web responsives
              </h4>
              <p>
                Développement front-end et back-end pour offrir des solutions
                complètes de bout en bout.
              </p>
              <p>
                Capacité à gérer des projets web complexes et à fournir une
                solution clé en main.
              </p>
            </div>

            <div className="w-full border-2 bg-gray-300/20  border-dark dark:border-white rounded-md dark:bg-light/5 p-4 m-4 transition duration-300 transform hover:scale-105 shadow-lg">
              <h4
                className="text-xl font-bold mt-2 text-center mb-2 pb-4 sm:text-lg
              border-b-2 border-gray-600 dark:border-light"
              >
                Optimisation, Référencement et Maintenance
              </h4>
              <p>
                Amélioration des performances, debbogage et optimisation SEO.
              </p>
              <p>
                Assurer la sécurité et la mise à jour des technologies
                utilisées.
              </p>
            </div>
            <div className="w-full border-2 bg-gray-300/20 dark:bg-light/5 border-dark dark:border-white rounded-md p-4 m-4 transition duration-300 transform hover:scale-105 shadow-lg">
              <h4
                className="text-xl font-bold mt-2 text-center mb-2 pb-4 sm:text-lg
              border-b-2 border-gray-600 dark:border-light"
              >
                Conseils et Solutions Personnalisées
              </h4>
              <p>
                Analyse des besoins spécifiques de chaque client pour proposer
                des solutions sur mesure
              </p>
              <p>
                Conseils en matière de technologie et d&rsquo;architecture web
                pour des projets de toutes tailles.
              </p>
            </div>
            <div className="w-full border-2 bg-gray-300/20 dark:bg-light/5 border-dark dark:border-white rounded-md p-4 m-4 transition duration-300 transform hover:scale-105 shadow-lg">
              <h4
                className="text-xl font-bold mt-2 text-center mb-2 pb-4 sm:text-lg
              border-b-2 border-gray-600 dark:border-light"
              >
                Développement Backend et Gestion de Données
              </h4>
              <p>Mise en place de serveurs backend performants et sécurisés.</p>
              <p>
                Intégration de bases de données et mise en œuvre d&rsquo;APIs
                pour une gestion efficace des données.
              </p>
            </div>
            <div className="w-full border-2 bg-gray-300/20 dark:bg-light/5  border-dark dark:border-white rounded-md p-4 m-4 transition duration-300 transform hover:scale-105 shadow-lg ">
              <h4
                className="text-xl font-bold mt-2 text-center mb-2 pb-4 sm:text-lg
              border-b-2 border-gray-600 dark:border-light"
              >
                Green Code et Écoconception Web
              </h4>
              <p>
                Développement web engagé dans le green code, solutions
                éco-responsables pour optimiser la performance et réduire
                l&rsquo;empreinte écologique de votre site.
              </p>
            </div>
          </div>
        </div>
      </Layout>
    </section>
  );
}

export default Services;
