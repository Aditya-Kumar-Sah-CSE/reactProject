
import { useState } from "react"
import SearchBar from "./components/SearchBar";
import axios from "axios";
import WeatherCard from "./components/WeatherCard";


function App() {
 const [weather,setWeather]=useState(null);
const [loading,setLoading] = useState(false);
const [error,setError] = useState('');

const API_KEY = import.meta.env.VITE_API_KEY;
const API_URL = `https://api.openweathermap.org/data/2.5/weather`;

// const API_URL = `https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}`

const fetchWeather = async (city) =>{
  setLoading(true);
  setError('');
  try{
    const url = `${API_URL}?q=${city}&units=metric&appid=${API_KEY}`;

    const response = await axios.get(url);
    console.log(response.data);
    setWeather(response.data);
  }
catch(error){
  if(error.response && error.response.status === 404){
    setError('city not found🐞🐞🐞🐞🐞');
  }else{
    setError("An error occurred. please try again !! 🪲🪲🐞🐞 ")
  }
  setWeather(null);
}
finally{
  setLoading(false);
}


};

  return (
    <div className='min-h-screen  flex flex-col items-center justify-center bg-blue-100'>
{/* <video src={video}></video> */}


      <div className="text-white bg-black/90 rounded-lg shadow-lg p-8 max-w-md w-full" >
        <h1 className='text-3xl font-bold mb-4 text-center'>Weather App</h1>
        <SearchBar fetchWeather={fetchWeather}/>
        {loading && <p className="text-center mt-4">Loading...</p>}
        {error && <p className="text-red-500 text-center">{error}</p>}
        {weather && <WeatherCard weather={weather}/>}


      </div>
     
    </div>
  )
}

export default App
// weather api : https://openweathermap.org/api