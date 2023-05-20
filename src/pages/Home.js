import React from "react";
import Navbar from "../components/Navbar";
import { motion as m, AnimatePresence } from "framer-motion";
import { container, item } from "./animation";
import "../style/Home.css";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <AnimatePresence>
        <m.h1
          initial={{ y: "-100%" }}
          animate={{ y: "0%" }}
          transition={{ duration: 1, ease: "easeOut" }}
          exit={{ opacity: 1 }}
          className="contact-title"
        >
          <h1>HELLO, I'M LEA</h1>
        </m.h1>
        <div className="bottom-content">
          <m.div
            variants={container}
            initial="hidden"
            animate="show"
            className="little-description"
          >
            <m.h3 variants={item} custom={1}>
              SOFTWARE
            </m.h3>
            <m.h3 variants={item} custom={2}>
              DEVELOPER
            </m.h3>
            <m.h3 variants={item} custom={3}>
              STUDENT
            </m.h3>
          </m.div>
          <m.div
            variants={container}
            initial="hidden"
            animate="show"
            className="text-content"
          >
            <m.h3 variants={item} custom={4}>
              Curious & Committed to Learn
            </m.h3>
            <m.h3 variants={item} custom={5}>
              Driven to Create & Embrace Challenges
            </m.h3>
            <m.h3 variants={item} custom={6}>
              Inspired to Grow & Collaborate
            </m.h3>
          </m.div>
        </div>
      </AnimatePresence>
    </div>
  );
};

export default Home;
