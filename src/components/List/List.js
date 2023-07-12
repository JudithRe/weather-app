import "./List.css";

export default function List({ activities, isGoodWeather, onDeleteActivity }) {
  return (
    <section className="list">
      <p>
        {isGoodWeather
          ? "The weather is awesome! You could..."
          : "Bad weather outside, but you can..."}
      </p>
      <ul>
        {activities.map((activity) => (
          <ListItem
            key={activity.id}
            activity={activity.name}
            id={activity.id}
            onDeleteActivity={onDeleteActivity}
          />
        ))}
      </ul>
    </section>
  );
}

function ListItem({ activity, onDeleteActivity, id }) {
  return (
    <li className="list__item">
      <h3>{activity}</h3>
      <button
        className="list__item-button"
        type="button"
        onClick={() => onDeleteActivity(id)}
      >
        X
      </button>
    </li>
  );
}
