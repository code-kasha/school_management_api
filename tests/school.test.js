import request from "supertest"
import express from "express"

const app = express()
app.use(express.json())

app.get("/", (req, res) => {
	res.status(200).json({
		success: true,
	})
})

describe("Health Check", () => {
	test("GET / should return success", async () => {
		const response = await request(app).get("/")

		expect(response.statusCode).toBe(200)
		expect(response.body.success).toBe(true)
	})
})
