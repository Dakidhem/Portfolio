import React from "react";
import { motion } from "framer-motion";
import technologies from "../../utils/technologies";
import Image from "next/image";

const Techs = () => {
  return (
    <div className="my-16 text-white" id="tools">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        transition={{ delay: 0.1 }}
        whileInView={{ y: 0, opacity: 1 }}
      >
        <h4 className=" sm:text-lg md:text-xl lg:text-2xl font-semibold text-center">
          Front-end
        </h4>
        {/* <p className=" w-[80%] md:w-full mx-auto text-xs md:text-sm lg:text-[16px] mt-2 mb-6 md:mb-8 text-center">
          I try to use the best frontend technologies to make my life easier.
        </p> */}
        <div className=" flex flex-wrap justify-center items-center md:mb-12 sm:mb-10 mb-8">
          {technologies.frontend.map((technologie) => {
            return (
              <motion.div
                key={technologie.id}
                className=" bg-[#ffffff2e]  flex items-center py-2 px-3 md:px-4 m-[5px] md:m-[6px] lg:m-[7px] rounded-lg cursor-pointer"
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.2 },
                }}
              >
                <Image
                  src={technologie.icone}
                  alt={technologie.name}
                  loading="lazy"
                  className=" w-[18px] sm:w-5 md:w-5 lg:w-6 mr-2 lg:mr-3"
                />
                <p className=" text-xs sm:text-sm md:text-[16px] lg:text-lg font-medium">
                  {technologie.name}
                </p>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        transition={{ delay: 0.1 }}
        whileInView={{ y: 0, opacity: 1 }}
      >
        <h4 className=" sm:text-lg md:text-xl lg:text-2xl font-semibold text-center">
          Back-end
        </h4>
        {/* <p className=" w-[80%] md:w-full mx-auto text-xs md:text-sm lg:text-[16px] mt-2 mb-6 md:mb-8 text-center">
          I try to use the best frontend technologies to make my life easier.
        </p> */}
        <div className=" flex flex-wrap justify-center items-center md:mb-12 sm:mb-10 mb-8">
          {technologies.backend.map((technologie) => {
            return (
              <motion.div
                key={technologie.id}
                className=" bg-[#ffffff2e]  flex items-center py-2 px-3 md:px-4 m-[5px] md:m-[6px] lg:m-[7px] rounded-lg cursor-pointer"
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.2 },
                }}
              >
                <Image
                  src={technologie.icone}
                  alt={technologie.name}
                  loading="lazy"
                  className=" w-[18px] sm:w-5 md:w-5 lg:w-6 mr-2 lg:mr-3"
                />
                <p className=" text-xs sm:text-sm md:text-[16px] lg:text-lg font-medium">
                  {technologie.name}
                </p>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        transition={{ delay: 0.1 }}
        whileInView={{ y: 0, opacity: 1 }}
      >
        <h4 className=" sm:text-lg md:text-xl lg:text-2xl font-semibold text-center">
          DevOps
        </h4>
        {/* <p className=" w-[80%] md:w-full mx-auto text-xs md:text-sm lg:text-[16px] mt-2 mb-6 md:mb-8 text-center">
          I try to use the best frontend technologies to make my life easier.
        </p> */}
        <div className=" flex flex-wrap justify-center items-center md:mb-12 sm:mb-10 mb-8">
          {technologies.devops_cloud.map((technologie) => {
            return (
              <motion.div
                key={technologie.id}
                className=" bg-[#ffffff2e]  flex items-center py-2 px-3 md:px-4 m-[5px] md:m-[6px] lg:m-[7px] rounded-lg cursor-pointer"
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.2 },
                }}
              >
                <Image
                  src={technologie.icone}
                  alt={technologie.name}
                  loading="lazy"
                  className=" w-[18px] sm:w-5 md:w-5 lg:w-6 mr-2 lg:mr-3"
                />
                <p className=" text-xs sm:text-sm md:text-[16px] lg:text-lg font-medium">
                  {technologie.name}
                </p>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        transition={{ delay: 0.1 }}
        whileInView={{ y: 0, opacity: 1 }}
      >
        <h4 className=" sm:text-lg md:text-xl lg:text-2xl font-semibold text-center">
          Aws services
        </h4>
        {/* <p className=" w-[80%] md:w-full mx-auto text-xs md:text-sm lg:text-[16px] mt-2 mb-6 md:mb-8 text-center">
          I try to use the best frontend technologies to make my life easier.
        </p> */}
        <div className=" flex flex-wrap justify-center items-center md:mb-12 sm:mb-10 mb-8">
          {technologies.aws_services.map((technologie) => {
            return (
              <motion.div
                key={technologie.id}
                className=" bg-[#ffffff2e]  flex items-center py-2 px-3 md:px-4 m-[5px] md:m-[6px] lg:m-[7px] rounded-lg cursor-pointer"
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.2 },
                }}
              >
                <Image
                  src={technologie.icone}
                  alt={technologie.name}
                  loading="lazy"
                  className=" w-[18px] sm:w-5 md:w-5 lg:w-6 mr-2 lg:mr-3"
                />
                <p className=" text-xs sm:text-sm md:text-[16px] lg:text-lg font-medium">
                  {technologie.name}
                </p>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        transition={{ delay: 0.1 }}
        whileInView={{ y: 0, opacity: 1 }}
      >
        <h4 className=" sm:text-lg md:text-xl lg:text-2xl font-semibold text-center">
          Other tools
        </h4>
        {/* <p className=" w-[80%] md:w-full mx-auto text-xs md:text-sm lg:text-[16px] mt-2 mb-6 md:mb-8 text-center">
          I try to use the best frontend technologies to make my life easier.
        </p> */}
        <div className=" flex flex-wrap justify-center items-center md:mb-12 sm:mb-10 mb-8">
          {technologies.others.map((technologie) => {
            return (
              <motion.div
                key={technologie.id}
                className=" bg-[#ffffff2e]  flex items-center py-2 px-3 md:px-4 m-[5px] md:m-[6px] lg:m-[7px] rounded-lg cursor-pointer"
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.2 },
                }}
              >
                <Image
                  src={technologie.icone}
                  alt={technologie.name}
                  loading="lazy"
                  className=" w-[18px] sm:w-5 md:w-5 lg:w-6 mr-2 lg:mr-3"
                />
                <p className=" text-xs sm:text-sm md:text-[16px] lg:text-lg font-medium">
                  {technologie.name}
                </p>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
};
export default Techs;
