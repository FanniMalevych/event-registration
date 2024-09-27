import Event from "../models/event.model.js";
import Participant from "../models/participant.model.js"

export const createParticipant = async (req, res) => {
    try {
        const { id: eventId } = req.params   
        const { fullName, email, birthDate, details } = req.body;

        const event = await Event.findById({_id: eventId})

        if (event) {
            const newParticipant = new Participant({
                fullName,
                email,
                birthDate,
                details,
                eventId
            })
            if (newParticipant) {
                await newParticipant.save()
    
                res.status(201).json({
                    _id: newParticipant._id,
                    fullName: newParticipant.fullName,
                })
            } else {
                res.status(400).json({error: 'Invalid data'})
            }
        } else {
            res.status(404).json({error: 'Event not found'})
        }

    } catch (err) {
        console.log(' Error in participant controller', err.message);
        res.status(500).json({error: 'Error during creating new participant'})
    }
}