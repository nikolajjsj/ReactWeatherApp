import React, { useState } from 'react'
import './App.css'

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY
const BASE_URL = 'https://api.openweathermap.org/data/2.5/'

export default function Weather() {
  const [weather, getData] = useState()

  async function getWeatherForLocation(location) {
    const res = await fetch(`${BASE_URL}weather?q=${location}&appid=${API_KEY}`)
    if (res.status === 200) {
      const json = await res.json()
      console.log(json)
    }
  }

  return (
    <div className='weather-container'>
      <h1>Today's weather</h1>
      <button onClick={() => getWeatherForLocation('London')}>
        Get Weather Data
      </button>
      
    </div>
  )
}
