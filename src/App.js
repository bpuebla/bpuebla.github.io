import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import ServicesPage from './components/ServicesPage';
import ContactPage from './components/ContactPage';
import PostPage from './components/PostPage';
import "./styles/home.css";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/:postId" element={<PostPage />} />
      </Routes>
    </Router>
  );
};

export default App;