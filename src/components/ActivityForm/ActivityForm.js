import "./ActivityForm.css";

export default function ActivityForm({ onAddActivity }) {
  return (
    <div className="form-wrapper">
      <h2 id="form-title">Add another activity!</h2>
      <form
        className="activity-form"
        aria-labelledby="form-title"
        onSubmit={onAddActivity}
      >
        <div className="form__section">
          <label className="form__label" htmlFor="activity">
            Activity:
          </label>
          <input
            className="form__text-input"
            type="text"
            id="activity"
            name="activity"
            required
          />
        </div>
        <div className="form__section">
          <label className="form__label" htmlFor="good-weather">
            Good-weather activity?
          </label>
          <input
            className="form__checkbox-input"
            type="checkbox"
            id="good-weather"
            name="goodWeather"
          />{" "}
        </div>
        <button className="form__button" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
