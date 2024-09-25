import express from "express";
import { getEventParticipants, getEvents } from "../controllers/event.controller.js";
import { createParticipant } from "../controllers/participant.controller.js";

const router = express.Router();

router.get('/', getEvents);
router.get('/:id', getEventParticipants);
router.post('/:id', createParticipant)

export default router;
