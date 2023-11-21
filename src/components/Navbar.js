import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/router";
import { GithubIcon, LinkedInIcon, MoonIcon, SunIcon } from "./Icons";
import { motion } from "framer-motion";
import { useThemeSwitch } from "./Hooks/useThemeSwitch";

const CustomLink = ({ href, title, className = "" }) => {
  const router = useRouter();
  const handleClick = (e) => {
    e.preventDefault();
    if (href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (href && href.length > 1) {
      const section = document.querySelector(href);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <Link
      href={href}
      className={`${className}  rounded relative group md:text-light md:dark:text-dark`}
      onClick={handleClick}
    >
      {title}
      <span
        className={`
              inline-block h-[1px]  bg-dark absolute left-0 -bottom-0.5 
              group-hover:w-full transition-[width] ease duration-300 dark:bg-light
              ${
                router.asPath === href ? "w-full" : " w-0"
              } md:bg-light md:dark:bg-dark
              `}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const CustomMobileLink = ({ href, title, className = "", toggle }) => {
  const router = useRouter();

  const handleClick = (e) => {
    e.preventDefault();
    toggle();
    if (href && href.length > 1) {
      const section = document.querySelector(href);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <button
      className={`${className}  rounded relative group md:text-light md:dark:text-dark`}
      onClick={handleClick}
    >
      {title}
      <span
        className={`
              inline-block h-[1px]  bg-dark absolute left-0 -bottom-0.5 
              group-hover:w-full transition-[width] ease duration-300 dark:bg-light
              ${
                router.asPath === href ? "w-full" : " w-0"
              } md:bg-light md:dark:bg-dark
              `}
      >
        &nbsp;
      </span>
    </button>
  );
};

const Navbar = () => {
  const [mode, setMode] = useThemeSwitch();
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header
      className=" w-full flex items-center justify-between px-24 py-3 font-medium z-10 dark:text-light bg-black/20 dark:bg-white/5 sticky top-0 
    lg:px-16 z-1 md:px-12 sm:px-8 
    sm:bg-black/30 sm:dark:bg-white/10 sm:py-2 sm:top-0  sm:z-10 backdrop-blur-sm "
    >
      <button
        type="button"
        className=" flex-col items-center justify-center hidden lg:flex"
        aria-controls="mobile-menu"
        aria-expanded={isOpen}
        onClick={handleClick}
      >
        <span className="sr-only">Open main menu</span>
        <span
          className={`bg-dark dark:bg-light block h-1 w-6 rounded-sm transition-all duration-300 ease-out ${
            isOpen ? "rotate-45 translate-y-1.5" : "-translate-y-0.5"
          }`}
        ></span>
        <span
          className={`bg-dark dark:bg-light block h-1 w-6 rounded-sm transition-all duration-300 ease-out ${
            isOpen ? "opacity-0" : "opacity-100"
          } my-0.5`}
        ></span>
        <span
          className={`bg-dark dark:bg-light block h-1 w-6 rounded-sm transition-all duration-300 ease-out ${
            isOpen ? "-rotate-45 -translate-y-1.5" : "translate-y-0.5"
          }`}
        ></span>
      </button>

      <div className="w-full flex  justify-between items-center ">
        <nav className="  flex items-center justify-center lg:hidden  ">
          <CustomLink className="mr-4" href="#home" title="Accueil" />
          <CustomLink className="mx-4" href="#services" title="Services" />
          <CustomLink className="mx-4" href="#projects" title="Projets" />
          <CustomLink className="mx-4" href="#contact" title="Contact" />
        </nav>

        <nav
          className="flex items-center   md:mt-2 w-full justify-end  
      "
        >
          <motion.a
            target={"_blank"}
            className="w-6 mx-6"
            href="https://github.com/rezozero59"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Checkout my github profile"
          >
            <GithubIcon />
          </motion.a>
          <motion.a
            target={"_blank"}
            className="w-6 mx-6"
            href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Checkout my linkedin profile"
          >
            <LinkedInIcon className="grayscale" />
          </motion.a>
          <button
            onClick={() => setMode(mode === "light" ? "dark" : "light")}
            className={` w-6 h-6 ease mx-6  sm:mx-6 flex items-center justify-center rounded-full p-1  
            ${mode === "light" ? "bg-dark  text-light" : "bg-light  text-dark"}
            `}
            aria-label="theme-switcher"
          >
            {mode === "light" ? (
              <SunIcon className={"fill-dark"} />
            ) : (
              <MoonIcon className={"fill-dark"} />
            )}
          </button>
        </nav>
      </div>

      {isOpen ? (
        <motion.div
          className="min-w-[70vw] sm:min-w-[90vw] md:h-[70vh] flex justify-center items-center flex-col md:fixed top-1/4 left-1/2 -translate-x-1/2
      -translate-y-1/2
      py-16 bg-dark/80 dark:bg-light/80 rounded-md z-50 backdrop-blur-md
      "
          // CSS modale
          initial={{ scale: 0, x: "-50%", y: "20%", opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
        >
          <nav className="flex items-center justify-around flex-col">
            <CustomMobileLink
              toggle={handleClick}
              className="mx-4 mb-4 mt-0  text-light text-xl "
              href="#home"
              title="Accueil"
            />
            <CustomMobileLink
              toggle={handleClick}
              className="mx-4 my-4 text-light text-xl"
              href="#services"
              title="Services"
            />
            <CustomMobileLink
              toggle={handleClick}
              className="mx-4 my-4  text-light text-xl"
              href="#projects"
              title="Projets"
            />

            <CustomMobileLink
              toggle={handleClick}
              className="mx-4 mt-4 mb-12 text-light text-xl"
              href="#contact"
              title="Contact"
            />
          </nav>

          <nav
            className="flex items-center justify-center  mt-2 
      "
          >
            <motion.a
              target={"_blank"}
              className="w-6 m-1 mx-3 bg-light rounded-full dark:bg-dark sm:mx-2"
              href="https://github.com/rezozero59"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Checkout my github profile"
            >
              <GithubIcon />
            </motion.a>
            <motion.a
              target={"_blank"}
              className="w-6 m-1 mx-3 sm:mx-2"
              href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Checkout my linkedin profile"
            >
              <LinkedInIcon className="grayscale" />
            </motion.a>
          </nav>
        </motion.div>
      ) : null}
    </header>
  );
};

export default Navbar;
