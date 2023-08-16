"use client";
import { useRef, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { MdOutlineClose } from "react-icons/md";
import {
  SlSocialLinkedin,
  SlSocialInstagram,
  SlSocialTwitter,
} from "react-icons/sl";
import { TbBrandGithub } from "react-icons/tb";

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const ref = useRef<string | any>("");
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    setShowMenu(false);

    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, "");
    const element = document.getElementById(targetId);
    const links = document.querySelectorAll(".nav-link");

    element?.scrollIntoView({
      behavior: "smooth",
    });

    links.forEach((link) => {
      link.classList.remove("active-link");
    });

    e.currentTarget.classList.add("active-link");
  };

  const handleClick = (e: any) => {
    if (e.target.contains(ref.current)) {
      setShowMenu(false);
    }
  };
  return (
    <div className="w-full shadow-navBarShadow h-20 lgh:h-[12vh] sticky top-0 z-50 bg-bodyColor px-4">
      <div className="max-w-container h-full mx-auto py-1 font-titleFont flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <a href="/" className="block text-2xl text-textGreen font-bold">
            K. Mehdi
          </a>
        </motion.div>
        <div className="hidden mdl:flex items-center gap-7">
          <nav>
            <ul className="flex text-[13px] gap-7">
              <Link
                href="#home"
                className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen
              cursor-pointer duration-300 nav-link"
                onClick={handleScroll}
              >
                <motion.li
                  initial={{ y: -10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.1 }}
                >
                  <span className="text-textGreen">01.</span>
                  Home
                </motion.li>
              </Link>

              <Link
                href="#projects"
                className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen
              cursor-pointer duration-300 nav-link"
                onClick={handleScroll}
              >
                <motion.li
                  initial={{ y: -10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.1, delay: 0.3 }}
                >
                  <span className="text-textGreen">02.</span>
                  Projects
                </motion.li>
              </Link>
              <Link
                href="#tools"
                className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen
              cursor-pointer duration-300 nav-link"
                onClick={handleScroll}
              >
                <motion.li
                  initial={{ y: -10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.1, delay: 0.4 }}
                >
                  <span className="text-textGreen">03.</span>
                  Tools
                </motion.li>
              </Link>
            </ul>
          </nav>
          <a href="/pdf/my_resume.pdf" target="_blank">
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="px-4 py-2 rounded-md text-textGreen text-[13px] border border-textGreen
            hover:bg-hoverColor duration-300"
            >
              Resume
            </motion.button>
          </a>
        </div>
        <button
          className="w-6 h-5 flex flex-col justify-between items-center mdl:hidden text-4xl text-textGreen
        cursor-pointer overflow-hidden group"
          onClick={() => setShowMenu(true)}
        >
          <span
            className="w-full h-[2px] bg-textGreen inline-flex transform group-hover:translate-x-2
          transition-all ease-in-out duration-300"
          ></span>
          <span
            className="w-full h-[2px] bg-textGreen inline-flex transform translate-x-3 
          group-hover:translate-x-0
          transition-all ease-in-out duration-300"
          ></span>
          <span
            className="w-full h-[2px] bg-textGreen inline-flex transform translate-x-1 
          group-hover:translate-x-3
          transition-all ease-in-out duration-300"
          ></span>
        </button>

        {showMenu && (
          <div
            ref={(node) => (ref.current = node)}
            className="fixed mdl:hidden top-0 right-0 w-full h-screen bg-black bg-opacity-50
            flex flex-col items-end"
            onClick={handleClick}
          >
            <motion.div
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="w-[80%] h-full overflow-y-scroll scrollbarHide bg-[#112240] flex flex-col
              items-center px-4 py-10 relative"
            >
              <MdOutlineClose
                onClick={() => setShowMenu(false)}
                className="text-3xl text-textGreen cursor-pointer hover:text-red-500 
              absolute top-4 right-4"
              />
              <div className="flex flex-col text-base gap-7">
                <ul className="flex flex-col text-base gap-7">
                  <Link
                    href="#home"
                    className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen
              cursor-pointer duration-300 nav-link"
                    onClick={handleScroll}
                  >
                    <motion.li
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.1 }}
                    >
                      <span className="text-textGreen">01. </span>
                      Home
                    </motion.li>
                  </Link>
                  <Link
                    href="#projects"
                    className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen
              cursor-pointer duration-300 nav-link"
                    onClick={handleScroll}
                  >
                    <motion.li
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.2, delay: 0.3 }}
                    >
                      <span className="text-textGreen">02. </span>
                      Projects
                    </motion.li>
                  </Link>
                  <Link
                    href="#tools"
                    className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen
              cursor-pointer duration-300 nav-link"
                    onClick={handleScroll}
                  >
                    <motion.li
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.2, delay: 0.4 }}
                    >
                      <span className="text-textGreen">03. </span>
                      Tools
                    </motion.li>
                  </Link>
                </ul>
                <a href="/pdf/my_resume.pdf" target="_blank">
                  <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6, ease: "easeIn" }}
                    className="w-32 h-10 rounded-md text-textGreen text-[13px] border border-textGreen
                    hover:bg-hoverColor duration-300"
                  >
                    Resume
                  </motion.button>
                </a>

                <div className="flex gap-4">
                  <motion.a
                    href="https://github.com/dakidhem"
                    target="_blank"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.7, ease: "easeIn" }}
                  >
                    <span
                      className="w-10 h-10 text-xl bg-bodyColor border-[1px] border-zinc-700 hover:border-textGreen 
        text-zinc-200 rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer 
        hover:-translate-y-2 transition-all duration-300"
                    >
                      <TbBrandGithub />
                    </span>
                  </motion.a>
                  <motion.a
                    href="https://www.linkedin.com/in/mehdi-kadiri-05178b1b7"
                    target="_blank"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.8, ease: "easeIn" }}
                  >
                    <span
                      className="w-10 h-10 text-xl bg-bodyColor border-[1px] border-zinc-700 hover:border-textGreen 
        text-zinc-200 rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer 
        hover:-translate-y-2 transition-all duration-300"
                    >
                      <SlSocialLinkedin />
                    </span>
                  </motion.a>
                  <motion.a
                    href="https://www.instagram.com/mehdikadiri/"
                    target="_blank"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.9, ease: "easeIn" }}
                  >
                    <span
                      className="w-10 h-10 text-xl bg-bodyColor border-[1px] border-zinc-700 hover:border-textGreen 
        text-zinc-200 rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer 
        hover:-translate-y-2 transition-all duration-300"
                    >
                      <SlSocialInstagram />
                    </span>
                  </motion.a>
                </div>
              </div>
              <motion.a
                href="mailto:m.kadiri@esi-sba.dz"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, ease: "easeIn" }}
                className="text-sm w-72 tracking-widest text-textGreen text-center mt-4"
              >
                m.kadiri@esi-sba.dz
              </motion.a>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
