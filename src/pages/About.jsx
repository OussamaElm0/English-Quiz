import React from 'react';
import "../styles/About.css";
import { useRef } from "react";
import { motion } from "framer-motion";
import { Techs } from '../data/tehs';


export default function About() {
    const constraintsRef = useRef(null);

    return (
      <>
        <div className="about-section">
          <div className="about-app">
            <h3>About This App</h3>
            <p className="description">
              This a simple quiz application for english, contains a hundreds of
              questions. Built by me (Oussama El Mabrouki) and also my friend
              (Anouar Semmid) helpt me on building the contact page and I thank
              him. The idea was come after I found 25 sheets of english qcm's
              with anwers on my father bookcase's.At this time I was in the
              midle of learning Express.js.After I finished learning basics of
              this backend framework and mongoose wiche is a javascript
              library's for mongodb databases's,I start to plan for this
              project.And after almost 1 month we finish it.
            </p>
          </div>
          <div className="techs">
            <h3>Techs Used</h3>
            <motion.div className="container" ref={constraintsRef}>
                {Techs.map(tech => {
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
                          loading='lazy'
                        >
                        </motion.img>
                      </>
                    );
                })}
            </motion.div>
          </div>
        </div>
      </>
    );
}