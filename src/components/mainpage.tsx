"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import React from "react";
import { Hero } from "./hero";
import { Sidebar } from "./sidebar";
import MobileCard from "./mobileComponents/card";
import MobileEducation from "./mobileComponents/education";
import MobileSkills from "./mobileComponents/skills";
import MobileProjects from "./mobileComponents/projects";
import MobileContact from "./mobileComponents/contact";

const MainPage = () => {
  useEffect(() => {
    AOS.init({
      once: false,
    });
  }, []);

  return (
    <div>
      <div className="overflow-x-hidden bg-white h-screen md:hidden">
        <MobileCard />
        <MobileEducation />
        <MobileSkills />
        <MobileProjects />
        <MobileContact />
      </div>
      <div className="hidden md:flex md:overflow-hidden md:h-screen">
        <div className="w-1/5">
          <Sidebar />
        </div>
        <div className="w-full">
          <Hero />
        </div>
      </div>
    </div>
  );
};

export default MainPage;
