"use client";
import HomeMain from "./components/home/main";
import Projects from "./components/home/projects";

export default function Home() {
  return (
    <div className="max-w-[1440px] w-full mx-auto">
      <HomeMain />
      <Projects />
    </div>
  );
}
