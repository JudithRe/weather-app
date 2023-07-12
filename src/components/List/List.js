export default function List({ activities }) {
  return (
    <section className="list">
      <p> placeholder</p>
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
