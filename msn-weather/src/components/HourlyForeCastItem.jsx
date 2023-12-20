import React, { useState } from 'react'
import './HourlyForeCastItem.css'
function HourlyForeCastItem(props) {
    const [data, setData] = useState(props.data);
    return (
        <div>
            <div className='col hourly__item'>
                <img src={`${process.env.REACT_APP_HOURL_ICON}${data.weather[0].icon}.png`} alt="Icon" className="hourly__item__icon" />
                <p className="hourly__main">{Math.round(data.temp - 273.15)} &deg;</p>
                <p className="hourly__description">{data.weather[0].description}</p>
                <span className="hourly__item__temp">
                    <p className="hourly__humidity">
                        <i className="fal fa-humidity"></i> {data.clouds} %
                    </p>
                    <p className='hourly__wind__speed'> <i className="fas fa-location-arrow"></i> {data.wind_speed} m/s</p>
                </span>
            </div>
            <p style={{padding:'4px 10px'}}>{new Date(data.dt * 1000).toLocaleTimeString('en-US',{hour12:true,hour:'numeric'})}</p>
        </div>
    )
}

export default HourlyForeCastItem
