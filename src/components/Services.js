import React from "react";

function Services() {
  return (
    <section
      id="services"
      className={`flex w-full flex-col items-center justify-center dark:text-light`}
    >
      <div
        id="services"
        className="flex flex-col items-center border-t-2 border-gray-900 dark:border-light "
      >
        <div className="flex items-center ">
          <h2 className="text-5xl font-bold text-myred text-center mt-16 mb-6 md:text-4xl ">
            Services
          </h2>
        </div>
        <div className=" w-full grid grid-cols-2 gap-6 lg:grid-cols-1 md:place-items-center">
          <div className=" w-full border-2 bg-gray-300/20 border-dark dark:border-light dark:bg-light/5 rounded-md m-4  transition duration-300 transform hover:scale-105 shadow-lg h-70 lg:h-auto">
            <h4
              className="text-xl font-bold  text-center   xl:text-lg h-20 md:h-auto rounded-sm mb-4 p-3
               dark:border-light bg-dark/90 dark:bg-light/90 text-light dark:text-dark"
            >
              Création de Sites Internet Modernes et Réactifs
            </h4>

            <p className="px-4 pb-4">
              Développer des sites web dynamiques, interactifs et optimisés pour
              tous les appareils.
            </p>
            <p className="px-4 pb-4">
              Conception de l&rsquo;interface utilisateur (UI) et de
              l&rsquo;expérience utilisateur (UX) pour une navigation intuitive
              et engageante.
            </p>
          </div>
          <div className=" w-full border-2 bg-gray-300/20 border-dark dark:border-light dark:bg-light/5 rounded-md m-4  transition duration-300 transform hover:scale-105 shadow-lg h-70 md:h-auto">
            <h4
              className="text-xl font-bold  text-center   xl:text-lg h-20 md:h-auto rounded-sm mb-4 pt-3
               dark:border-light bg-dark/90 dark:bg-light/90 text-light dark:text-dark"
            >
              Développement Full Stack, applications Web responsives
            </h4>
            <p className="px-4 pb-4">
              Développement front-end et back-end pour offrir des solutions
              complètes de bout en bout.
            </p>
            <p className="px-4 pb-4">
              Capacité à gérer des projets web complexes et à fournir une
              solution clé en main.
            </p>
          </div>

          <div className=" w-full border-2 bg-gray-300/20 border-dark dark:border-light dark:bg-light/5 rounded-md m-4  transition duration-300 transform hover:scale-105 shadow-lg h-70 md:h-auto">
            <h4
              className="text-xl font-bold  text-center   xl:text-lg h-20 md:h-auto rounded-sm mb-4 pt-3
               dark:border-light bg-dark/90 dark:bg-light/90 text-light dark:text-dark"
            >
              Optimisation, Référencement et Maintenance
            </h4>

            <p className="px-4 pb-4">
              Amélioration des performances, debbogage et optimisation SEO.
            </p>
            <p className="px-4 pb-4">
              Assurer la sécurité et la mise à jour des technologies utilisées.
            </p>
          </div>
          <div className=" w-full border-2 bg-gray-300/20 border-dark dark:border-light dark:bg-light/5 rounded-md m-4  transition duration-300 transform hover:scale-105 shadow-lg h-70 md:h-auto">
            <h4
              className="text-xl font-bold  text-center   xl:text-lg h-20 md:h-auto rounded-sm mb-4 pt-3
               dark:border-light bg-dark/90 dark:bg-light/90 text-light dark:text-dark"
            >
              Conseils et Solutions Personnalisées
            </h4>
            <p className="px-4 pb-4">
              Analyse des besoins spécifiques de chaque client pour proposer des
              solutions sur mesure
            </p>
            <p className="px-4 pb-4">
              Conseils en matière de technologie et d&rsquo;architecture web
              pour des projets de toutes tailles.
            </p>
          </div>
          <div className=" w-full border-2 bg-gray-300/20 border-dark dark:border-light dark:bg-light/5 rounded-md m-4  transition duration-300 transform hover:scale-105 shadow-lg h-70 md:h-auto">
            <h4
              className="text-xl font-bold  text-center   xl:text-lg h-20 md:h-auto rounded-sm mb-4 pt-3
               dark:border-light bg-dark/90 dark:bg-light/90 text-light dark:text-dark"
            >
              Développement Backend et Gestion de Données
            </h4>
            <p className="px-4 pb-4">
              Mise en place de serveurs backend performants et sécurisés.
            </p>
            <p className="px-4 pb-4">
              Intégration de bases de données et mise en œuvre d&rsquo;APIs pour
              une gestion efficace des données.
            </p>
          </div>
          <div className=" w-full border-2 bg-gray-300/20 border-dark dark:border-light dark:bg-light/5 rounded-md m-4  transition duration-300 transform hover:scale-105 shadow-lg h-70 md:h-auto">
            <h4
              className="text-xl font-bold  text-center   xl:text-lg h-20 md:h-auto rounded-sm mb-4 pt-3
               dark:border-light bg-dark/90 dark:bg-light/90 text-light dark:text-dark"
            >
              Green Code et Écoconception Web
            </h4>
            <p className="px-4 pb-4">
              Développement web engagé dans le green code, solutions
              éco-responsables pour optimiser la performance et réduire
              l&rsquo;empreinte écologique de votre site.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
