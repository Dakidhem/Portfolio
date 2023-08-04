/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";
import projects_info from "@/app/utils/projects_info";
import Image from "next/image";

import { TbBrandGithub } from "react-icons/tb";
import { RxOpenInNewWindow } from "react-icons/rx";

const ProjectsSection = () => {
  return (
    <section id="projects" className="max-w-container mx-auto lgl:px-20 py-24">
      <motion.div
        className="w-full flex flex-col items-center justify-center gap-28 mt-10"
        initial={{ y: 20, opacity: 0 }}
        transition={{ delay: 0.1 }}
        whileInView={{ y: 0, opacity: 1 }}
      >
        {projects_info.map((project) => {
          return (
            <div
              key={project.project_id}
              className={`flex flex-col gap-6 ${
                project.project_id % 2 === 0
                  ? "xl:flex-row-reverse"
                  : "xl:flex-row"
              }`}
            >
              <a
                href="https://react-dbmovies.vercel.app/"
                target="_blank"
                className="w-full xl:w-1/2 h-auto relative group"
                title="Open live project"
              >
                <div>
                  <Image
                    src={project.main_picture}
                    alt="Project 1"
                    className="relative w-full h-full object-contain rounded-md"
                    loading="lazy"
                  />
                </div>
              </a>
              <div
                className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between
            items-end text-right xl:-ml-16 z-10"
              >
                <div>
                  <p className="font-titleFont text-textGreen text-sm tracking-wide">
                    {project.project_type}
                  </p>
                  <h3 className="text-2xl font-bold">{project.project_name}</h3>
                </div>
                <p className="bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md">
                  A TMDB-inspired application. Search for movies, TV shows, or
                  actors, rate them, create lists for yourself and friends, and
                  discover new things about the world of cinema.
                </p>
                <ul
                  className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2
              md:gap-5 justify-between text-textDark"
                >
                  {project.tools.map((tool, index) => {
                    return <li key={index}>{tool}</li>;
                  })}
                </ul>
                <div className="text-2xl flex gap-4">
                  <a
                    href="https://github.com/denvudd/react-dbmovies.github.io"
                    className="hover:text-textGreen duration-300"
                    target="_blank"
                    title="Open GitHub Repo"
                  >
                    <TbBrandGithub />
                  </a>
                  <a
                    href="https://react-dbmovies.vercel.app/"
                    className="hover:text-textGreen duration-300"
                    target="_blank"
                    title="Open live project"
                  >
                    <RxOpenInNewWindow />
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </motion.div>
    </section>
  );
};

export default ProjectsSection;
