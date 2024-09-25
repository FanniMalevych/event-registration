import axios from "axios"
import { useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom";

export default function Participants () {
    const param = useParams()
    useEffect(() => {
        axios.get(`/api/events/${param.id}`).then((res) => {
            console.log(res.data);
            
        })
    })
    return (
        <>Participants</>
    )
}