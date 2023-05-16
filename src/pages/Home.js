import React from "react";
import Navbar from "../components/Navbar";
import { motion as m, AnimatePresence } from "framer-motion";
import "../style/Home.css";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <AnimatePresence>
        <m.h1
          initial={{ y: "-100%" }}
          animate={{ y: "0%" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          exit={{ opacity: 1 }}
          className="contact-title"
        >
          <h1>HELLO, I'M LEA</h1>
        </m.h1>
        <div className="bottom-content">
          <div className="little-description">
            <h3>SOFTWARE</h3>
            <h3>DEVELOPER</h3>
            <h3>STUDENT</h3>
          </div>
          <div className="text-content">
            <h3>Driven by curiosity, fueled by code</h3>
            <h3>Driven to code, create, and innovate</h3>
            <h3>Inspired to code and drive innovation</h3>
          </div>
        </div>
      </AnimatePresence>
    </div>
  );
};

export default Home;
