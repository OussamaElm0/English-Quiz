import React from 'react'
import { Link } from 'react-router-dom';
import "../styles/Header.css"

export default function Header() {
    return (
      <header>
        <nav className="navbar">
            <Link to="home" className='nav-link'>
                <img src="./assets/logo.png" alt="logo" className="navbar-brand" width={100} height={100} />
            </Link>
            <Link to="about" className='nav-link'>
                About us
            </Link>
            <Link to="profil" className='nav-link'>
                Profile
            </Link>
        </nav>
      </header>
    );
}