import React, { useState } from 'react'
import './WeatherCard.css'

function WeatherCard(props) {    
    const [result,setResult] = useState(props.data);
    const [topTemp,setTopTemp] = useState('C');
    const [bottomTemp,setBottomTemp] = useState('F');

    //console.log(`https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}`)
    
    
    const handleTempUnit = (event)=>{
        if(event.target.value==='C')
            {
                setTopTemp('C');
                setBottomTemp('F');
            }else{
                setTopTemp('F');
                setBottomTemp('C');
            }
    }
    
    return(
            <div>
                <div className="weather__card col-lg-6 mx-auto mt-3">
                    <h4>{result.city_name}, {result.country_code}</h4>
                    <span className="flex-div">
                        <img src={`${process.env.REACT_APP_ICON_URL}${result.weather.icon}.png`} className="weather__card__icon" alt="Icon"/>
                        <p className="weather__temperature">{topTemp==='C'?result.temp:(Math.round(result.temp)* 9/5 + 32)}&deg;</p>
                        <span className="unit__button">
                            <button className="active" onClick={handleTempUnit} value={topTemp} > {topTemp} </button>
                            <button onClick={handleTempUnit} value={bottomTemp}> {bottomTemp} </button>
                        </span>
                    </span>
                    <span className="weather__description"> {result.weather.description}</span>
                    <p className="weather__time">Updated as of {new Date(result.ts*1000).toLocaleTimeString()}</p>

                    <span className="weather__widgets">
                        <p>Feels Like {result.app_temp?Math.round(result.app_temp):'--'}&deg;</p>
                        <p>
                            Wind <i className="fas fa-location-arrow"></i> {result.wind_spd?Math.round(result.wind_spd*3.6):'--'} m/s
                        </p>
                        <p>Visibility {result.vis?result.vis:'--'} km</p>
                    </span>
                    <span className="weather__widgets spacing">
                        <p>Barometer {result.pres?result.pres:'--'} mb</p>
                        <p>Humidity {result.rh?result.rh:'--'}%</p>
                        <p>Dew Point {result.dewpt?result.dewpt:'--'} &deg;</p>
                    </span>
                </div>
            </div>
    )
}

export default WeatherCard
