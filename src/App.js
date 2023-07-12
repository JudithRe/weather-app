import { useEffect, useState } from "react";
import "./App.css";
import ActivityForm from "./components/ActivityForm/ActivityForm";
import { uid } from "uid";
import useLocalStorageState from "use-local-storage-state";
import List from "./components/List/List";

function App() {
  const [activities, setActivities] = useLocalStorageState("activities", {
    defaultValue: [
      { id: 1, activity: "test" },
      { id: 3, activity: "test2" },
      { id: 3, activity: "test3" },
    ],
  });
  const [weather, setWeather] = useState();
  const isGoodWeather = weather.isGoodWeather;
  async function weatherFetch() {
    const response = await fetch("https://example-apis.vercel.app/api/weather");
    const data = await response.json();
    setWeather(data);
    return data;
  }

  useEffect(() => {
    weatherFetch();
  }, []);

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
    console.log(activities);
  }

  return (
    <div className="App">
      <List
        isGoodWeather={isGoodWeather}
        activities={
          isGoodWeather
            ? activities.filter(
                (activity) => activity.isForGoodWeather === "true"
              )
            : activities.filter((activity) => !activity.isForGoodWeather)
        }
      />

      <div>{weather.location}</div>
      <ActivityForm onAddActivity={handleSubmit} />
    </div>
  );
}

export default App;
