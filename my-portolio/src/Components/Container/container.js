import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Componenets
import NavTabs from '../Nav/nav';

// Pages
import Home from '../../Pages/home';
import Portfolio from '../../Pages/portfolio';
import Contact from '../../Pages/contact';

export default function Container() {
  return (
      <Router>
        <>
          <NavTabs></NavTabs>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/portfolio" element={<Portfolio />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
          </Routes>
        </>
      </Router>
  );
}
