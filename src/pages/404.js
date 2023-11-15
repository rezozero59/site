import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <>
      <Head>
        <title>Page non trouvée| 404 Page </title>
        <meta
          name="description"
          content="Page non trouvée, erreur 404, Laurent Delassus développeur web full-stack, passionné et créatif, dévellepement web responsive et performant.Ò"
        />
      </Head>

      <main className="h-[75vh] w-full dark:bg-dark ">
        <Layout className="relative !bg-transparent !pt-16 flex flex-col items-center justify-center">
          <AnimatedText text="404" className=" " />
          <AnimatedText
            text="Page Non Trouvée."
            className=" !text-7xl text-myred dark:text-myred !font-bold !mb-8"
          />
          <Link
            href="/"
            className="self-center !mt-4 inline-block rounded-lg border-2 border-solid bg-dark px-4 py-2
        font-semibold text-light hover:border-dark hover:bg-light hover:text-dark 
        dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light
        "
          >
            Retour à l&rsquo;accueil
          </Link>
        </Layout>
      </main>
    </>
  );
};

export default NotFound;
