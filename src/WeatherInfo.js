import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props){
  return(
    <div className="WeatherInfo">
    <h1>{props.data.city}</h1>
            <ul>
                <li>
                    <FormattedDate date={props.data.date} />
                </li>
                <li className="text-capitalize">
                    {props.data.description}
                </li>
            </ul>
            <div className="row mt-3">
                <div className="col-6">
                    <div>
                    <WeatherIcon code={props.data.WeatherIcon} />
                      </div>
                   <WeatherTemperature celsius={props.data.temperature} />
                     
                      
                </div>
    <div className="col-6">
        <ul>
            <li>{props.data.humidity}</li>
            <li>{props.data.wind}</li>
        </ul>
    </div>
            </div>
            </div>
           
        )
    
}