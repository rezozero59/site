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
    className="h-6 w-6"
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
    <AnimatePresence mode="wait">
      {isOpen && (
        <motion.div
          className="flex items-center justify-center fixed inset-0 z-9999"
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          onClick={onClose}
        >
          <motion.div
            className="flex flex-col items-center justify-center bg-white dark:bg-dark p-6 rounded-lg shadow-lg max-w-5xl w-full relative overflow-y-scroll z-9999
            "
            style={{ maxHeight: "85vh" }}
            variants={modalVariants}
            onClick={(e) => e.stopPropagation()}
          >
            <button onClick={onClose} className="absolute top-2 right-2 ">
              {closeIcon}
            </button>
            <h2 className="text-2xl font-bold mb-4 text-center">
              {project.title}
            </h2>
            <p className="text-center">{project.summary}</p>
            <Image
              className="rounded-lg mb-4"
              src={project.img}
              alt={project.title}
              width={500}
              height={300}
            />

            {project.content?.additionalText && (
              <p className="text-center">{project.content.additionalText}</p>
            )}
            {project.content?.additionalImages?.map((image, index) => (
              <Image
                key={index}
                src={image}
                alt={`Image supplémentaire ${index}`}
                width={500}
                height={300}
                className="rounded-lg mb-4"
              />
            ))}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;
