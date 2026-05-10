import express from "express"
import { body } from "express-validator"

import { addSchool, listSchools } from "../controllers/schoolController.js"

const router = express.Router()

const schoolValidation = [
	body("name").trim().notEmpty().withMessage("Name is Required"),

	body("address").trim().notEmpty().withMessage("Address is required"),

	body("latitude")
		.isFloat({
			min: -90,
			max: 90,
		})
		.withMessage("Valid latitude required"),

	body("longitude")
		.isFloat({
			min: -180,
			max: 180,
		})
		.withMessage("Valid longitude required"),
]

router.post("/addSchool", schoolValidation, addSchool)

router.get("/listSchools", listSchools)

export default router
