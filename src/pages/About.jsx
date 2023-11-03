import React, { useRef } from "react";
import "../styles/About.css";
import { motion } from "framer-motion";
import { Techs } from "../data/techs";

export default function About() {
  const constraintsRef = useRef(null);

  return (
    <>
      <main className="about-section">
        <div className="about">
          <h3>About</h3>
          <p>
            
          </p>
        </div>
        <div className="techs">
          <h3>Techs Used</h3>
          <motion.div className="techs-container" ref={constraintsRef}>
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
      </main>
    </>
  );
}
