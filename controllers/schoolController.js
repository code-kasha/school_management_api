import db from "../utils/db.js"

import { validationResult } from "express-validator"
import calculateDistance from "../utils/distance.js"

import addSchoolQ from "../queries/addSchool.js"
import getSchoolsQ from "../queries/getSchools.js"

export async function addSchool(request, response) {
	try {
		const errors = validationResult(request)
		if (!errors.isEmpty()) {
			return response.status(400).json({
				success: false,
				errors: errors.array(),
			})
		}

		const { name, address, latitude, longitude } = request.body

		await db.execute(addSchoolQ, [name, address, latitude, longitude])

		return response.status(201).json({
			success: true,
			message: "School Added",
		})
	} catch (error) {
		return response.status(500).json({
			success: false,
			message: error.message,
		})
	}
}

export async function listSchools(request, response) {
	try {
		const userLatitude = parseFloat(request.query.latitude)
		const userLongitude = parseFloat(request.query.longitude)

		if (isNaN(userLatitude) || isNaN(userLongitude)) {
			return response.status(400).json({
				success: false,
				message: "Invalid Latitude/Longitude Value.",
			})
		}

		const [schools] = await db.execute(getSchoolsQ)
		const sortedSchools = schools
			.map((school) => {
				const distance = calculateDistance(
					userLatitude,
					userLongitude,
					school.latitude,
					school.longitude,
				)

				return { ...school, distance_km: Number(distance.toFixed(2)) }
			})
			.sort((a, b) => a.distance_km - b.distance_km)

		return response.status(200).json({
			success: true,
			count: sortedSchools.length,
			data: sortedSchools,
		})
	} catch (error) {
		return response.status(500).json({
			success: false,
			message: error.message,
		})
	}
}
