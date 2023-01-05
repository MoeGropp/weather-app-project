import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";

export default function Weather(props){
    const [weatherData, setWeatherData] =useState({ready: false});
    
    function handleResponse(response){
        console.log(response.data);
        setWeatherData({
            ready:true,
            temperature: response.data.main.temp,
            date:"Monday 10:00",
            humidity: response.data.main.humidity,
            wind: response.data.main.wind.speed,
            city:response.data.name,
            iconUrl:"https://ssl.gstatic.com/onebox/weather/64/sunny.png",
            description:response.data.weather[0].description
        })
        
    }
    if (weatherData.ready){
        return(
            <div className="Weather">
                <form>
                <div className="row">
                <div className="col-9">
                
                    <input type="search" placeholder="Enter a city..." className="form-control" autoFocus="on"/>
                    </div>
                    <div className="col-3">
                    <input type="submit" value="Search" className="btn btn-primary w-100"/>
                
                </div>
                </div>
                </form>
            <h1>{weatherData.city}</h1>
            <ul>
                <li>{weatherData.date}</li>
                <li className="text-capitalize">{weatherData.description}</li>
            </ul>
            <div className="row mt-3">
                <div className="col-6">
                    
                  <img src="{weatherData.iconUrl}" alt="{weatherData.description}"/>
                   
                      <span className="temperature">{Math.round(weatherData.temperature)}</span>
                      <span className="unit">℉</span>
                      
                </div>
    <div className="col-6">
        <ul>
            <li>Precipitation: 5%</li>
            <li>{weatherData.humidity}</li>
            <li>{weatherData.wind}</li>
        </ul>
    </div>
            </div>
            </div>
        )
    }else{
    
    const apiKey ="24ea4545b6bf0dfca0006b86o72e23at";
    let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`
    axios.get(apiUrl).then(handleResponse);


    return "Loading...";
    }
}