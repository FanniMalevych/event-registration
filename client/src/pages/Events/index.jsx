import { useEffect, useState } from "react"
import axios from 'axios'

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
    </>
}