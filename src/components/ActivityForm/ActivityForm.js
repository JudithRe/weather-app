export default function ActivityForm({ onAddActivity }) {
  return (
    <>
      <h2 id="form-title">Add new Activity:</h2>
      <form
        className="activity-form"
        aria-labelledby="form-title"
        onSubmit={onAddActivity}
      >
        <label htmlFor="activity">Name of Activity:</label>
        <input type="text" id="activity" name="activity" required />
        <div>
          <label htmlFor="good-weather">Good-weather activity?</label>
          <input type="checkbox" id="good-weather" name="goodWeather" />{" "}
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
