import React from "react";
import { ABOUT_US_DATA } from "../utils/data";
import PROFILE_PIC from "../assets/about1.jpg";

const AboutUs = () => {
  return (
    <section className="max-w-screen-xl px-6 mx-auto py-10 md:py-24" id="about">
      <h5 className="text-primary text-2xl md:text-4xl font-semibold text-center md:text-center pb-10 md:pb-14">
        ABOUT US
      </h5>

      <div className="grid grid-cols-1 md:grid-cols-3 md:gap-4">
        <img
          className="w-full h-80 object-cover rounded-lg mb-4 md:mb-0"
          src={PROFILE_PIC}
          alt="team photo"
        />

        <div className="col-span-2 bg-gradient-to-br from-blue-950 to-slate-900 rounded-lg border border-blue-800/40 p-6">
          <p className="text-blue-50 text-xs md:text-[13px] font-normal text-justify leading-6">
            {ABOUT_US_DATA.introduction} {ABOUT_US_DATA.background}{" "}
            {ABOUT_US_DATA.interests}
          </p>

          <br />

          <p className="text-blue-50 text-xs md:text-[13px] font-normal text-justify leading-6">
            {ABOUT_US_DATA.skills} {ABOUT_US_DATA.careerGoals}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-5">
        <InfoCard
          count={ABOUT_US_DATA.stats.yearsOfExperience}
          label="Combined Years of Experience"
        />

        <InfoCard
          count={ABOUT_US_DATA.stats.numberOfProjects}
          label="Projects Delivered"
        />

        <InfoCard
          count={ABOUT_US_DATA.stats.certificationsEarned}
          label="Certifications Across the Team"
        />
      </div>
    </section>
  );
};

const InfoCard = ({ label, count }) => {
  return (
    <div className="bg-gradient-to-br from-blue-950 to-slate-900 rounded-lg border border-blue-800/40 px-4 md:px-6 py-3">
      <h6 className="text-primary text-xl md:text-2xl font-semibold">
        {count}
      </h6>
      <span className="text-blue-300 text-xs md:text-sm font-thin">
        {label}
      </span>
    </div>
  );
};

export default AboutUs;
