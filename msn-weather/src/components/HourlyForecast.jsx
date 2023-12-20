import React, { useEffect,useState } from 'react'
import Slider from 'react-slick';
import GraphPlot from './GraphPlot';
import './HourlyForecast.css'
import HourlyForeCastItem from './HourlyForeCastItem';


const hourlySettings =  {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 9,
    slidesToScroll: 9
};
  

function HourlyForecast(props) {
    const [resultSet, setResultSet] = useState(props.data);
    const [summaryButton,setSummaryStatus] = useState('');
    const [detailButton,setDetailButton] = useState('active');
    const [showGraph, setShowGraph] = useState(true);

     const handleOverview = (event)=>{
        if(event.target.textContent.trim()==='Summary'){
            setSummaryStatus('active');
            setDetailButton('');
            setShowGraph(false)
        }
        else{
            setSummaryStatus('');
            setDetailButton('active');
            setShowGraph(true)
        }
    }

    // console.log(resultSet.hourly);
    return (
        <div className="container-fluid px-5">
            <div className="hourly__forecast">
                <span className="hourly__forecast__header">
                    <h5>Hourly</h5>
                    <span className="hourly__forecast__buttons">
                        <button className={summaryButton} onClick={handleOverview} >Summary <i className="fal fa-chart-line"></i> </button>
                        <button className={detailButton} onClick={handleOverview}>Details <i className="fal fa-file-alt"></i></button>
                    </span>
                </span>
                {
                showGraph ?
                <Slider {...hourlySettings}>
                    {resultSet.hourly.map((hourlyWeather, index) => {
                        if (index >= 24)
                            return null;
                        return <HourlyForeCastItem key={index} data={hourlyWeather}/>
                    })}
                </Slider> :
                <GraphPlot data={resultSet} />
                }
            </div>
        </div>
   
    )
;

    // useEffect(()=>{
    //     const fetchHourly = async()=>{
    //         const response = await axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude={current,minutely,daily,alert}&appid=${process.env.REACT_APP_HOURLY_FORECAST}`)
    //         const result = response.data;
    //         setResultSet(result);
    //     }

    //     fetchHourly();
    // },[lat,lon])

    // //console.log(lat,lon)
    // const handleOverview = (event)=>{
    //     if(event.target.textContent.trim()==='Summary'){
    //         setSummaryStatus('active');
    //         setDetailButton('');
    //         setShowGraph(false)
    //     }
    //     else{
    //         setSummaryStatus('');
    //         setDetailButton('active');
    //         setShowGraph(true)
    //     }
    // }

    // return (
    //         <div className='hourly__forecast'>
    //             <span className="hourly__forecast__header">
    //                 <h5>Hourly</h5>
    //                 <span className="hourly__forecast__buttons">
    //                     <button className={summaryButton} onClick={handleOverview} >Summary <i className="fal fa-chart-line"></i> </button>
    //                     <button className={detailButton} onClick={handleOverview}>Details <i className="fal fa-file-alt"></i></button>
    //                 </span>
    //             </span>
    //             {Object.keys(resultSet).length && !showGraph? 
    //                 <div className={`hourly__item col`}>
    //                     <Slider {...settings}>
    //                         {
    //                             resultSet.hourly.map((result,index)=>{
    //                                 if(index>=12)
    //                                     return null ;
    //                                 return <HourlyForeCastItem key={index} data={result}/>
    //                             })
    //                         }
    //                     </Slider>
    //                 </div>:Object.keys(resultSet).length && <GraphPlot data={resultSet}/>
    //             }
    //         </div>
    // )
}

export default HourlyForecast;
