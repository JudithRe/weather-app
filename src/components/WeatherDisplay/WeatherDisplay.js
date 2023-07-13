import "./WeatherDisplay.css";

export default function WeatherDisplay({ emoji, temperature, location }) {
  return (
    <>
      <div className="location">{location}</div>
      <div className="weather-display">
        <div className="weather-display__emoji">
          <p>{emoji}</p>
        </div>
        <div className="weather-display__temperature">
          <p>{temperature}</p>
        </div>
      </div>
    </>
  );
}
