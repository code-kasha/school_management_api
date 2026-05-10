import db from "../utils/db.js"
import request from "supertest"
import app from "../app.js"

describe("School API Tests", () => {
	describe("POST /api/addSchool", () => {
		it("should add a school successfully", async () => {
			const response = await request(app).post("/api/addSchool").send({
				name: "Test School",
				address: "Mumbai",
				latitude: 19.076,
				longitude: 72.8777,
			})

			expect(response.statusCode).toBe(201)

			expect(response.body.success).toBe(true)
		})

		it("should fail when fields are missing", async () => {
			const response = await request(app).post("/api/addSchool").send({
				name: "",
			})

			expect(response.statusCode).toBe(400)
		})
	})

	describe("GET /api/listSchools", () => {
		it("should return sorted schools", async () => {
			const response = await request(app).get("/api/listSchools").query({
				latitude: 19.076,
				longitude: 72.8777,
			})

			expect(response.statusCode).toBe(200)

			expect(response.body.success).toBe(true)

			expect(Array.isArray(response.body.data)).toBe(true)
		})

		it("should fail when coordinates are missing", async () => {
			const response = await request(app).get("/api/listSchools")

			expect(response.statusCode).toBe(400)
		})
	})
})

afterAll(async () => {
	await db.end()
})
