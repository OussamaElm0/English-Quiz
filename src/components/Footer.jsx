import React from 'react';
import { Link } from "react-router-dom";
import "../styles/Footer.css";

export default function Footer() {
    var currentDate = new Date().getFullYear();
    var mail = "oussama.elmabrouki0@gmail.com";
    var phone = "+212610373853";
    var whatsapp = "https://wa.me/212610373853";
    var linkdin = "https://www.linkedin.com/in/oussama-el-mabrouki-81594b283/";
    var github = "https://github.com/OussamaElm0";
    
    return (
      <footer className="bg-body-tertiary">
        <div className="column column-1">
          <img src="./assets/logo.png" width={80} alt="My Quiz Logo" />
          {String.fromCodePoint(169)} {currentDate}
        </div>
        <div className="column column-2">
          <ul>
            <li>
              <Link to="/" className="footer-link">
                Home
              </Link>
            </li>
            <li>
              <Link to="about" className="footer-link">
                About
              </Link>
            </li>
            <li>
              <Link to="contact" className="footer-link">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
        <div className="column column-3">
          <ul>
            <li>
              <a
                href={`mailto:${mail}`}
                target="_blank"
                className="footer-link"
              >
                Email
              </a>
            </li>
            <li>
              <a href={`tel:${phone}`} target="_blank" className="footer-link">
                Phone
              </a>
            </li>
            <li>
              <a href={whatsapp} target="_blank" className="footer-link">
                Whatsapp
              </a>
            </li>
            <li>
              <a href={linkdin} target="_blank" className="footer-link">
                Linkdin
              </a>
            </li>
            <li>
              <a href={github} target="_blank" className="footer-link">
                Github
              </a>
            </li>
          </ul>
        </div>
      </footer>
    );
}