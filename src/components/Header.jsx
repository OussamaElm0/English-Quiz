import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";

export default function Header(props) {
  const {numberTest, changeValue} = props
  const [num, setNum] = useState(0)

  const handleClick = (e) => {
    e.preventDefault(e)
    changeValue(num)
  }
  const handleChange = (e) => {
    const {target: {value}} = e
    setNum(value)
  }

  return (
    <header>
      <nav class="navbar navbar-expand-lg bg-body-tertiary ">
        <div class="container-fluid">
          <Link class="navbar-brand" to="about">
            <img src="./assets/logo.png" className="logo" width={100} />
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link class="nav-link" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="about">
                  About
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link " to="contact">
                  Contact Us
                </Link>
              </li>
            </ul>
            <form class="d-flex" role="search">
              <input
                class="form-control me-2"
                type="number"
                value={num}
                onChange={(e) => handleChange(e)}
                min={0}
              />
              <button class="btn" type="submit" onClick={(e) => handleClick(e)}>
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </header>
  );
}
