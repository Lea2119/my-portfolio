import React from "react";
import Navbar from "../components/Navbar";
import { motion as m, AnimatePresence } from "framer-motion";
import "../style/Projects.css";

const Projects = () => {
  const cards = [
       {
      image: require("../assets/64a17f5ff8f8e65589ff44dd--lea2119-booking-app.netlify.app_.png"),
      title: "BOOKING CLONE APP",
      tags: ["REACT", "MONGO", "EXPRESS", "NODE"],
      href: "https://64a194d8f8f8e6613cff44cc--deluxe-strudel-c69959.netlify.app/",
      git: "https://github.com/Lea2119/booking",
      description:
        "This project is a booking website clone that allows users to create an account, log in, and update their profiles. Users can search for hotels based on location and dates, view hotel details, and book rooms.",
    },
    {
      image: require("../assets/curtain-call.png"),
      title: "MOVIES THEATER WEBSITE",
      tags: ["REACT"],
      href: "https://curtain-call.vercel.app/",
      git: "https://github.com/Lea2119/curtain-call",
      description:
        "For this project, I worked on a movie theater website that aimed to provide information about each movie currently playing and enable them to book tickets. One of the key features I implemented was the integration of video trailers, allowing users to get a glimpse of the movie. I also incorporated a Stripe component for payment transactions using credit cards.",
    },
    {
      image: require("../assets/cornerstore-club-2.png"),
      title: "BOXING CLASSES WEBSITE",
      tags: ["REACT"],
      href: "https://cornerstore-club.vercel.app/",
      git: "https://github.com/Lea2119/cornerstore-club",
      description:
        "I built a website where users can buy credits to access gym classes. I created enticing offers for the credits and implemented a booking system for users to reserve classes at specified times. I also integrated videos to enhance the website's hero section.",
    },
    {
      image: require("../assets/adventure-guides.png"),
      title: "TRAVEL INFORMATIONS WEBSITE",
      tags: ["HTML", "CSS", "JS"],
      href: "https://adventure-guide.vercel.app/",
      git: "https://github.com/Lea2119/adventure-guide",
      description:
        "For this school group project, we utilized a weather API, currency converter API, and a travel and entertainment database API, so users could enter their desired destination and gain access to a range of features. We incorporated an interactive map that visually showcased the various points of interest.",
    },
  ];

  return (
    <div className="projects">
      <Navbar />
      <AnimatePresence>
        <m.main
          initial={{ y: "-100%" }}
          animate={{ y: "0%" }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          exit={{ opacity: 1 }}
        >
          <div className="cards">
            {cards.map((card, index) => (
              <m.div
                key={index}
                className="card"
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5, delay: index * 0.5 }}
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
                    <span className="github">
                      <a href={card.git} target="_blank">
                        GITHUB
                      </a>
                    </span>
                    <span className="website">
                      <a href={card.href} target="_blank">
                        WEBSITE
                      </a>
                    </span>

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
