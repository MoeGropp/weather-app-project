import React from "react";
import './App.css';
import Weather from "./Weather.js"

function App() {
  return (
    <div className="App">
      <div className="container">
   <h1>Weather App Project</h1>
   <Weather />
   <footer>
    This project was coded by Morgan Gropp and is {""}
   <a href="https://github.com/MoeGropp/weather-app-project.git" target="_blank">
      open sourced on GitHub 
   </a>
   </footer>
   </div>
    </div>
  );
}

export default App;
