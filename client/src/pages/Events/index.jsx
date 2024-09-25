import { useEffect, useState } from "react"
import axios from 'axios'
import EventCard from "../../components/EventCard"

export default function Events () {
    const [events, setEvents] = useState([])
    useEffect(() => {
        axios.get('/api/events').then((resp) => {
            setEvents(resp.data)
            console.log('here');
            
           })
    },[])
    console.log(events);
    
    return <>
    <h1>List of events</h1>
    {events.map(event => <EventCard 
                            key={event._id} 
                            title={event.title} 
                            description={event.description}
                            organizer={event.organizer}
                            date={event.date}
                            id={event._id}/>)}
    </>
}