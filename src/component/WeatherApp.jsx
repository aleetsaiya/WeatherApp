import axios from 'axios';
import React, { useState, useEffect } from 'react';
import './WeatherApp.css'
import refresh from '../image/refresh.jpg';
import sunny from '../image/sunny.gif';
import ranny from '../image/ranny.gif';

const WeatherApp = () => {
    const authorization = "CWB-52F9DCE3-BDF3-49E6-81A5-32A4AFDC7460";
    const [currentWeather, setCurrentWeather] = useState({
        locationName: "NaN",
        temp: "0", // 溫度
        humd: "0", // 相對濕度
        chanceOfRain: "0", //降雨機率
        description: "NaN", // 天氣狀態
        maxT: "", // 最高溫度
        minT: "", // 最低溫度
        hour: "00", // 最後觀測時間 ( 小時 )
        min: "00" // 最後觀測時間 ( 分鐘 )
    });

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        console.log('fetch');
        const [currentWeather, weatherPrediction] = await Promise.all([
            fetchCurrentWeather(),
            fetchWeatherPrediction()
        ]);
        if (currentWeather.temp === "NaN") {
            currentWeather.temp = `${weatherPrediction.minT}~${weatherPrediction.maxT}`;
        }
        setCurrentWeather({
            ...currentWeather,
            ...weatherPrediction
        });
    };

    const fetchCurrentWeather = () => {
        const url = `https://opendata.cwb.gov.tw/api/v1/rest/datastore/O-A0003-001?Authorization=${authorization}`;
        return axios.get(url)
            .then(respose => {
                const locationName = "淡水";
                const target = respose.data.records.location.find(data => data.locationName === locationName);
                let temp = parseFloat(target.weatherElement.find(e => e.elementName === "TEMP").elementValue);
                let humd = parseFloat(target.weatherElement.find(e => e.elementName === "HUMD").elementValue)*100;
                const time = target.time.obsTime.split(' ')[1];
                const hour = time.split(':')[0];
                const min = time.split(':')[1];
                temp = temp < -50 ? "NaN" : temp;
                humd = humd < -50 ? "NaN" : humd;
                return {
                    locationName,
                    temp,
                    humd,
                    hour,
                    min
                };
            });
    };

    const fetchWeatherPrediction = () => {
        const url = `https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=${authorization}`;
        return axios.get(url)
            .then(response => {
                const locationName = "新北市";
                const data = response.data.records.location.find(obj => obj.locationName === locationName);
                const description = data.weatherElement.find(e => e.elementName === 'Wx').time[0].parameter.parameterName;
                const chanceOfRain = data.weatherElement.find(e => e.elementName === 'PoP').time[0].parameter.parameterName;
                const maxT = data.weatherElement.find(e => e.elementName === 'MaxT').time[0].parameter.parameterName;
                const minT = data.weatherElement.find(e => e.elementName === 'MinT').time[0].parameter.parameterName;
                return {
                    description,
                    chanceOfRain,
                    maxT,
                    minT
                };
            });
    }

    const isRanny = () => {
        const description = currentWeather.description;
        if (description.includes('雨') || description.includes('陰')) {
            return true;
        }
        return false;
    }

    return (
        <div className="card">
            <h3>{currentWeather.locationName}</h3>
            <div>{currentWeather.description}</div>
            <div className="main">
                <div className="temp">{currentWeather.temp}<span>°C</span></div>
                <img src={isRanny ? ranny : sunny} alt="weather icon" className="weatherIcon"/>
            </div>
            <div className="weatherElement">
                <div>相對溼度: {currentWeather.humd}%</div>
                <div>降雨機率: {currentWeather.chanceOfRain}%</div>
            </div>
            <div className="refresh">
                <span>最後觀測時間: {currentWeather.hour}:{currentWeather.min}</span>
                <img src={refresh} alt="refresh" className="refreshIcon"  onClick={() => {
                    fetchData();
                }}/>
            </div>   
        </div>
    );
}

export default WeatherApp; 