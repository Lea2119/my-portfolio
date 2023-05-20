import React from "react";
import Navbar from "../components/Navbar";
import { motion as m, AnimatePresence } from "framer-motion";
import { container, item } from "./animation";
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
              transition={{ duration: 0.8, ease: "easeOut" }}
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
              <m.h4
                initial="hidden"
                animate="show"
                variants={item}
                className="pb-1"
              >
                Find me on | by
              </m.h4>
            </div>

            <div className="contact-links">
              <m.ul
                initial="hidden"
                animate="show"
                className="pb-2"
                variants={container}
              >
                <m.li variants={item} className="pb-2">
                  <m.a
                    variants={item}
                    href="https://www.linkedin.com/in/l%C3%A9a-cassegrain-9b4b1b270/"
                    target="_blank"
                  >
                    Linkedin
                  </m.a>
                </m.li>
                <m.li variants={item} className="pb-2">
                  <m.a
                    variants={item}
                    href="https://github.com/Lea2119"
                    target="_blank"
                  >
                    Github
                  </m.a>
                </m.li>
                <m.li variants={item} className="pb-2">
                  <m.a
                    variants={item}
                    href="mailto:lea.csgn@gmail.com?x-mailer=macosx"
                    target="_blank"
                  >
                    Email
                  </m.a>
                </m.li>
              </m.ul>
            </div>
          </div>
        </main>
      </AnimatePresence>
    </div>
  );
};

export default Contact;
