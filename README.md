# School Management API

A RESTful API built using Node.js, Express.js, and MySQL for managing school data.

The API allows users to:

- Add schools
- Retrieve schools sorted by geographical proximity

---

## Features

- Add School API
- List Schools API
- MySQL database integration
- Haversine distance calculation
- Input validation using express-validator
- Environment variable support
- Modular project structure

---

## Tech Stack

- Node.js
- Express.js
- MySQL
- mysql2
- express-validator
- dotenv
- Render

---

## Project Structure

```text
.
├── controllers/
├── database/
├── queries/
├── routes/
├── screenshots/
├── tests/
├── utils/
├── .env.example
├── .gitignore
├── app.js
├── jest.config.js
├── LICENSE
├── package.json
├── README.md
├── School Management API.postman_collection.json
└── server.js
```

---

## Installation

### Clone Repository

```bash
git clone https://github.com/code-kasha/school_management_api
```

```bash
cd school_management_api
```

### Install Dependencies

```bash
npm install
```

---

## Environment Variables

Create a `.env` file:

```env
PORT=5000
ENVIRONMENT=development

DB_HOST=localhost
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=school_management
DB_PORT=3306
```

---

## Database Schema

```sql
CREATE TABLE schools (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    address VARCHAR(255) NOT NULL,
    latitude FLOAT NOT NULL,
    longitude FLOAT NOT NULL
);
```

---

## Running the Server

### Development

```bash
npm run dev
```

### Production

```bash
npm start
```

---

# API Documentation

## Base URL

```text
http://localhost:5000
```

---

## Add School

### Endpoint

```http
POST /api/addSchool
```

### Request Body

```json
{
	"name": "ABC Public School",
	"address": "Mumbai, Maharashtra",
	"latitude": 19.076,
	"longitude": 72.8777
}
```

### Success Response

```json
{
	"success": true,
	"message": "School Added"
}
```

---

## List Schools

### Endpoint

```http
GET /api/listSchools?latitude=19.0760&longitude=72.8777
```

### Success Response

```json
{
	"success": true,
	"count": 2,
	"data": [
		{
			"id": 1,
			"name": "ABC Public School",
			"address": "Mumbai",
			"latitude": 19.076,
			"longitude": 72.8777,
			"distance_km": 0
		}
	]
}
```

---

## Deployment

Deployed using Render.

> **Note:** The deployed API may take a few seconds to respond on the first request due to Render free-tier cold starts.

---

## Postman Collection

Import the included Postman collection:

```text
School_Management_API.postman_collection.json
```

---

## License

MIT License
