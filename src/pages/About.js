import React from "react";
import Navbar from "../components/Navbar";
import { motion as m, AnimatePresence } from "framer-motion";
import { container, item, aboutText } from "./animation";
import "../style/About.css";

const About = () => {
  return (
    <div className="about">
      <Navbar />
      <m.div
        initial={{ y: "100%" }}
        animate={{ y: "0%" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        exit={{ opacity: 1 }}
        className="about-container"
      >
        <m.div
          variants={container}
          initial="hidden"
          animate="show"
          class="about-content"
        >
          <m.p variants={item} class="interest-item">
            <span>ENTHUSIASTIC</span>
          </m.p>
          <m.p variants={item} class="interest-item">
            <span>CURIOUS</span>
          </m.p>
          <m.p variants={item} class="interest-item">
            <span>LEARNER</span>
          </m.p>
        </m.div>
        <m.div
          variants={container}
          initial="hidden"
          animate="show"
          className="about-text-container"
        >
          <m.p variants={aboutText} className="about-text">
            Before retraining to become a software developer, I worked as a
            registrar in the art market for seven years. I was lucky enough to
            had the opportunity to coordinate several exhibitions both in France
            and abroad.Through these experiences, I was able to develop valuable
            skills in organization and autonomy, as well as the ability to
            collaborate effectively within a team. I quickly learned that clear
            communication was vital to the success of each project, and I also
            became adept at adapting to unexpected challenges.
          </m.p>
          <m.p variants={aboutText} className="about-text">
            I entered at ADA Tech School to learn web develoment and I could
            build projects and ideas using HTML, CSS, JavaScript, React and
            Bootstrap. I am highly motivated to learn and contribute to a team.
            I have a keen eye for detail, and I am committed to working
            collaboratively with others 🤝. Above all, I'm eager to learn and
            grow as a developer.{" "}
          </m.p>{" "}
          <m.p variants={aboutText} className="about-text">
            In my free time, I enjoy a lot looking around to learn more about
            creative developement. I'm also very interested by 3D and try to
            learn Blender, so far I did a little donut (that gave me a lot of
            joy) and I also like to draw on my trusty Ipad.{" "}
          </m.p>
        </m.div>
      </m.div>
    </div>
  );
};

export default About;
