import React, { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from "./Header";
import Footer from './Footer';
import About from '../pages/About';
import Home from "../pages/Home";
import NotFound from '../pages/NotFound';

export default function App() {
  const [numberTest, setNumberTest] = useState(0)

  return (
    <BrowserRouter>
      <Header numberTest={numberTest} changeValue={setNumberTest} />
      <Routes>
        <Route path="/">
          <Route index element={<Home numberQuestions={numberTest} />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}