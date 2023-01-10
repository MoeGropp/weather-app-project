import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props){

    function handleResponse(response){}

    let apiKey = "2374f5250bbb20df96c66eff4adc24f0";
    let lon = props.corrdinates.lon;
    let lat = props.corrdinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}`;
    
    axios.get(apiUrl).then(handleResponse);
    return (
        <div className="WeatherForecast">
            <div className="row">
                <div className="col">
                  <div className="WeatherForecast-day">Thu</div>
                 
                   <WeatherIcon code="01d" size={36}/> 
                    
                 <div className="WeatherForecast-temperatures">
                    <span className="WeatherForecast-max">19°</span>
                    <span className="WeatherForecast-min">10°</span>
                </div>  
                </div>
            </div>
        </div>
    )
}