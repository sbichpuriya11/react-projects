import React, {  useState } from 'react'
import './DailyForeCast.css'

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


import Slider from 'react-slick'
import DailyItem from './DailyItem';



const dailySettings =  {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 9,
    slidesToScroll: 4
};


function DailyForeCast(props) {
    const [data, setData] = useState(props.data.data);

    return (

            <div className="container-fluid px-5">    
                <div className="daily__forecast">
                    <h5>Daily</h5>
                    <Slider {...dailySettings}>
                        {data.map((dailyWeather,index)=>{
                            if(index>=10){
                                return null;
                            }
                            if(index===0)
                                return <DailyItem dailyWeather={dailyWeather} key={index} index={index} addClass='activeDay'/>
                            return <DailyItem dailyWeather={dailyWeather} key={index} index={index}/>
                        })}
                    </Slider>
                </div>
            </div>
    )
}

export default DailyForeCast
