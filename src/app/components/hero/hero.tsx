import { motion } from "framer-motion";
import Image from "next/image";
import myself from "../../../../public/images/myself.jpeg";
import TypingText from "./typingText";
export default function Hero() {
  return (
    <section
      id="home"
      className="grid grid-cols-1 lgl:grid-cols-2 min-h-screen"
    >
      <div className="mx-auto px-8 py-10 mdl:py-24 flex flex-col justify-center gap-4 lgl:gap-8 mdl:px-10 xl:px-4">
        <motion.h3
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-lg font-titleFont tracking-wide text-textGreen"
        >
          Hi, my name is
        </motion.h3>
        <motion.h1
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="text-4xl lgl:text-6xl font-titleFont font-semibold flex flex-col"
        >
          Mehdi Kadiri
          <TypingText className="text-base" />
        </motion.h1>
        <motion.p
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-base md:max-w-[650px] text-textDark font-medium"
        >
          Highly skilled Full Stack Web Developer with a passion for building
          dynamic and user-friendly applications. Proficient in front-end and
          back-end technologies, and equipped with foundational knowledge in
          DevOps and Cloud to efficiently deploy and maintain robust web
          solutions. Enthusiastic about harnessing the power of AI to create
          innovative and intelligent applications that enhance user experiences.
          <a href="/pdf/my_resume.pdf" target="_blank" className="block">
            <span className="text-textGreen inline-flex relative cursor-pointer h-7 overflow-x-hidden group">
              Learn more in my resume
              <span
                className="absolute w-full h-[1px] bg-textGreen left-0 bottom-0 -translate-x-[100%]
            group-hover:translate-x-0 transition-transform duration-500"
              ></span>
            </span>
          </a>
        </motion.p>
        <a href="https://github.com/dakidhem">
          <motion.button
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            className="w-52 h-14 text-sm font-titleFont border border-textGreen rounded-md text-textGreen
          tracking-wide hover:bg-hoverColor duration-300"
          >
            Check out my Projects!
          </motion.button>
        </a>
      </div>
      <div className="hidden lgl:flex justify-center items-center mt-16 lgl:mt-0">
        <motion.div
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="w-1/3 h-80 relative group mx-auto"
        >
          <div className="absolute w-80 h-80 -left-6 -top-6 rounded-lg">
            <div className="w-full h-full relative z-20 flex">
              <Image
                className="rounded-lg h-full object-cover object-top"
                src={myself}
                alt="myself"
                loading="lazy"
              />
              <div
                className="inline-block absolute w-full h-80 bg-textGreen/20
              rounded-md top-0 left-0 group-hover:bg-transparent duration-300"
              ></div>
            </div>
          </div>
          <div
            className="inline-flex w-80 h-80 border-2 border-textGreen
              rounded-md group-hover:-translate-x-2 group-hover:-translate-y-2 transition-transform
              duration-300"
          ></div>
        </motion.div>
      </div>
    </section>
  );
}
