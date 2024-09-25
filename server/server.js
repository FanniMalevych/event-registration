import path from "path"
import express  from 'express'
import dotenv from 'dotenv'
import cors from 'cors'

import connectToMongoDB from './db/connectToMongoDB.js'
import eventsRouter from './routes/event.routes.js'

dotenv.config()

const __dirname = path.resolve()

const PORT = process.env.PORT || 6000

const app = express()

app.use(express.json())
app.use(cors())

app.use("/api/events", eventsRouter);

app.use(express.static(path.join(__dirname, "/client/dist")));

app.get("*", (req, res) => {
	res.sendFile(path.join(__dirname, "client", "dist", "index.html"));
});

app.listen(PORT, () => {
    connectToMongoDB()
    console.log(`Server is running on port ${PORT}`)
})