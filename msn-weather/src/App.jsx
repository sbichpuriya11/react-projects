import { useEffect, useState } from "react";
import "./App.css";
import dayImg from "./assets/sergei-a--heLWtuAN3c-unsplash.jpg";
import nightImg from "./assets/atanas-dzhingarov-bboaGO5h5jI-unsplash.jpg";
import axios from "axios";
import Navbar from "./components/Navbar";
import WeatherCard from "./components/WeatherCard";
import DailyForeCast from "./components/DailyForeCast";
import HourlyForecast from "./components/HourlyForecast";
import DayHighLights from "./components/DayHighLights";
import { PuffLoader } from "react-spinners";

function App() {
  // ALL REQUIRED VARIABLES
  const [city, setCity] = useState(
    localStorage.getItem("city") == null
      ? "Nagpur"
      : localStorage.getItem("city")
  );
  const [isDayStyling, setIsDayStyling] = useState(true);
  const [available, setAvailable] = useState(false);
  const [weatherData, setWeatherData] = useState({});
  const [dailyWeatherData, setDailyWeatherData] = useState({});
  const [hourlyWeatherData, setHourlyWeatherData] = useState({});
  const [reload, setReload] = useState(false);

  // ALL HANDLE METHODS
  const getCityName = (name) => {
    setCity(name);
    if (name.trim() === "") {
      setCity("Nagpur");
      localStorage.setItem("city", "Nagpur");
    }
  };
  const handleStyling = (event) => {
    setIsDayStyling(event);
  };
  const handleReload = (e) => {
    setReload(e);
  };

  // ALL FETCHING FUNCTIONS STARTS HERE
  const currentWeather = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_WEATHER_URL}${city}&key=${process.env.REACT_APP_API_KEY}`
      );
      const result = await response.data;
      setWeatherData(result.data[0]);
    } catch (e) {
      console.log("FROM CURRENT WEATHER", e);
      setCity("Nagpur");
    }
  };

  const dailyWeather = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_DAILY_URL}${city}&key=${process.env.REACT_APP_API_KEY}`
      );
      const result = await response.data;
      setDailyWeatherData(result);
    } catch (e) {
      console.log("FROM DAILY WEATHER", e);
    }
  };

  const hourlyWeather = async () => {
    try {
      setAvailable(false);
      await currentWeather();
      await dailyWeather();

      const geoCords = await axios.get(
        `${process.env.REACT_APP_GEOCODE_URL}${city}&limit=&appid=${process.env.REACT_APP_HOURLY_FORECAST}`
      );
      const cords = await geoCords.data;

      const hourly_response = await axios.get(
        `${process.env.REACT_APP_HOURLY_URL}lat=${cords[0].lat}&lon=${cords[0].lon}&exclude=current,minutely,daily&appid=${process.env.REACT_APP_HOURLY_FORECAST}`
      );
      const hourly_data = await hourly_response.data;
      setHourlyWeatherData(hourly_data);
      setAvailable(true);
    } catch (e) {
      console.log("FROM HOURLY WEATHER", e);
    }
  };

  // CALLING ALL FUNCTIONS
  useEffect(() => {
    hourlyWeather();
  }, []);

  useEffect(() => {
    hourlyWeather();
  }, [city]);

  useEffect(() => {
    hourlyWeather();
  }, [reload]);

  return (
    <div className="App" style={isDayStyling ? dayStyle : nightStyle}>
      <Navbar
        getCityName={getCityName}
        handleStyling={handleStyling}
        handleReload={handleReload}
        location={city}
      />
      {available === false ? (
        <PuffLoader loading={true} color="rgba(255,255,255,0.9)" css={style} />
      ) : (
        <>
          <WeatherCard city={city} data={weatherData} />
          <DailyForeCast data={dailyWeatherData} />
          <HourlyForecast data={hourlyWeatherData} />
          <DayHighLights data={dailyWeatherData.data[0]} />
          <footer id="sticky-footer" className="flex-shrink-0 py-3">
            <div className="container text-center">
              <small>
                Copyright &copy; Reservered - Somil Bichpuriya{" "}
                <a href="/credits">(Credits Section)</a>
              </small>
            </div>
          </footer>
        </>
      )}
    </div>
  );
}

const dayStyle = {
  textAlign: "center",
  fontFamily: "Karla - sans-serif",
  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${dayImg})`,
  backgroundRepeat: "no-repeat",
  backgroundAttachment: "fixed",
  backgroundSize: "cover",
  backgroundPosition: "center",
  height: "100%",
  minHeight: "100vh",
};

const nightStyle = {
  textAlign: "center",
  fontFamily: "Karla - sans-serif",
  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${nightImg})`,
  backgroundRepeat: "no-repeat",
  backgroundAttachment: "fixed",
  backgroundSize: "cover",
  backgroundPosition: "center",
  height: "100%",
  minHeight: "100vh",
};

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  background: "transparent",
  transform: "translate(-50%,-50%)",
};

export default App;
