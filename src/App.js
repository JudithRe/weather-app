import { useEffect, useState } from "react";
import "./App.css";
import ActivityForm from "./components/ActivityForm/ActivityForm";
import { uid } from "uid";
import useLocalStorageState from "use-local-storage-state";
import List from "./components/List/List";
import WeatherDisplay from "./components/WeatherDisplay/WeatherDisplay";

function App() {
  const [activities, setActivities] = useLocalStorageState("activities", {
    defaultValue: [
      { id: 1, name: "Play Games 🎮", isForGoodWeather: false },
      { id: 2, name: "Watch TV 📺", isForGoodWeather: false },
      { id: 3, name: "Go to the Beach 🏖️", isForGoodWeather: true },
      { id: 4, name: "Build a Snowman ☃️", isForGoodWeather: true },
    ],
  });
  const [weather, setWeather] = useState([]);
  useEffect(() => {
    async function weatherFetch() {
      const response = await fetch(
        "https://example-apis.vercel.app/api/weather"
      );
      const data = await response.json();
      setWeather(data);
      return data;
    }
    weatherFetch();

    const id = setInterval(() => {
      weatherFetch();
    }, 5000);
    return () => {
      clearInterval(id);
    };
  }, []);

  const isGoodWeather = weather?.isGoodWeather;

  function handleAddActivity(newActivity) {
    setActivities([{ id: uid(), ...newActivity }, ...activities]);
    console.log("new ", newActivity);
  }

  function handleDeleteActivity(id) {
    setActivities(activities.filter((activity) => activity.id !== id));
  }

  return (
    <div className="App">
      <WeatherDisplay
        emoji={weather.condition ? weather.condition : "🕑"}
        temperature={
          weather.temperature
            ? `${weather.temperature} °C`
            : "Loading weather data..."
        }
      />
      <List
        isGoodWeather={isGoodWeather}
        activities={
          isGoodWeather
            ? activities.filter((activity) => activity.isForGoodWeather)
            : activities.filter(
                (activity) => activity.isForGoodWeather === false
              )
        }
        onDeleteActivity={handleDeleteActivity}
      />
      <ActivityForm onAddActivity={handleAddActivity} />
    </div>
  );
}

export default App;
