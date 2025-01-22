import React from "react";
import ProjectCard from "./ProjectCard";

// Add images for each project (replace with your actual image paths)
import ecommerceBanner from "../../assets/ecommerce-banner.jpg";
import amazonBanner from "../../assets/amazon-banner.jpg";
import netflixBanner from "../../assets/netflix-banner.jpg";

const Projects = () => {
  return (
    <div id="Projects" className="p-10 md:p-24 text-white">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Projects</h1>
      <div className="py-12 px-8 flex flex-wrap gap-5">
        <ProjectCard
          title="Ecommerce Website"
          main="This is an e-commerce website built using Node.js, Express.js, and EJS for server-side rendering. The application features a MongoDB database for managing product and user data, providing a dynamic and responsive shopping experience."
          demoLink="https://www.bootsonline.xyz/"
          sourceCodeLink="https://github.com/Shanuziyaparveen/ecommerce-website"
          bannerImg={ecommerceBanner} // Pass the banner image here
        />
        <ProjectCard
          title="Amazon Clone"
          main="This is an Amazon clone created using HTML, CSS, and JavaScript for the frontend. It replicates the core functionalities of an e-commerce platform, including product listings and a shopping cart."
          demoLink="https://amazon-clone-demo.com/" // Add demo link if available
          sourceCodeLink="https://github.com/Shanuziyaparveen/amazoncloning.github.io"
          bannerImg={amazonBanner} // Pass the banner image here
        />
        <ProjectCard
          title="Netflix Clone"
          main="This is a Netflix clone created using HTML, CSS, and JavaScript for the frontend. It mimics the design and features of the Netflix platform, including a user-friendly interface and responsive layouts."
          demoLink="https://netflix-clone-demo.com/" // Add demo link if available
          sourceCodeLink="https://github.com/Shanuziyaparveen/netflix-clone"
          bannerImg={netflixBanner} // Pass the banner image here
        />
      </div>
    </div>
  );
};

export default Projects;
