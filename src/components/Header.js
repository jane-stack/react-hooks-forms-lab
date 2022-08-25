import React from "react";

// Passing in the light/dark mode toggle state variable to be accessed
// We also want to access the handleDarkModeClick function by passing in onDarkModeClick
function Header({ isDarkMode, onDarkModeClick }) {
  return (
    <header>
      <h2>Shopster</h2>
      <button onClick={onDarkModeClick}>
        {isDarkMode ? "Dark" : "Light"} Mode
      </button>
    </header>
  );
}

export default Header;
