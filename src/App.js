
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [weather, setWeather] = useState({});
  async function weatherFetch() {
    const response = await fetch("https://example-apis.vercel.app/api/weather");
    const data = await response.json();
    return data;

    }
    useEffect(() => {setWeather(weatherFetch())} ) 
  return (

    <div className="App">
      <div>{weather}</div> 
      <h2>Hello</h2>
    </div>
  );
}

export default App;
