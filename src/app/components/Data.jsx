'use client'
import React, { useEffect, useState } from 'react'

const Data = ({ weather }) => {

	console.log(weather);

	return (
		<>
			<section className="text-gray-400 bg-gray-900 body-font py-10">
				<div className="md:bg-gray-900 m-2">
					{
						weather.main ? (
							<div className="custom-font grid grid-cols-2 md:grid-cols-3 gap-1 md:gap-2 w-full justify-center text-center capitalize md:text-3xl text-lg">
								<div className="p-4 bg-gray-800 rounded-md">
									<h2 className="title-font font-medium text-white ">{weather.name}</h2>
									<p className="leading-relaxed md:text-2xl text-base">City</p>
								</div>
								<div className="p-4 bg-gray-800 rounded-md">
									<h2 className="title-font font-medium text-white ">{Math.round(weather.main?.temp-273.15)}°C</h2>
									<p className="leading-relaxed md:text-2xl text-base">Temperature</p>
								</div>
								<div className="p-4 bg-gray-800 rounded-md">
									<h2 className="title-font font-medium text-white">{weather.main?.humidity}%</h2>
									<p className="leading-relaxed md:text-2xl text-base">Humidity</p>
								</div>
								<div className="p-4 bg-gray-800 rounded-md">
									<h2 className="title-font font-medium text-white lowercase">{weather.wind?.speed} mph</h2>
									<p className="leading-relaxed md:text-2xl text-base">Wind</p>
								</div>
								<div className="p-4 bg-gray-800 rounded-md">
									<h2 className="title-font font-medium text-white">{weather.main?.pressure}</h2>
									<p className="leading-relaxed md:text-2xl text-base">Pressure</p>
								</div>
								<div className="p-4 bg-gray-800 rounded-md">
									<h2 className="title-font font-medium text-white">{weather.weather && weather.weather.length > 0 ? weather.weather[0].description : ''}</h2>
									<p className="leading-relaxed md:text-2xl text-base">description</p>
								</div>
							</div>
						) : ''
					}

				</div>
			</section>
		</>
	)
}

export default Data