import React, { useState } from 'react'
import './Navbar.css'
function Navbar({getCityName,handleStyling,handleReload,location}) {
    
    const [city,setCity] = useState('');
    const [isDay, setIsDay] = useState(false);
    const [enableReload, setEnableReload] = useState(false);
    
    const handleIsDay = () => {
        setIsDay(!isDay);
    }
    
    const reload = () => {
        setEnableReload(!enableReload);
    }
    const handleSearchField = (event)=>{
        setCity(event.target.value);
        
    }

    const saveCity = () => { 
        localStorage.setItem('city', location);
    }
    
    return (
        <nav className="navbar navbar-expand-lg navbar-dark top__nav">
            <div className="container">
                <a className="navbar-brand" href="https://www.google.com">WeatherApp.AI</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
        
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                {/* <div class="nav-flexbar"> */}
                    <ul className="navbar-nav ml-auto text-light">
                        <li className="nav-item mr-4">
                            <button className="bg-transparent border-0 text-light customButton" onClick={function () { reload(); handleReload(enableReload); }}>
                                <i className="fal fa-redo"></i>
                            </button>
                        </li>
                        <li className="nav-item mr-4">
                            <button className="bg-transparent border-0 text-light customButton" onClick={saveCity}>
                                <i className="fal fa-star"></i>
                            </button>
                        </li>
                        <li className="nav-item mr-4">
                            <button className="bg-transparent border-0 text-light customButton">
                                <i className="fal fa-thumbtack"></i>
                            </button>
                        </li>
                        <li className="nav-item mr-4">
                            <button className="bg-transparent border-0 text-light customButton" onClick={function (event) { handleIsDay(); handleStyling(isDay); }}>
                                <i className={`fal ${isDay?'fa-sun':'fa-moon'} `}></i>
                            </button>
                        </li>
                        <li>
                            <div className="search__area">
                                <input className="search__field" type="search" placeholder="Search..." onChange={handleSearchField} aria-label="Search"/>
                                <span className="search__button" onClick={()=>getCityName(city)}><i className="fal fa-search"></i></span>
                            </div>
                        </li>
                    </ul>
                    
                {/* </div> */}
            </div>
        </div>
      </nav>
    );
}

export default Navbar
