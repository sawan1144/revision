import { useEffect, useState } from "react"
import useFetch from "./useFetch"

function App() {
  const [value, setValue] = useState('')
  const [city, setCity] = useState('')
  const {data, err} = useFetch(city)

  function getCity(){
    setCity(value);
    setValue('')
    console.log(err)
  }


  return (
    <div className="min-h-screen flex justify-center items-center bg-linear-to-br from-purple-500 via-purple-600 to-indigo-700 p-5">
      <div className="bg-white/95 rounded-3xl p-10 w-full max-w-md shadow-2xl">
        
        <div className="flex gap-3 mb-8">
          <input 
            type="text" 
            placeholder="Search city..." 
            className="flex-1 px-5 py-3 border-2 border-gray-200 rounded-full text-base outline-none focus:border-purple-500 transition-colors text-gray-500"
            value={value} onChange={(e)=>setValue(e.target.value)}
          />
          <button onClick={getCity} className="px-8 py-3 bg-purple-500 text-white rounded-full text-base font-medium hover:bg-purple-600 transition-colors">
            Search
          </button>
        </div>

        {err ? (<div className="text-black">{err}</div>) : (<>
        <div className="text-center my-10">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            {data ? (data.name):'City'}, {data ? (data?.sys?.country) : 'Country'}
          </h1>
          <div className="text-7xl font-bold text-purple-500 my-5">
            {data ? `${(data?.main?.temp)}° F`: '0'}
          </div>
          <p className="text-2xl text-gray-600">{data ? (data.weather?.[0]?.description) : 'description'}</p>
        </div>

        <div className="flex justify-around mt-10 pt-8 border-t-2 border-gray-200">
          <div className="flex flex-col items-center gap-2">
            <span className="text-sm text-gray-400 uppercase tracking-wide">Feels Like</span>
            <span className="text-xl font-bold text-gray-800">{data ? (data?.main?.feels_like):'0'}</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <span className="text-sm text-gray-400 uppercase tracking-wide">Humidity</span>
            <span className="text-xl font-bold text-gray-800">{data ? (data?.main?.humidity) : '0'}</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <span className="text-sm text-gray-400 uppercase tracking-wide">Wind Speed</span>
            <span className="text-xl font-bold text-gray-800">{data? (data?.wind?.speed):'0'}</span>
          </div>
        </div>
       </>)}

      </div>
    </div>
  )
}

export default App
