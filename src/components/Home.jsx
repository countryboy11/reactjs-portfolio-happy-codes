import React from "react";
import { PROFILE_DATA } from "../utils/data";


const Home = () => {
  const { name, tagline } = PROFILE_DATA;

  return (
    <section
      className="max-w-screen-xl flex flex-col items-center justify-center gap-10 text-center pt-20 pb-24 px-6 mx-auto relative"
      id="home"
    >
      <div style={{ textAlign: 'center' }} className="flex-1 text-center md:text-left z-[1]">
        

        <h2 className="text-3xl mt-3 md:text-5xl text-black md:mt-5 font-bold">
          {name}
        </h2>

        <p className="w-full text-black text-xs font-light leading-5 my-6 lg:w-[38vw] md:text-sm md:leading-6 md:my-8">
          {tagline}
        </p>

        <button
          className="primary-btn text-white"
          onClick={() => {
            const contactEl = document.getElementById("contact");
            if (contactEl) {
              window.scrollTo({
                top: contactEl.offsetTop - 80,
                behavior: "smooth",
              });
            }
          }}
        >
          Contact Us
        </button>
      </div>
    </section>
  );
};

export default Home;
