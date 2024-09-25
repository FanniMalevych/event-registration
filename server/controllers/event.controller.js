import Event from "../models/event.model.js";

export const getEvents = async (req, res) => {
    try {
        const events = await Event.find()
		
		res.status(200).json(events);
	} catch (error) {
		console.error("Error in getEvents: ", error.message);
		res.status(500).json({ error: "Error during getting events list" });
	}
}

export const getEventParticipants = async (req, res) => {
    try {
        const { id: eventId } = req.params      
       
        const event = await Event.findOne({ _id: eventId})
        .populate('participants')

        res.status(200).json(event);
    } catch {
        console.log(' Error in getEventParticipants controller', err.message);
        res.status(500).json({error: 'Error during getting event participants'})
    }
}

