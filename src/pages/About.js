import React from "react";
import Navbar from "../components/Navbar";
import { motion as m, AnimatePresence } from "framer-motion";
import "../style/About.css";

const About = () => {
  return (
    <div className="about">
      <Navbar />
      <m.div
        initial={{ y: "100%" }}
        animate={{ y: "0%" }}
        transition={{ duration: 0.75, ease: "easeOut" }}
        exit={{ opacity: 1 }}
        className="about-container"
      >
        <div class="about-content">
          <p class="interest-item">
            <span>ENTHUSIASTIC</span>
          </p>
          <p class="interest-item">
            <span>CURIOUS</span>
          </p>
          <p class="interest-item">
            <span>LEARNER</span>
          </p>
        </div>

        <p class="about-text">
          {" "}
          Before retraining to become a software developer, I worked as a
          registrar in the art market for seven years. I was lucky enough to had
          the opportunity to coordinate several exhibitions both in France and
          abroad. Through these experiences, I was able to develop valuable
          skills in organization and autonomy, as well as the ability to
          collaborate effectively within a team. I quickly learned that clear
          communication was vital to the success of each project, and I also
          became adept at adapting to unexpected challenges. I entered at ADA
          Tech School to learn web develoment and I could build projects and
          ideas using HTML, CSS, JavaScript, React and Bootstrap. I am highly
          motivated to learn and contribute to a team. I have a keen eye for
          detail, and I am committed to working collaboratively with others 🤝.
          Above all, I'm eager to learn and grow as a developer. In my free
          time, I enjoy a lot looking around to learn more about creative
          developement. I'm also very interested by 3D and try to learn some
          Blender on my freetime, so far I did a little{" "}
          <span id="image-tooltip" title="donut">
            donut
          </span>{" "}
          (that gave me a lot of joy) and I also like to  <span id="image-tooltip-1" title="drawing">
            draw
          </span> on my trusty Ipad.{" "}
        </p>
      </m.div>
    </div>
  );
};

export default About;
