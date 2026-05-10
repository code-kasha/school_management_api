import dotenv from "dotenv"
import express from "express"
import cors from "cors"

import schoolRoutes from "./routes/schoolRoutes.js"

dotenv.config({ quiet: true })

const app = express()

app.use(cors())
app.use(express.json())

app.get("/", (request, response) => {
	response.json({
		success: true,
		message: "School Management API is Running",
		method: request.method,
		url: request.url,
	})
})

app.use("/api", schoolRoutes)

export default app
