import SkillCard from "./SkillCard";
import Layout from "./Layout";

import Image from "next/image";
import logoNext from "../../public/images/logos/next.png";
import logoMongo from "../../public/images/logos/mongo.png";
import logoTailwind from "../../public/images/logos/tailwind.png";
import logoWebflow from "../../public/images/logos/webflow.png";

const Skills = () => {
  const skills = [
    {
      iconClass: "fa-brands fa-html5",
      skillName: "HTML",
      hoverClass: "hover:bg-orange-100 ",
    },
    {
      iconClass: "fa-brands fa-css3-alt",
      skillName: "CSS",
      hoverClass: "hover:bg-blue-100",
    },
    {
      iconClass: "fa-brands fa-js-square",
      skillName: "JavaScript",
      hoverClass: "hover:bg-yellow-100",
    },
    {
      iconClass: "fa-brands fa-react",
      skillName: "React",
      hoverClass: "hover:bg-cyan-100",
    },
    {
      iconImage: logoNext,
      skillName: "Next",
      hoverClass: "hover:bg-gray-200",
    },

    {
      iconClass: "fa-brands fa-node-js",
      skillName: "Node.js",
      hoverClass: "hover:bg-green-300",
    },

    {
      iconImage: logoMongo,
      skillName: "MongoDB",
      hoverClass: "hover:bg-green-100",
    },
    {
      iconClass: "fa-brands fa-vuejs",
      skillName: "Vue",
      hoverClass: "hover:bg-green-200",
    },
    {
      iconClass: "fa-brands fa-sass",
      skillName: "Sass",
      hoverClass: "hover:bg-pink-100",
    },
    {
      iconImage: logoTailwind,
      skillName: "Tailwind",
      hoverClass: "hover:bg-cyan-200",
    },
    {
      iconClass: "fa-brands fa-wordpress-simple",
      skillName: "Wordpress",
      hoverClass: "hover:bg-blue-100",
    },
    {
      iconImage: logoWebflow,
      skillName: "Webflow",
      hoverClass: "hover:bg-blue-200",
    },
  ];

  return (
    <section
      className={
        "flex w-full flex-col items-center justify-center dark:text-light "
      }
    >
      <Layout>
        <div className="skills-container  flex flex-col w-full items-center justify-center border-t-2 border-gray-900 dark:border-light pt-8">
          <div className="flex items-center justify-center ">
            <h3 className="w-full text-5xl font-bold text-myred  text-center md:text-3xl  mb-8">
              Technologies
            </h3>
          </div>

          <div className="grid grid-cols-4 gap-8 xl:grid-cols-3 lg:grid-cols-2  md:grid-cols-2 sm:grid-cols-2 md:gap-4 ">
            {skills.map((skill, index) => (
              <SkillCard
                key={index}
                iconClass={skill.iconClass}
                iconImage={skill.iconImage}
                skillName={skill.skillName}
                hoverClass={skill.hoverClass}
              />
            ))}
          </div>
        </div>
      </Layout>
    </section>
  );
};

export default Skills;
