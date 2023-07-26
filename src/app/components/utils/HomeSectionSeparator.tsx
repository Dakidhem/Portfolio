import { motion } from "framer-motion";
import classNames from "classnames";

const wrapper = {
  initial: {
    transition: {
      ease: "ease-out",
      staggerChildren: 0.2,
    },
  },
  whileInView: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVertical = {
  initial: {
    height: 0,
    transition: {
      delay: 3,
    },
  },
  whileInView: {
    height: 132,
  },
};

const itemHorizontal = {
  initial: {
    width: 0,
  },
  whileInView: {
    width: "100%",
    transition: {
      delay: 0.2,
      duration: 1,
    },
  },
};

const headerVariant = {
  initial: {
    opacity: 0,
  },
  whileInView: {
    opacity: 1,
  },
};

const HomeSectionSeparator = ({ header }: { header: string }) => {
  return (
    <motion.div
      initial="initial"
      whileInView="whileInView"
      variants={wrapper}
      viewport={{ once: false, margin: "0px 0px -250px 0px" }}
      className="h-[300px] -mb-[50px] flex flex-col items-center justify-start"
    >
      <motion.span
        variants={itemVertical}
        className={classNames(
          "w-[3px] bg-slate-400 dark:bg-gradient-to-b rounded"
        )}
      />
      <div className="w-full flex justify-center items-center">
        <motion.span
          variants={itemHorizontal}
          className={classNames("h-[1px] bg-gray-200 dark:bg-gray-700 block")}
        />
        <motion.span
          variants={headerVariant}
          className={classNames(
            "block w-fit whitespace-nowrap text-black/75 dark:text-slate-300 font-bold mx-2"
          )}
        >
          {(header === "work" && "MY WORK") ||
            (header === "about" && "ABOUT ME") ||
            (header === "stack" && "MY TECH STACKS") ||
            (header === "contact" && "CONTACT ME")}
        </motion.span>
        <motion.span
          variants={itemHorizontal}
          className={classNames("h-[1px] bg-gray-200 dark:bg-gray-700 block")}
        />
      </div>

      <motion.span
        variants={itemVertical}
        className={classNames(
          "w-[3px] rounded bg-gradient-to-b from-slate-500 to-white"
        )}
      />
    </motion.div>
  );
};

export default HomeSectionSeparator;
