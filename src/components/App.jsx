import React, { useState, createContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Header from "./Header";
import Footer from "./Footer";
import About from "../pages/About";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";

export const NumberQuestionsContext = createContext();
export const Score = createContext()

export default function App() {
  const [numberTest, setNumberTest] = useState(0);
  const [score, setScore] = useState(0)

  return (
    <NumberQuestionsContext.Provider value={numberTest}>
      <Score.Provider value={score}>
        <BrowserRouter>
          <Header changeValue={setNumberTest} initScore={setScore} />
          <Routes>
            <Route path="/" element={<Home numberQuestions={numberTest} />} />
            <Route path="about" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </Score.Provider>
    </NumberQuestionsContext.Provider>
  );
}
