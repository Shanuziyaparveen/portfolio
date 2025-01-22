import React from "react";
import AboutImg from "../../assets/7358653-removebg-preview.png";
import { IoArrowForward } from "react-icons/io5";
const About = () => {
  return (
    <div
      id="About"
      className="text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12"
    >
      <div>
        <h2 className="text-2xl md:text-4xl font-bold">About</h2>
        <div className="md:flex flex-wrap flex-col md:flex-row items-center">
          <img className="md:h-80" src={AboutImg} alt="About img" />

          <ul>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />

              <span className="w-96">
              <h1 className="text-xl md:text-2xl font-semibold leading-normal">
  Frontend Developer
</h1>
<p className="text-sm md:text-md leading-tight">
  Skilled in building dynamic, responsive web applications with expertise in HTML, CSS, JavaScript, and modern frameworks like React, Vue.js, and Next.js. Passionate about creating seamless user experiences, solving complex problems, and staying updated with new technologies to keep my skills sharp and relevant.
</p>

</span>

            </div>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />

              <span className="w-96">
             
              <h1 className="text-xl md:text-2xl font-semibold leading-normal">
  Backend Developer
</h1>
<p className="text-sm md:text-md leading-tight">
 skilled in building scalable, efficient backend systems with Node.js, Express.js, and TypeScript. Proficient in databases like MongoDB, MySQL, and PostgreSQL, and skilled in designing secure APIs. Focused on performance optimization, containerization with Docker, and leveraging modern cloud platforms like AWS and Azure to build robust applications.
</p>
              </span>
            </div>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />

              <span className="w-96">
              <h1 className="text-xl md:text-2xl font-semibold leading-normal">
  Full Stack Developer
</h1>
<p className="text-sm md:text-md leading-tight">
  A versatile developer skilled in both frontend and backend technologies. On the frontend, I'm proficient in HTML, CSS, JavaScript, React, Vue.js, and Next.js, creating dynamic, responsive applications. On the backend, I specialize in Node.js, Express.js, and TypeScript, with experience in databases like MongoDB, MySQL, and PostgreSQL. Passionate about building scalable, high-performance web applications and APIs, ensuring security and seamless user experiences.
</p>

           

              </span>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
