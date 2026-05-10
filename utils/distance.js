function toRadians(degrees) {
	return degrees * (Math.PI / 180)
}

function calculateDistance(latitude1, longitude1, latitude2, longitude2) {
	const earthRadius = 6371

	const diffLatitude = toRadians(latitude2 - latitude1)
	const diffLongitude = toRadians(longitude2 - longitude1)

	const harvesineLatS = Math.sin(diffLatitude / 2) * Math.sin(diffLatitude / 2)
	const harvesineLatC =
		Math.cos(toRadians(latitude1)) * Math.cos(toRadians(latitude2))
	const harvesineLon = Math.sin(diffLongitude / 2) * Math.sin(diffLongitude / 2)

	const harvesineA = harvesineLatS + harvesineLatC * harvesineLon

	const centralAngle =
		2 * Math.atan2(Math.sqrt(harvesineA), Math.sqrt(1 - harvesineA))

	const distanceInKilometers = earthRadius * centralAngle

	return distanceInKilometers
}

export default calculateDistance
