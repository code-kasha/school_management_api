import mysql from "mysql2/promise"

const sslConfig = process.env.NODE_ENV === "production" ? true : false

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

export default db
