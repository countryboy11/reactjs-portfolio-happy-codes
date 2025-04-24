import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Team from "./components/Team";
import Projects from "./components/Projects";
import AboutUs from "./components/AboutUs";
import Contact from "./components/Contact";
import Footer from "./components/Footer";


const App = () => {
  return (
    <div className="bg-[#FFF7F7]">
      <Navbar />
      <Home />
      <Team />
      <Projects />
      <AboutUs />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
