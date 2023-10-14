'use client'
import Image from 'next/image'
import { FaSearch } from 'react-icons/fa';
import Data from './components/Data';
import { useEffect, useState } from 'react';

export default function Home() {
  const [city, setCity] = useState('nagpur')

  const [weather, setWeather] = useState({})

  const handleInputChange = (e) => {
    setCity(e.target.value);
  }

  const getData = async (lat, lon) => {
    let URL = '';

    if (lat && lon) {
      URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=73c721cb6cfa83d7aa3824a3f1543ada`;
    } else {
      URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=73c721cb6cfa83d7aa3824a3f1543ada`;
    }

    try {
      const res = await fetch(URL, { method: 'GET' });
      if (res.ok) {
        const data = await res.json();
        setWeather(data);
        setCity('');
      } else {
        console.error('Failed to fetch');
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
        const { latitude, longitude } = position.coords;
        getData(latitude, longitude)
      });
    } else {
      console.error('Geolocation is not supported by your browser.');
    }

  }, [])


  return (
    <>
      <section className="text-gray-200 bg-gray-900 relative h-screen">
        <div className="container px-5 py-2 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4">Weather Application</h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base ">"Stay informed about the weather with our user-friendly weather application".</p>
          </div>
          <div className="mx-auto">
            <div className="flex gap-2 -m-2 justify-center items-center">
              <div className="p-2 w-full md:w-1/2">
                <div className="relative">

                  <input onChange={handleInputChange} type="text" id="name" name="name" className="w-full bg-gray-300 text-gray-800 rounded  text-base outline-none placeholder:text-gray-600 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" placeholder='Search City Here' />
                </div>
              </div>
              <button onClick={getData}><FaSearch size={25} /></button>
            </div>
          </div>
        </div>
        <Data weather={weather} />
      </section>
    </>
  )
}
