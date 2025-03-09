import React, { useContext } from 'react';
import { DarkModeContext } from '../contexts/DarkModeContext';
import "../styles/navbar.css";

const SwitchButton = () => {
  const { isDarkMode, setIsDarkMode } = useContext(DarkModeContext);

  const handleClick = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <button className="switch-button" onClick={handleClick}>
      {isDarkMode ? "Light Mode" : "Dark Mode"}
    </button>
  );
};

export default SwitchButton;