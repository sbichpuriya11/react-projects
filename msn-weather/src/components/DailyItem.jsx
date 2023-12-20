import React from 'react'
import './DailyItem.css'
// import HourlyForecast from './HourlyForecast'
function DailyItem(props) {
    return (
        <div className={`daily__item col ${props.addClass}`}>
            <p>{new Date(props.dailyWeather.ts * 1000).toLocaleDateString(undefined,{weekday:'short'})} {new Date(props.dailyWeather.ts * 1000).getDate()}</p>
            <img src={`https://www.weatherbit.io/static/img/icons/${props.dailyWeather.weather.icon}.png`} alt="" className="daily__item__icon"/>
            <span className="daily__item__temp">
                <p className="weather__main">{Math.round(props.dailyWeather.max_temp)}&deg;</p> 
                <p className="weather__secondary">{Math.round(props.dailyWeather.low_temp)}&deg;</p>
            </span>
            <p className="weather__daily__description">{props.dailyWeather.weather.description}</p>  
        </div>
    )
}

export default DailyItem
