import mongoose from "mongoose";

const participantSchema = new mongoose.Schema({
    eventId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Event",
        required: true,
    },
    fullName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    birthDate: {
        type: Date,
        required: true,
    },
    details: {
        type: String,
        required: true,
    }
}, { timestamps: true })

const Participant = mongoose.model('Participant', participantSchema)

export default Participant