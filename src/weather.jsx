import React, { useState, useEffect } from 'react'
import './App.css'

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY
const BASE_URL = 'https://api.openweathermap.org/data/2.5/'

export default function Weather() {
  const [weather, setData] = useState()
  const [location, setLocation] = useState('Aarhus')

  const fetchData = async () => {
    console.log('Fetching data')
    const res = await fetch(`${BASE_URL}weather?q=${location}&appid=${API_KEY}`)
    if (res.status === 200) setData(await res.json())
  }

  useEffect(() => {
    const fetchData = async (location) => {
      const res = await fetch(
        `${BASE_URL}weather?q=${location}&appid=${API_KEY}`
      )
      if (res.status === 200) setData(await res.json())
    }

    fetchData('Aarhus')
  }, [])

  return (
    <div className='weather-container'>
      <h1>
        Today's weather in:{' '}
        <input
          type='text'
          value={location}
          onChange={(val) => setLocation(val.target.value)}
        />
      </h1>

      <button onClick={fetchData}>Fetch</button>

      {weather !== undefined ? <WeatherContent weatherData={weather} /> : null}
    </div>
  )
}

function WeatherContent(weatherData) {
  // sys
  const country = weatherData['weatherData']['sys']['country']
  const sunrise = weatherData['weatherData']['sys']['sunrise']
  const sunset = weatherData['weatherData']['sys']['sunset']
  // weather data
  const temp = weatherData['weatherData']['main']['temp'] // kelvin
  const feelTemp = weatherData['weatherData']['main']['feels_like'] //kelvin
  const pressure = weatherData['weatherData']['main']['pressure']
  const windSpeed = weatherData['weatherData']['wind']['speed'] // m/s

  return (
    <div>
      <h2>Country code: {country}</h2>
      <h2>Sunrise: {sunrise}</h2>
      <h2>Sunset: {sunset}</h2>
      <br />
      <h2>Temperature: {(temp - 273.15).toFixed(1)} C</h2>
      <h2>Feels like: {(feelTemp - 273.15).toFixed(1)} C</h2>
      <h2>Pressure: {pressure}</h2>
      <h2>Wind speed: {windSpeed} m/s</h2>
    </div>
  )
}
