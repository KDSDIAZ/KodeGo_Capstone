import React, { useState } from "react";

function Darkmode() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark-mode");
  };

  return (
    <div>
      <button onClick={toggleDarkMode}>{darkMode ? "Disable" : "Enable"} Dark Mode</button>
      <h1>{darkMode ? "Dark" : "Light"} Mode</h1>
    </div>
  );
}

export default Darkmode;
