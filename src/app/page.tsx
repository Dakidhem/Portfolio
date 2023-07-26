"use client";
import Projects from "./components/projects/projects";
import HomeSectionSeparator from "@/app/components/utils/HomeSectionSeparator";
import Hero from "@/app/components/hero/hero";
import Experiance from "@/app/components/experiance/experiance";
import About from "@/app/components/about/about";
import Techs from "./components/techs/techs";

export default function Home() {
  return (
    <div className="max-w-[1440px] w-full mx-auto">
      <Hero />
      <HomeSectionSeparator header="work" />
      <Projects />
      <HomeSectionSeparator header="stack" />
      <Techs />
    </div>
  );
}
