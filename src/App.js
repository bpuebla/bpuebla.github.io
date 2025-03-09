import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import ServicesPage from './components/ServicesPage';
import ContactPage from './components/ContactPage';
import PostPage from './components/PostPage';
import { DarkModeProvider } from './contexts/DarkModeContext';
import "./styles/app.css";

const App = () => {
  return (
    <DarkModeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/posts/:postId" element={<PostPage />} />
          <Route path="*" element={<div>404 Not Found</div>} />
        </Routes>
      </Router>
    </DarkModeProvider>
  );
};

export default App;