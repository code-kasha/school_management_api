import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import chalk from "chalk"

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

const PORT = process.env.PORT
const ENVIRONMENT = process.env.ENVIRONMENT

app.listen(PORT, () => {
	switch (ENVIRONMENT) {
		case "production":
			console.log(chalk.green.bold("🚀 Production Server Running"))
			console.log(chalk.blue(`🌐 Live URL: https://yourdomain.com`))
			break

		case "development":
			console.log(chalk.yellow.bold("🛠 Development Server Running"))
			console.log(chalk.blue(`🌐 Local URL: http://localhost:${PORT}`))
			break

		default:
			console.log(
				chalk.red.bold(
					"⚠ Unknown Environment: Please configure the environment variables.",
				),
			)
	}
})
