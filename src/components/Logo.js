import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

let MotionLink = motion(Link);

const Logo = () => {
  return (
    <div className="flex  items-center justify-center mt-0">
      <MotionLink
        href="/#"
        className="flex items-center justify-center rounded-full w-12 h-8  bg-dark/20   text-white dark:border-2 dark:border-solid dark:border-light
    text-xl"
        whileHover={{
          backgroundColor: [
            "rgba(18, 18, 18, 0.2)",
            "rgba(131,58,180,0.2)",
            "rgba(253,29,29,0.2)",
            "rgba(252,176,69,0.2)",
            "rgba(131,58,180,0.2)",
            "rgba(18, 18, 18, 0.2)",
          ],
          transition: { duration: 1, repeat: Infinity, opacity: 0.2 },
        }}
      >
        LD
      </MotionLink>
    </div>
  );
};

export default Logo;
