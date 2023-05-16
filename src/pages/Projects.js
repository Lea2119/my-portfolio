import React from "react";
import Navbar from "../components/Navbar";
import { motion as m, AnimatePresence } from "framer-motion";
import "../style/Projects.css";

const Projects = () => {
  const cards = [
    {
      image: require("../assets/curtain-call-2.png"),
      title: "MOVIES TICKETS BOOKING WEBSITE",
      tags: ["REACT", "FRAMER MOTION"],
      description:
        "For this project, I worked on a movie theater website that aimed to provide information about each movie currently playing and enable them to book tickets. One of the key features I implemented was the integration of video trailers, allowing users to get a glimpse of the movie. I also incorporated a Stripe component for payment transactions using credit cards.",
    },
    {
      image: require("../assets/cornerstore-club.png"),
      title: "BOXING CLASSES RESERVATIONS WEBSITE",
      tags: ["REACT", "CONTEXT API"],
      description:
        "I built a website where users can buy credits to access gym classes. I created enticing offers for the credits and implemented a booking system for users to reserve classes at specified times. I also integrated videos to enhance the website's hero section.",
    },
    {
      image: require("../assets/adventure-guides.png"),
      title: "TRAVEL INFORMATIONS WEBSITE",
      tags: ["HTML", "CSS", "JAVASCRIPT", "BOOTSTRAP"],
      description:
        "For this school group project, we utilized a weather API, currency converter API, and a travel and entertainment database API, so users could enter their desired destination and gain access to a range of features, including real-time weather forecasts, accurate currency conversions, and a list of points of interest. Each point of interest was accompanied by clickable links for detailed information. We incorporated an interactive map that visually showcased the various points of interest.",
    },
  ];

  return (
    <div className="projects">
      <Navbar />
      <AnimatePresence>
        <m.main
          initial={{ x: "-100%" }}
          animate={{ x: "0%" }}
          transition={{ duration: 0.75, ease: "easeOut" }}
          exit={{ opacity: 1 }}
        >
          <div className="cards">
            {cards.map((card, index) => (
              <m.div
                key={index}
                className="card"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.4 }}
              >
                <div className="img">
                  <img src={card.image} alt="" />
                </div>
                <div className="card-content">
                  <h6>{card.title}</h6>
                  <div className="span">
                    {card.tags.map((tag, index) => (
                      <span key={index}>{tag}</span>
                    ))}
                    <p>{card.description}</p>
                  </div>
                </div>
              </m.div>
            ))}
          </div>
        </m.main>
      </AnimatePresence>
    </div>
  );
};

export default Projects;
