export default function List(activities) {
    return(
        <section className="list"> 
        
        <p> placeholder</p>
        <ul>
        {activities.map((activity) => {
        <li key={activity.id}><h3>{activity.activity}</h3></li>    
        })}
        
            
            
            </ul>

        </section>
    )
}