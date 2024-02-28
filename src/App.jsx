import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import WeatherCard from './components/WeatherCard'


function App() {
  const [weather, setWeather] = useState()
  const [coords, setCoords] = useState()
  const [temp, setTemp] = useState()
  const [image, setImage] = useState()
  const [searchWeather, setSearchWeather] = useState("")
  const [error, setError] = useState(false)
  const [messageError, setMessageError] = useState("")
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const success =(pos)=>{
      const obj = {
        lat: pos.coords.latitude, 
        lon: pos.coords.longitude
      }
      setCoords(obj)
    }
    const error = err =>{
      console.error("Error al obtener la ubicación: ", err )
      setError(true)
      setMessageError("Error no se pudo obtener la ubicación")
      setLoading(false)
      setTimeout(() => {
        setError(false)
        setMessageError("")
        setLoading(true)
      }, 5000);
    }
    navigator.geolocation.getCurrentPosition(success,error)
  
  }, [])
useEffect(() => {
  
  if (coords && loading) {
    const APIkey = "581b552bf029acfe937a89b198ff4761"
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&appid=${APIkey}`
    axios.get(url)
    .then(res => {
      setWeather(res.data)
      setError(false)
      const obj = {
        celsius:(res.data.main.temp - 273.15).toFixed(1),
        fahrenheit:(res.data.main.temp - 273.15 + 9/5 + 32).toFixed(1)
      }
      setTemp(obj)
    })
    .catch(err => {
      console.error(err);
      setError(true)
      setMessageError("Error al cargar los datos del clima")
  })
  .finally(()=>setLoading(false))
  }
}, [coords,loading])

  const handleSubmit = e =>{
    e.preventDefault()
    setError(false)
    setMessageError("")
    const ApiKey = "581b552bf029acfe937a89b198ff4761"
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchWeather}&appid=${ApiKey}`
    axios.get(url)
    .then((res) => {
    setWeather(res.data)
    const obj = {
      celsius: (res.data.main.temp - 273.15).toFixed(1),
      fahrenheit: ((res.data.main.temp - 273.15) * 9/5 + 32).toFixed(1)
    }
    setTemp(obj)
  })
    .catch(err =>{
      console.error(err);
      setError(true)
      setMessageError("Error ingresa un pais o una ciudad valida")
  })

    const ApiKey2 = "39164456-a760d36e81ebac2ce567c94f0"
    const url2 = `https://pixabay.com/api/?key=${ApiKey2}&q=${searchWeather}`
    axios.get(url2)
    .then(res=> setImage(res.data))
    .catch(err=> console.log(err))
  }
  
  const handleChange = e => {
    setSearchWeather(e.target.value)
  }
  return (
    <>
      {loading ? (
        <div className='container_loading'><div className='container_animation'></div></div>
      ) : (
        <div
          className="container_principal background"
          style={
            image
              ? { backgroundImage: `url(${image?.hits[0]?.webformatURL})` }
              : {
                  backgroundImage:
                    "url(https://cdn.pixabay.com/photo/2020/06/28/10/02/clouds-5348740_1280.jpg)",
                }
          }
        >
          <form className='container_form' onSubmit={handleSubmit}>
            <h1 className='container_title1'>Weather app </h1>
            <input className='container_input' type="text" value={searchWeather} onChange={handleChange} />
            <button className='container_button'>search</button>
          </form>
          { error ? (<div className='container_error'>{messageError}</div>) : 
          (<WeatherCard 
          weather={weather} 
          temp={temp} />)}
        </div>
      )}
    </>
  );
}

export default App
