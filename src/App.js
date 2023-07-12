import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [weather, setWeather] = useState();
  async function weatherFetch() {
    const response = await fetch("https://example-apis.vercel.app/api/weather");
    const data = await response.json();
    console.log("data ", data);
    setWeather(data);
    return data;
  }

  useEffect(() => {
    weatherFetch();
  }, []);

  return (
    <div className="App">
      <div>{weather.location}</div>
      </div>);
}
