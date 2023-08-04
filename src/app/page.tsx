"use client";
import Projects from "./components/projects/projects";
import HomeSectionSeparator from "@/app/components/utils/HomeSectionSeparator";
import Hero from "@/app/components/hero/hero";
import Experiance from "@/app/components/experiance/experiance";
import About from "@/app/components/about/about";
import Techs from "./components/techs/techs";
import { motion } from "framer-motion";
import RightBar from "./components/shared/rightBar";
import LeftBar from "./components/shared/leftBar";

export default function Home() {
  return (
    <div className="max-w-[1440px] w-full mx-auto">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="hidden xl:flex w-32 h-full fixed left-0 bottom-0"
      >
        <LeftBar />
      </motion.div>
      <Hero />
      <HomeSectionSeparator header="work" />
      <Projects />
      <HomeSectionSeparator header="stack" />
      <Techs />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="hidden xl:flex w-32 h-full fixed right-0 bottom-0"
      >
        <RightBar />
      </motion.div>
    </div>
  );
}
