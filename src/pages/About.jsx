import React from "react";
import "../styles/About.css";
import { useRef } from "react";
import { motion } from "framer-motion";
import { Techs } from "../data/techs";

export default function About() {
  const constraintsRef = useRef(null);
  const github = "https://github.com/OussamaElm0";

  const link = (
    <a href={github} rel="noreferrer" target="_blank" className="link">
      Oussama El Mabrouki
    </a>
  );

  return (
    <>
      <div className="about-section">
        <div className="about-app">
          <h3>About This App</h3>
          <p className="description">
            This a simple quiz application for english, contains a hundreds of
            questions. Built by {link} . The idea was com
            after I found 25 sheets of english qcm's with anwers on my father
            bookcase's.At this time I was in the middle of learning
            Express.js . After I finished learning basics of this backend
            framework and mongoose whiche is a javascript library's for mongodb
            databases's,I start to plan for this project.And after almost 1
            month we finish it.
          </p>
        </div>
        <div className="techs">
          <h3>Techs Used</h3>
          <motion.div className="container" ref={constraintsRef}>
            {Techs.map((tech) => {
              return (
                <>
                  <motion.img
                    className="item"
                    drag
                    dragConstraints={constraintsRef}
                    key={tech.name}
                    src={tech.picture}
                    alt={tech.name}
                    width={tech.width}
                    height={tech.height}
                    loading="lazy"
                  ></motion.img>
                </>
              );
            })}
          </motion.div>
        </div>
      </div>
    </>
  );
}
