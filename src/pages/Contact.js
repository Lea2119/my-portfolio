import React from "react";
import Navbar from "../components/Navbar";
import { motion as m, AnimatePresence } from "framer-motion";
import { container, item } from "../animation";
import { NavLink } from "react-router-dom"; // Import NavLink from react-router-dom
import "../style/Contact.css";

const Contact = () => {
  return (
    <div className="contact">
      <Navbar />
      <AnimatePresence>
        <main>
          <div className="animation">
            <m.h1
              initial={{ y: "100%" }}
              animate={{ y: "0%" }}
              transition={{ duration: 0.75, ease: "easeOut" }}
              exit={{ opacity: 1 }}
              className="contact-ttle"
            >
              <div className="ttle">
                <h1>Let's talk</h1>
              </div>
            </m.h1>
          </div>
          <div className="contact-content">
            <div className="find-me">
              <h4>Find me</h4>
              <h4></h4>
              <h4></h4>
            </div>
            <div className="contact-links">
              <ul variants={container} initial="hidden" animate="show">
                <li variants={item} className="pb-2">
                  Linkedin
                </li>
                <li variants={item} className="pb-2">
                  Github
                </li>
                <li variants={item} className="pb-2">
                  <NavLink to={"mailto:lea.csgn@gmail.com?x-mailer=macosx"}>
                    Email
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </main>
      </AnimatePresence>
    </div>
  );
};

export default Contact;
