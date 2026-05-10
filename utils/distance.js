function toRadians(degrees) {
	return degrees * (Math.PI / 180)
}

function calculateDistance(latitude1, longitude1, latitude2, longitude2) {
	const earthRadius = 6371

	const diffLatitude = toRadians(latitude2 - latitude1)
	const diffLongitude = toRadians(longitude2 - longitude1)

	const haversineLatS = Math.sin(diffLatitude / 2) * Math.sin(diffLatitude / 2)
	const haversineLatC =
		Math.cos(toRadians(latitude1)) * Math.cos(toRadians(latitude2))
	const haversineLon = Math.sin(diffLongitude / 2) * Math.sin(diffLongitude / 2)

	const haversineA = haversineLatS + haversineLatC * haversineLon

	const centralAngle =
		2 * Math.atan2(Math.sqrt(haversineA), Math.sqrt(1 - haversineA))

	const distanceInKilometers = earthRadius * centralAngle

	return distanceInKilometers
}

export default calculateDistance
