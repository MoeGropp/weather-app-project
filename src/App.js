import React from "react";
import "./App.css";
import Weather from "./Weather.js"

export default function App() {
  return (
    <div className="App">
      <div className="container">
   <Weather  defaultCity="New York"/>
   <footer>
    This project was coded by Morgan Gropp and is {""}
   <a href="https://github.com/MoeGropp/weather-app-project.git" rel="noopener noreferrer" target="_blank">
      open sourced on GitHub 
   </a>
   </footer>
   </div>
    </div>
  );
}


