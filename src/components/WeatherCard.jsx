import { useState } from "react"

const WeatherCard = ({ weather,temp }) => {
  const [isCelsius, setIsCelsius] = useState(true)
    const handleChangeTemp = () =>{
      setIsCelsius(!isCelsius)
    }
  return (
    <article className="container_Card">
      <h2 className="container_title2">
        {weather?.name},{weather?.sys.country}
      </h2>
      <div className="container_image_list">
        <img className="container_image"
          src={
            weather &&
            `https://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`
          }
          alt="weather"
        />
        <section className="container_section">
          <h3 className="container_title3">"{weather?.weather[0].description}"</h3>
          <ul className="container_list">
            <li className="container_list_li">
              <span className="container_title_span">Wind Speed:</span>
              <span className="container_span"> {weather?.wind.speed}m/s</span>
            </li>
            <li className="container_list_li">
              <span className="container_title_span">Clouds:</span>
              <span className="container_span"> {weather?.clouds.all}%</span>
            </li>
            <li className="container_list_li">
              <span className="container_title_span">Pressure:</span>
              <span className="container_span"> {weather?.main.pressure}hPa</span>
            </li>
          </ul>
        </section>
      </div>
      <h2 className="container_title2">{isCelsius ? `${temp?.celsius}°C` : `${temp?.fahrenheit}°F`}</h2>
      <button  className="container_button" onClick={handleChangeTemp}>
        {isCelsius ? "Change to °F" : "Change to °C"}
      </button>
    </article>
  );
}

export default WeatherCard