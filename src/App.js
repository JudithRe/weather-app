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
      { id: 1, name: "Play Games 🎮", isForGoodWeather: "false" },
      { id: 2, name: "Watch TV 📺", isForGoodWeather: "false" },
      { id: 3, name: "Go to the Beach 🏖️", isForGoodWeather: "true" },
      { id: 4, name: "Build a Snowman ☃️", isForGoodWeather: "true" },
    ],
  });
  const [weather, setWeather] = useState([]);
  useEffect(() => {
    try {
      weatherFetch();
    } catch {
      setWeather([
        {
          location: "Europe",
          temperature: 30,
          condition: "🌧️",
          isGoodWeather: false,
        },
      ]);
    }
  }, []);

  const isGoodWeather = weather.isGoodWeather;
  async function weatherFetch() {
    const response = await fetch("https://example-apis.vercel.app/api/weather");
    const data = await response.json();
    setWeather(data);
    return data;
  }

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    const newActivity = {
      name: data.activity,
      isForGoodWeather: `${data.goodWeather === "on" ? true : false}`,
    };
    handleAddActivity(newActivity);

    event.target.reset();
    event.target.activity.focus();

    return newActivity;
  }

  function handleAddActivity(newActivity) {
    setActivities([{ id: uid(), ...newActivity }, ...activities]);
  }

  function handleDeleteActivity(id) {
    setActivities(activities.filter((activity) => activity.id !== id));
  }

  return (
    <div className="App">
      <WeatherDisplay
        emoji={weather.condition}
        temperature={weather.temperature}
      />
      <List
        isGoodWeather={isGoodWeather}
        activities={
          isGoodWeather
            ? activities.filter(
                (activity) => activity.isForGoodWeather === "true"
              )
            : activities.filter(
                (activity) => activity.isForGoodWeather === "false"
              )
        }
        onDeleteActivity={handleDeleteActivity}
      />
      <ActivityForm onAddActivity={handleSubmit} />
    </div>
  );
}

export default App;
