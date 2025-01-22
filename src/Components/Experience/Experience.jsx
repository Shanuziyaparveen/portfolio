import React from "react";
import { FaCss3, FaFigma, FaHtml5, FaJs, FaReact, FaNodeJs } from "react-icons/fa";
import { SiNextdotjs, SiThreedotjs, SiVuedotjs, SiVite, SiNestjs, SiExpress, SiTypescript } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { FaBriefcase, FaUniversity } from "react-icons/fa";

const Experience = () => {
  return (
    <div id="Experience" className="p-10 md:p-24 text-white">
      {/* Heading for the Section */}
      <h1 className="text-2xl md:text-4xl font-bold text-white mb-8">My Journey</h1>

      {/* Section for Technical Skills */}
      <div className="mb-12">
        <h2 className="text-xl font-semibold text-white mb-6">Technical Skills</h2>
        <div className="flex flex-wrap gap-8 justify-center">
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaHtml5 color="#E34F26" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaCss3 color="#1572B6" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaReact color="#61DAFB" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaJs color="#F7DF1E" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaFigma color="#F24E1E" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiMongodb color="#47A248" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiNextdotjs color="black" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiThreedotjs color="#000000" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiVuedotjs color="#42b883" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiVite color="#646CFF" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaNodeJs color="#68A063" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiExpress color="black" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiNestjs color="#E0234E" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiTypescript color="#3178C6" size={50} />
          </span>
        </div>
      </div>

      {/* Section for Experience Timeline */}
      <div>
        <h2 className="text-xl font-semibold text-white mb-6">Experience & Education</h2>
        
        {/* Timeline Wrapper */}
        <div className="flex flex-col gap-8">
          {/* Full Stack Developer Intern */}
          <div className="flex items-start gap-6 relative">
            {/* Icon */}
            <span className="bg-gray-800 p-3 rounded-full">
              <FaBriefcase color="#FACC15" size={30} />
            </span>
            {/* Text Content */}
            <div className="text-white">
              <h2 className="text-lg font-semibold leading-tight">Full Stack Developer Intern, Brototype</h2>
              <p className="text-sm leading-tight font-thin">July 2024 - Present</p>
            </div>
            {/* Timeline Line */}
            <div className="absolute left-[50%] top-0 h-full border-l-2 border-dotted border-white" />
          </div>

          {/* B.Tech in Computer Science */}
          <div className="flex items-start gap-6 relative">
            {/* Icon for College */}
            <span className="bg-gray-800 p-3 rounded-full">
              <FaUniversity color="#FACC15" size={30} />
            </span>
            {/* Text Content for College */}
            <div className="text-white">
              <h2 className="text-lg font-semibold leading-tight">B.Tech in Computer Science Engineering</h2>
              <p className="text-sm leading-tight font-thin">2015 - 2019 | APJ Abdul Kalam Technological University</p>
            </div>
            {/* Timeline Line */}
            <div className="absolute left-[50%] top-0 h-full border-l-2 border-dotted border-white" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
