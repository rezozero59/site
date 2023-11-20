import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import profilePic from "../../public/images/profile/laurent-delassus2.webp";

import Skills from "@/components/Skills";
import Services from "@/components/Services";
import logo from "../../public/images/logo.png";

export default function Home() {
  return (
    <>
      <Head>
        <title>Laurent Delassus Developpeur</title>
        <meta
          name="description"
          content="Développeur web full-stack, passionné et créatif, transformer les idées en applications web innovantes. Découvrez mes derniers projets."
        />
      </Head>

      <article
        className={`flex min-h-screen items-center text-dark dark:text-light sm:items-start`}
      >
        <Layout className="!pt-8 md:!pt-8 sm:!pt-8">
          <div
            className="flex w-full items-center first-line:justify-between lg:flex-col "
            id="home"
          >
            <div className=" w-1/2 lg:w-full  order-1 lg:order-2  lg:flex lg:justify-center">
              <Image
                src={profilePic}
                alt="Portrait de Laurent Delassus"
                className="h-auto w-3/4 mt-8 rounded-2xl "
                sizes="100vw"
                priority
              />
            </div>
            <div className="flex w-1/2 flex-col order-2 md:order-1 items-center self-center lg:w-full lg:text-center ">
              <div>
                <div className="mt-2 gap-5 flex justify-around w-full  ">
                  <AnimatedText
                    text="Laurent Delassus"
                    className=" !text-4xl mb-4 pb-4 xl:!text-4xl !text-center lg:!text-3xl md:!text-2xl sm:!text-2xl border-b-2 border-gray-900 dark:border-light"
                  />
                </div>
                <AnimatedText
                  text="Développeur web Freelance"
                  className="font-bold text-myred dark:text-myred !text-6xl mb-8 xl:!text-6xl !text-center lg:!text-5xl md:!text-4xl sm:!text-3xl lg:order-1"
                />
                <p className=" border-2 border-gray-900 dark:border-light rounded-lg mb-8 p-6 font-medium text-xl lg:order-1">
                  <span className="font-bold">Développeur full-stack</span>,
                  passionné et créatif. Transformez vos idées et vos projets en
                  <span className="font-bold"> applications web </span>
                  innovantes. Découvrez ici mes derniers projets et sites
                  internet!
                </p>
                <div className="flex justify-around dark:invert">
                  <Image
                    src={logo}
                    alt="logo"
                    className="h-auto w-10 "
                    sizes=""
                    priority
                  />
                  <Link
                    href="#contact"
                    className="flex items-center justify-around w-48 rounded-lg border-2 border-solid bg-dark p-2.5 px-4 text-lg font-semibold
                  capitalize text-light hover:border-dark hover:bg-transparent hover:text-dark 
                  dark:bg-light dark:text-dark dark:hover:border-light dark:hover:bg-dark dark:hover:text-light
                  md:p-2 md:px-4 md:text-base"
                  >
                    Contact <i className="fa-regular fa-envelope"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <Services />
          <Skills />
        </Layout>
      </article>
    </>
  );
}
