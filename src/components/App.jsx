import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from "./Header";
import About from '../pages/About';
import Home from "../pages/Home";

export default function App() {
    return (
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/'>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
          </Route>
        </Routes>
      </BrowserRouter>
    );
}