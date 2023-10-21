import React, { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from "./Header";
import Footer from './Footer';
import About from '../pages/About';
import Home from "../pages/Home";
import NotFound from '../pages/NotFound';
import TestPage from '../pages/TestPage';

export default function App() {
  const [searchValue, setSearchValue] = useState('')


  return (
    <BrowserRouter>
      <Header search={searchValue} changeValue={setSearchValue} />
      <Routes>
        <Route path='/'>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="test/:id" element={<TestPage />} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}