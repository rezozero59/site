import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const backdropVariants = {
  visible: { opacity: 1, backdropFilter: "blur(4px)" },
  hidden: { opacity: 0, backdropFilter: "blur(0px)" },
};

const modalVariants = {
  hidden: { scale: 0.5, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.3, ease: "easeInOut" },
  },
};

const closeIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-8 w-8 mx-4 border-2 border-dark dark:border-light rounded-full p-1 hover:bg-dark dark:hover:bg-light hover:text-light dark:hover:text-dark transition-colors duration-300 ease-in-out"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
);

const ProjectModal = ({ isOpen, onClose, project }) => {
  return (
    console.log(project),
    (
      <AnimatePresence mode="wait">
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 "
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            onClick={onClose}
          >
            <motion.div
              className="overflow-y-auto flex flex-col items-center bg-white dark:bg-dark p-6 rounded-lg shadow-lg relative "
              style={{ maxHeight: "80vh", maxWidth: "90vw" }}
              variants={modalVariants}
              onClick={(e) => e.stopPropagation()}
            >
              <button onClick={onClose} className="absolute top-2 right-2 ">
                {closeIcon}
              </button>
              <h2 className="text-3xl font-bold mb-4 text-center px-4">
                {project.title}
              </h2>
              <p className="text-center ">{project.summary}</p>
              <Image
                className="rounded-lg my-4"
                src={project.img}
                alt={project.title}
                width={500}
                height={300}
              />

              {project.content?.additionalText && (
                <p className=" mx-48 lg:mx-32 md:mx-16 sm:mx-8 my-8">
                  {project.content.additionalText}
                </p>
              )}
              {project.content?.additionalImages?.map((image, index) => (
                <Image
                  key={index}
                  src={image}
                  alt={`Image supplémentaire ${index}`}
                  width={500}
                  height={300}
                  className="rounded-lg m-4"
                />
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    )
  );
};

export default ProjectModal;
