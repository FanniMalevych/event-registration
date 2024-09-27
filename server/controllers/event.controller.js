import Event from "../models/event.model.js";
import Participant from "../models/participant.model.js";

export const getEvents = async (req, res) => {
    try {
        let events
        const pageSize = 5
        const page = req.query.page
        if (page) {
            if(page == 1) {
                events = await Event.find().limit(pageSize)
            } else {
                events = await Event.find().skip(pageSize*(page-1)).limit(pageSize)
            }   
        } else {
            events = await Event.find()
        }
		
		res.status(200).json(events);
	} catch (error) {
		console.error("Error in getEvents: ", error.message);
		res.status(500).json({ error: "Error during getting events list" });
	}
}

export const getEventParticipants = async (req, res) => {
    try {
        const { id: eventId } = req.params      

        const participants = await Participant.find({eventId})
        const event = await Event.findOne({_id: eventId})
        const result = {participants,  event}

        res.status(200).json(result);
    } catch {
        console.log(' Error in getEventParticipants controller', err.message);
        res.status(500).json({error: 'Error during getting event participants'})
    }
}

