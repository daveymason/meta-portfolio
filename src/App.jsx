import React, { useState, useEffect } from "react";
import Hero from "./components/Hero";
import Reservation from "./components/Reservation";
import Footer from "./components/Footer";
import About from "./components/About";
import "./App.css";

const App = () => {
  
  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href =
      "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css";
    
    document.head.appendChild(link);
    document.title = "Little Lemon  -  Make a Reservation!";  
    document.documentElement.lang = 'en';

    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return (
    <>
      <Hero />
      <About id={"about"} title={"About Little Lemon"} />
      <Reservation />
      <Footer />
    </>
  );
};

export default App;
