import axios from 'axios';
import React, { useState, useEffect } from 'react';
import './WeatherApp.css'
import refresh from '../image/refresh.jpg';
// https://dribbble.com/shots/6193524-Weather-Icon-Set-Mostly-Sunny
import sunny from '../image/sunny.gif';

const WeatherApp = () => {
    const authorization = "CWB-52F9DCE3-BDF3-49E6-81A5-32A4AFDC7460";
    const [currentWeather, setCurrentWeather] = useState({
        locationName: "",
        temp: "", // 溫度
        humd: "", // 相對濕度
        chanceOfRain: "", //降雨機率
        description: ""
    });

    useEffect(() => {
        fetchCurrentWeather();
        fetchWeatherPrediction();
    }, []);

    const fetchCurrentWeather = () => {
        console.log('fetch current weather');
        const url = `https://opendata.cwb.gov.tw/api/v1/rest/datastore/O-A0003-001?Authorization=${authorization}`;
        axios.get(url)
            .then(respose => {
                const locationName = "淡水";
                const target = respose.data.records.location.find(data => data.locationName === locationName);
                const temp = parseFloat(target.weatherElement.find(e => e.elementName === "TEMP").elementValue);
                const humd = parseFloat(target.weatherElement.find(e => e.elementName === "HUMD").elementValue)*100;
                setCurrentWeather(prevState => {
                    return {
                        ...prevState,
                        locationName,
                        temp,
                        humd
                    }
                });
            })
            .catch(err => {
                console.log('Error:', err);
            });
    };

    const fetchWeatherPrediction = () => {
        console.log('fetch weather prediction');
        const url = `https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=${authorization}`;
        axios.get(url)
            .then(response => {
                const locationName = "新北市";
                const data = response.data.records.location.find(obj => obj.locationName === locationName);
                const description = data.weatherElement.find(e => e.elementName === 'Wx').time[0].parameter.parameterName;
                const chanceOfRain = data.weatherElement.find(e => e.elementName === 'PoP').time[0].parameter.parameterName;
                setCurrentWeather(prevState => {
                    return {
                        ...prevState,
                        description,
                        chanceOfRain
                    }
                });
            })
            .catch(err => {
                console.log(err);
            });
    }

    return (
        <div className="card">
            <h3>{currentWeather.locationName}</h3>
            <div>{currentWeather.description}</div>
            <div className="main">
                <div className="temp">{currentWeather.temp}<span>°C</span></div>
                <img src={sunny} alt="sunny" className="sunny"/>
            </div>
            <div className="weatherElement">
                <div>相對溼度: {currentWeather.humd}%</div>
                <div>降雨機率: {currentWeather.chanceOfRain}%</div>
            </div>
            <div className="refresh" onClick={() => {
                fetchCurrentWeather();
                fetchWeatherPrediction();
            }}>
                <img src={refresh} alt="refresh" className="refreshIcon"/>
            </div>   
        </div>
    );
}

export default WeatherApp; 