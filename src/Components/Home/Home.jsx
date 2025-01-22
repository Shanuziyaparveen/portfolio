import React from "react";
import avatarImg from "../../assets/7358602-removebg-preview.png";
import TextChange from "../TextChange";

const Home = () => {
  return (
    <div className="text-white flex w-full justify-between items-start p-10 md:p-20">
      <div className="md:w-2/4 md:pt-10 ">
        <h1 className="text-xl md:text-6xl font-bold flex leading-normal tracking-tighter">
          <TextChange />
        </h1>
        <p className="text-sm md:text-2xl tracking-tight ">
        Innovating through code, designing with purpose, and building for the future.
        </p>
        <a href="mailto:shanuziyacp@gmail.com?subject=Contact%20Me&body=Hello%2C%20I%20would%20like%20to%20connect%20with%20you.">
  <button className="mt-5 md:mt-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">
    Contact Me
  </button>
</a>
      </div>
      <div>
        <img className="" src={avatarImg} alt="" />
      </div>
    </div>
  );
};

export default Home;
