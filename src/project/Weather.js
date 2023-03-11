import ".//weather.scss";
import { useEffect, useState } from "react";
import pic1 from ".//pic1.jpg";
import weatherAPIkey from "./weatherAPIkey";

const Weather = () => {
  const [weatherData, setWeatherData] = useState();
  const [forecastData, setForecastData] = useState([
    { day: "THU", temp: 32, icon: "❄️" },
    { day: "Fri", temp: 32, icon: "⛄️" },
    { day: "Sat", temp: 42, icon: "🌨️" },
    { day: "Sun", temp: 52, icon: "🌈" },
    { day: "Mon", temp: 62, icon: "☀️" },
  ]);
  useEffect(() => {
    const makeAPICalls = async () => {
      const geocodingResponse = await fetch(
        `http://api.openweathermap.org/geo/1.0/direct?q=Syracuse,NY,US&limit=5&appid=${weatherAPIkey}`
      );
      const geocodingData = await geocodingResponse.json();
      const lat = geocodingData[0].lat;
      const lon = geocodingData[0].lon;

      const currentWeatherResponse = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${weatherAPIkey}&units=imperial`
      );
      const currentWeatherData = await currentWeatherResponse.json();
      // console.log(currentWeatherData);
      setWeatherData({
        temp: Math.round(currentWeatherData.main.temp),
        humidity: currentWeatherData.main.humidity,
        iconCode: currentWeatherData.weather[0].icon,
        currentCondition: currentWeatherData.weather[0].main,
      });
      // console.log(currentWeatherData);

      const currentForecastResponse = await fetch(
        "https://api.openweathermap.org/data/2.5/forecast?lat=43.0481221&lon=-76.1474244&appid=f10fed638ddb1d2516ce5527d9602aff&units=imperial"
      );
      const forecastData = await currentForecastResponse.json();
      console.log(forecastData);

      //   setForecastData({
      //     temp: Math.round(forecastData.list[0].main.temp),
      //     humidity: forecastData.list[0].main.humidity,
      //     iconCode: forecastData.list[0].weather[0].icon,
      //     currentCondition: forecastData.list[0].weather[0].main,
      //   });
      console.log(forecastData);
      const days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];

      setForecastData([
        {
          day: days[new Date(forecastData.list[0].dt_txt).getDay()], //forecastData.list[0],
          temp: Math.round(forecastData.list[0].main.temp),
          icon: forecastData.list[0].weather[0].icon,
        },
        {
          day: days[new Date(forecastData.list[8].dt_txt).getDay()], //forecastData.list[0],
          temp: Math.round(forecastData.list[0].main.temp),
          icon: forecastData.list[8].weather[0].icon,
        },
        {
          day: days[new Date(forecastData.list[16].dt_txt).getDay()], //forecastData.list[0],
          temp: Math.round(forecastData.list[16].main.temp),
          icon: forecastData.list[16].weather[0].icon,
        },
        {
          day: days[new Date(forecastData.list[24].dt_txt).getDay()], //forecastData.list[0],
          temp: Math.round(forecastData.list[24].main.temp),
          icon: forecastData.list[24].weather[0].icon,
        },
        {
          day: days[new Date(forecastData.list[32].dt_txt).getDay()], //forecastData.list[0],
          temp: Math.round(forecastData.list[32].main.temp),
          icon: forecastData.list[32].weather[0].icon,
        },
      ]);

      //make another API call using OpenWeatherMap Daily Forecast API
      //parse the JSON
      //console.log the data to see the strucuture of the data
      //use the setForecastData function using the use state format above to set...
      //...in the forecast data from the API response
    };
    makeAPICalls();
  }, []);

  if (!weatherData || !forecastData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="App">
      <div className="container weather">
        <img src={pic1} style={{ maxWidth: "100%" }} alt="screenshot" />
        <div className="row">
          <div className="col-2" id="weatherIcon">
            <img
              src={`http://openweathermap.org/img/wn/${weatherData.iconCode}@2x.png`}
              alt="screenshot"
            />
          </div>
          <div className="col-2">
            <div id="currenttemp">{weatherData.temp}°</div>
            <div>℉ | ℃</div>
          </div>
          <div className="col-2">
            Precipitation: 55% Humidity: {weatherData.humidity}% wind: 10 mph
          </div>
          <div className="col-6 text-end">
            Syracuse, NY 13207
            <br />
            {new Date().toLocaleTimeString()}
            <br />
            {weatherData.currentCondition}
          </div>
        </div>
        {/* End of Row 1 */}
        <hr />
        <div className="row" id="forecastRow">
          {forecastData.map((dayInfo) => {
            return (
              <ForecastDay
                day={dayInfo.day}
                icon={dayInfo.icon}
                temp={dayInfo.temp}
              />
            );
          })}
        </div>
        {/* <img src="/pic2.jpg" style={{ maxWidth: "100%" }} /> */}
        {/* End of Row 2 */}{" "}
      </div>
    </div>
  );
};

const ForecastDay = ({ day, icon, temp }) => {
  return (
    <div className="col text-center">
      <p>{day}</p>
      <p className="forecastIcon">
        <img
          src={`http://openweathermap.org/img/wn/${icon}@2x.png `}
          alt="screenshot"
        />
      </p>
      <p>{temp}°</p>
    </div>
  );
};

export default Weather;
