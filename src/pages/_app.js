import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import { Montserrat } from "next/font/google";
import Head from "next/head";
import { useRouter } from "next/router";
import About from "./about";
import Projects from "./projects";
import ContactForm from "./ContactForm";

const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-mont" });

export default function App({ Component, pageProps }) {
  const router = useRouter();

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main
        className={`${montserrat.variable} font-mont  bg-light dark:bg-dark  w-full min-h-screen h-full`}
      >
        <Navbar />
        <Component {...pageProps} />
        <Projects />
        <About />
        <ContactForm />
        <Footer />
      </main>
    </>
  );
}
