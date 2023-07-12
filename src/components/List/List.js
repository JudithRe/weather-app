export default function List({ activities, isGoodWeather }) {
  return (
    <section className="list">
      <p>
        {isGoodWeather
          ? "The weather is awesome! Go outside!"
          : "Bad weather outside, but you can..."}
      </p>
      <ul>
        {activities.map((activity) => (
          <ListItem key={activity.id} activity={activity.name} />
        ))}
      </ul>
    </section>
  );
}

function ListItem({ activity }) {
  return (
    <li>
      <h3>{activity}</h3>
    </li>
  );
}
