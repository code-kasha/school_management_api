import mysql from "mysql2/promise"
import dotenv from "dotenv"
dotenv.config({ quiet: true })

const sslConfig =
	process.env.ENVIRONMENT === "production"
		? { rejectUnauthorized: false }
		: false

const db = mysql.createPool({
	host: process.env.DB_HOST,
	port: process.env.DB_PORT,
	user: process.env.DB_USER,
	password: process.env.DB_PASS,
	database: process.env.DB_NAME,

	waitForConnections: true,
	connectionLimit: 10,

	ssl: sslConfig,

	connectTimeout: 10000,
})

db.getConnection()
	.then((connection) => {
		console.log("Database connected successfully")
		connection.release()
	})
	.catch((error) => {
		console.error("Database connection failed!")
		console.error("Error Code:", error.code)
		console.error("Error Message:", error.message)
		console.error("Full Error:", error)
	})

if (process.env.NODE_ENV !== "test") {
	console.log("Database connected successfully")
}

export default db
