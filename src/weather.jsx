import React, { useState, useEffect } from 'react'
import './App.css'
import city from './assets/city.jpg'

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY
const BASE_URL = 'https://api.openweathermap.org/data/2.5/'

export default function Weather() {
  const [weather, setWeather] = useState()
  const [forecast, setForecast] = useState()
  const [location, setLocation] = useState('Aarhus')

  useEffect(() => {
    const fetchData = async (url) => {
      const res = await fetch(url)
      if (res.status === 200) setWeather(await res.json())
    }
    const fetchForecast = async (url) => {
      const res = await fetch(url)
      if (res.status === 200) setForecast(await res.json())
    }
    fetchForecast(`${BASE_URL}forecast?q=${location}&appid=${API_KEY}`)
    fetchData(`${BASE_URL}weather?q=${location}&appid=${API_KEY}`)
  }, [location])

  return (
    <>
      {forecast !== undefined ? (
        <div className='weather-main'>
          <LeftPart
            weather={weather}
            location={location}
            setLocation={setLocation}
          />
          <RightPart forecast={forecast} weather={weather} />
        </div>
      ) : null}
    </>
  )
}

function LeftPart({ weather, location, setLocation }) {
  const description = weather['weather'][0]['description']
  const temp = weather['main']['temp'] // kelvin
  const iconId = weather['weather'][0]['icon']
  const icon = `http://openweathermap.org/img/wn/${iconId}@2x.png`

  function handleSubmit(e) {
    e.preventDefault()
    setLocation(e.target.elements.location.value)
  }

  return (
    <div className='weather-left'>
      <div className='location-search'>
        <form onSubmit={(e) => handleSubmit(e)}>
          <input
            type='text'
            placeholder='Search for places...'
            name='location'
          />
          <input type='submit' value='Fetch' />
        </form>
      </div>
      <img className='weather-left-icon' src={icon} alt='Weather icon' />
      <div className='weather-left-details'>
        <h1>{(temp - 273.15).toFixed(1)} C</h1>
        <hr />
        <b>{description + ' - '}</b>
        <span>{location}</span>
      </div>
      <img className='weather-left-image' src={city} alt='City' />
    </div>
  )
}

function RightPart({ forecast, weather }) {
  const forecastFiltered = forecast['list'].filter(
    (array, index) => index % 8 === 0
  )

  const dateSunrise = new Date(weather['sys']['sunrise'] * 1000)
  const dateSunset = new Date(weather['sys']['sunset'] * 1000)

  //sys
  const sunrise = `${dateSunrise.getUTCHours()}:${dateSunrise.getUTCMinutes()}`
  const sunset = `${dateSunset.getUTCHours()}:${dateSunset.getUTCMinutes()}`
  const windspeed = weather['wind']['speed']
  const winddeg = weather['wind']['deg']
  const tempMax = weather['main']['temp_max']
  const tempMin = weather['main']['temp_min']

  return (
    <div className='weather-right'>
      <div className='weather-right-upper-row'>
        {forecastFiltered.map((array, index) => {
          return (
            <SmallCard
              key={index}
              day={array['dt_txt'].substring(5, 10)}
              icon={array['weather'][0]['icon']}
              temp={array['main']['temp']}
            />
          )
        })}
      </div>
      <h1>Today's hightlights</h1>
      <div className='weather-right-lower-row'>
        <BigCard title='Sunrise/Sunset' first={sunrise} second={sunset} />
        <BigCard
          title='Windspeed'
          first={windspeed + ' m/s'}
          second={winddeg + ' deg'}
        />
        <BigCard
          title='Max/Min temperature'
          first={(tempMax - 273.15).toFixed(1) + ' C'}
          second={(tempMin - 273.15).toFixed(1) + ' C'}
        />
      </div>
    </div>
  )
}

function SmallCard({ day, icon, temp }) {
  return (
    <div className='small-card'>
      <b>{day}</b>
      <img
        src={`http://openweathermap.org/img/wn/${icon}.png`}
        alt='Weather icon'
      />
      <b>{(temp - 273.15).toFixed(1)} C</b>
    </div>
  )
}

function BigCard({ title, first, second }) {
  return (
    <div className='big-card'>
      <b>{title}</b>
      <b>{first}</b>
      <b>{second}</b>
    </div>
  )
}
