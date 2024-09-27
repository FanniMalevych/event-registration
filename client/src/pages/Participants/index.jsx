import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { Box, TextField, Typography } from "@mui/material"
import BackButton from "../../components/BackButton";
import ParticipantCard from "../../components/ParticipantCard";

export default function Participants () {
    const param = useParams()
    const [event, setEvent] = useState('')
    const [participants, setParticipants] = useState([])
    const [filteredParticipants, setFilteredParticipants] = useState([])
    const [inputText, setInputText] = useState("");

    useEffect(() => {
        axios.get(`/api/events/${param.id}`).then((res) => {
            setEvent(res.data.event.title) 
            setParticipants(res.data.participants)
            setFilteredParticipants(res.data.participants)
        })
    },[])

    const inputHandler = (e) => {
        const lowerCase = e.target.value.toLowerCase();
        setInputText(lowerCase);
    };

    useEffect(() => {
        const searchParticipants = participants.filter((el) => el.fullName.toLowerCase().includes(inputText) | el.email.toLowerCase().includes(inputText))
        setFilteredParticipants(searchParticipants)
        
    }, [inputText])

    return (
        <>
        <BackButton/>
            <Typography variant="h4" m={5} align="center">Event <b>{event}</b> detail</Typography>
            <Box display='flex' alignItems='center'>
                <Typography variant="h6" m={5}>number of participants: {participants.length}</Typography>
                <TextField
                    id="outlined-basic"
                    variant="outlined"
                    label="Search for participant"
                    onChange={inputHandler}
                    />
            </Box>
            
            <Box display='flex' flexWrap='wrap'>
                {filteredParticipants?.map((el) => (
                    <ParticipantCard key={el._id} id={el._id} fullName={el.fullName} email={el.email}/>
                ))}
            </Box>
        </>
    )
}