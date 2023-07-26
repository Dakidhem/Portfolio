import { TbArrowNarrowRight } from "react-icons/tb";
import Avt from "../../../../public/images/avt/avt8.png";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Project({ project }) {
  return (
    <motion.div
      whileHover={{
        scale: 1.05,
        transition: { duration: 0.2 },
      }}
      className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
    >
      <a href="#">
        <Image className="rounded-t-lg" src={project.main_picture} alt="avt" />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {project.project_name}
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Here are the biggest enterprise technology acquisitions of 2021 so
          far, in reverse chronological order.
        </p>
        <a
          href="#"
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-teal-700 rounded-lg hover:bg-teal-900 focus:ring-4 focus:outline-none focus:ring-blue-300  "
        >
          Explore the project
          <TbArrowNarrowRight className="text-2xl ml-2" />
        </a>
      </div>
    </motion.div>
  );
}
