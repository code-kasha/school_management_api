import chalk from "chalk"

import app from "./app.js"

const PORT = process.env.PORT
const ENVIRONMENT = process.env.ENVIRONMENT

app.listen(PORT, () => {
	switch (ENVIRONMENT) {
		case "production":
			console.log(chalk.green.bold("Production Server Running"))
			console.log(
				chalk.blue(`Live URL: https://school_management_api.onrender.com`),
			)
			break

		case "development":
			console.log(chalk.yellow.bold("Development Server Running"))
			console.log(chalk.blue(`Local URL: http://localhost:${PORT}`))
			break

		default:
			console.log(
				chalk.red.bold(
					"⚠ Unknown Environment: Please configure the environment variables.",
				),
			)
	}
})
