import axios from 'axios';
import React, { useState, useEffect } from 'react';
import './WeatherApp.css'
import refresh from '../image/refresh.jpg';
// https://dribbble.com/shots/6193524-Weather-Icon-Set-Mostly-Sunny
import sunny from '../image/sunny.gif';

const WeatherApp = () => {
    const [currentWeather, setCurrentWeather] = useState({
        locationName: "",
        Weather: "",
        TEMP: "",
        HUMD: ""
    });

    useEffect(() => {
        fetchCurrentWeather();
    }, []);

    const fetchCurrentWeather = () => {
        console.log('fetch');
        const authorization = "CWB-52F9DCE3-BDF3-49E6-81A5-32A4AFDC7460";
        const locationName = "淡水"
        const url = `https://opendata.cwb.gov.tw/api/v1/rest/datastore/O-A0003-001?Authorization=${authorization}`;
        axios.get(url)
            .then(respose => {
                const datas = respose.data.records.location;
                const target = datas.find(data => data.locationName === locationName);
                setCurrentWeather({ 
                    locationName: target.locationName,
                    Weather: target.weatherElement.find(e => e.elementName === "Weather").elementValue,
                    TEMP: parseFloat(target.weatherElement.find(e => e.elementName === "TEMP").elementValue),
                    HUMD: `相對溼度: ${parseFloat(target.weatherElement.find(e => e.elementName === "HUMD").elementValue)*100}%`
                 })
            })
            .catch(err => {
                console.log('Error:', err);
            });
    };

    return (
        <div className="card">
            <h3>{currentWeather.locationName}</h3>
            <div>天氣{currentWeather.Weather}</div>
            <div className="main">
                <div className="temp">{currentWeather.TEMP}<span>°C</span></div>
                <img src={sunny} alt="sunny" className="sunny"/>
            </div>
            <div className="weatherElement">
                <div>{currentWeather.HUMD}</div>
                <div>降雨機率: 20%</div>
            </div>
            <div className="refresh" onClick={fetchCurrentWeather}>
                <img src={refresh} alt="refresh" className="refreshIcon"/>
            </div>     
        </div>
    );
}

export default WeatherApp; 