import React, { useState } from "react";
import { Link } from "react-router-dom";
import { VscSearch } from "react-icons/vsc";
import "../styles/Header.css";

export default function Header(props) {
  const { changeValue, initScore } = props
  const [num, setNum] = useState(0)

  const handleClick = (e) => {
    e.preventDefault(e)
    changeValue(num)
    setNum(0)
    initScore(0)
  }
  const handleChange = (e) => {
    const {target: {value}} = e
    setNum(value)
  }

  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-body-tertiary ">
        <div className="container-fluid">
          <Link className="navbar-brand" to="about">
            <img src="./assets/logo.png" className="logo" width={100} />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " to="contact">
                  Contact Us
                </Link>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="number"
                value={num}
                onChange={(e) => handleChange(e)}
                min={0}
              />
              <button className="btn btn-search" type="submit" onClick={(e) => handleClick(e)}>
                <VscSearch />
              </button>
            </form>
          </div>
        </div>
      </nav>
    </header>
  );
}
