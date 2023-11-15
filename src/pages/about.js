import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import profile from "../../public/images/profile/Laurent-Delassus.webp";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";
import Experience from "@/components/Experience";
import AnimatedText from "@/components/AnimatedText";
import leftArrow from "../../public/images/codeLeft.png";
import rightArrow from "../../public/images/codeRight.png";

function AnimatedNumberFramerMotion({ value }) {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true });
  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [motionValue, value, isInView]);

  useEffect(
    () =>
      springValue.on("change", (latest) => {
        if (ref.current && latest.toFixed(0) <= value) {
          ref.current.textContent = latest.toFixed(0);
        }
      }),
    [springValue, value]
  );

  return <span ref={ref} />;
}

export default function About() {
  return (
    <>
      <Head>
        <title>Laurent Delassus Developpeur</title>
        <meta
          name="description"
          content="En apprendre sur Laurent Delassus, développeur web full-stack, passionné et créatif, dévellepement web responsive et performant."
        />
      </Head>

      <section
        id="about"
        className={`flex  w-full flex-col items-center justify-center dark:text-light z-0 `}
      >
        <Layout>
          <div className="flex items-center mb-16 sm:mb-8 border-t-2 pt-8 border-gray-900 dark:border-light">
            <Image
              src={leftArrow}
              alt=""
              className="h-16 w-16 dark:invert  "
              sizes=""
              priority
            />
            <AnimatedText
              text="Passion et polyvalence !"
              className=" !text-5xl text-myred !leading-tight dark:text-myred md:!text-3xl sm:!text-xl xs:!text-xl "
            />
            <Image
              src={rightArrow}
              alt="Portrait de Laurent Delassus"
              className="h-16 w-16 "
              sizes=""
              priority
            />
          </div>

          <div className="grid grid-cols-3 gap-8 lg:grid-cols-1 sm:gap-6">
            <div className="flex flex-col items-start justify-start">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
                À propos de moi
              </h2>
              <p className="font-medium ">
                Développeur web autodidacte et formé par l&apos;école Open
                Classrooms, j&apos;ai pu acquérir des compétences en
                développement web , que ce soit en front-end, back-end ou encore
                en optimisation.
              </p>
              <p className="my-4 font-medium">
                Côté front-end,en dehors des bases (html, css et Javascript)
                j&apos;utilise des frameworks comme React, vue et Next.js, ainsi
                que Tailwind ou Sass pour le style.
              </p>
              <p className="font-medium">
                Côté back-end, j&apos;ai pu apprendre à utiliser des langages
                comme Node.js, ainsi que des frameworks comme Express et MongoDB
                pour la gestion de données.
              </p>
              <br />
              <p className="font-medium">
                Enfin pour des projets de sites vitrines, les CMS comme
                Wordpress ou Webflow peuvent être d&apos;excellentes solutions.
              </p>
            </div>
            <Image
              src={profile}
              alt="Portrait de Laurent Delassus"
              className="h-auto w-full rounded-2xl "
              sizes="100vw"
              priority
            />
            <div className="flex flex-col items-end justify-between lg:flex-row xl:items-center">
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumberFramerMotion value={5} />+
                </span>
                <h2
                  className="mb-4 text-xl font-medium capitalize text-dark/75 dark:text-light/75 
                xl:text-center md:text-lg sm:text-base xs:text-sm"
                >
                  Clients satisfaits
                </h2>
              </div>

              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumberFramerMotion value={10} />+
                </span>
                <h2
                  className="mb-4 text-xl font-medium capitalize text-dark/75 dark:text-light/75 
                xl:text-center md:text-lg sm:text-base xs:text-sm"
                >
                  Projects réalisés
                </h2>
              </div>

              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumberFramerMotion value={1} />+
                </span>
                <h2
                  className="mb-4 text-xl font-medium capitalize text-dark/75 dark:text-light/75 
                xl:text-center md:text-lg sm:text-base xs:text-sm"
                >
                  Années d&apos;expérience
                </h2>
              </div>
            </div>
          </div>

          <Experience />
        </Layout>
      </section>
    </>
  );
}
