# 🛫 Flights Service — Airline Booking System  

## 📘 Overview  
The **Flights Service** is a core microservice in the **Airline Booking System**, responsible for managing **airplanes, cities, airports, and flights**.  
It provides RESTful APIs consumed by other services like the **Booking Service**, **API Gateway**, and **Reminder Service**.  

Built with **Node.js**, **Express**, **MySQL**, and **Sequelize**, the service follows clean modular architecture to ensure scalability and maintainability.  

---

## 🧩 Key Features  
- ✈️ **Flight Management** — Create, update, delete, and fetch flight details.  
- 🏙 **City & Airport Management** — Manage cities and airports with proper relations.  
- 🧮 **Seat Tracking** — Manage available seat count per flight.  
- 🧱 **ORM Data Modeling** — Sequelize-based relational mapping.  
- 🔄 **Inter-Service Communication** — Exposes APIs used by Booking and Reminder services.  
- ⚙️ **Scalable Architecture** — Modular and testable components for future growth.  

---

## 🏗️ Tech Stack  

| Layer | Technology |
|-------|-------------|
| Runtime | Node.js (v18+) |
| Framework | Express.js |
| ORM | Sequelize |
| Database | MySQL |
| Validation | Express Middlewares |
| Testing | Jest / Supertest (optional) |
| API Architecture | RESTful |
| Authentication | Handled via API Gateway |
| Communication | HTTP (internal microservice calls) |

---

## 🧠 Project Structure  

```
flights-service/
├── src/
│ ├── config/
│ │ └── config.js
│ ├── controllers/
│ │ ├── AirplaneController.js
│ │ ├── AirportController.js
│ │ ├── CityController.js
│ │ ├── FlightController.js
│ │ └── InfoController.js
│ ├── middlewares/
│ ├── models/
│ ├── repositories/
│ ├── routes/
│ ├── services/
│ ├── utils/
│ └── index.js
├── .env
├── package.json
├── README.md
└── sequelize.config.js

```


## 🚀 API Endpoints

### Airplanes

| Method   | Endpoint                | Description             |
| -------- | ----------------------- | ----------------------- |
| `POST`   | `/api/v1/airplanes`     | Create a new airplane   |
| `GET`    | `/api/v1/airplanes`     | Get all airplanes       |
| `GET`    | `/api/v1/airplanes/:id` | Get airplane by ID      |
| `PATCH`  | `/api/v1/airplanes/:id` | Update airplane details |
| `DELETE` | `/api/v1/airplanes/:id` | Delete an airplane      |

### Cities


| Method   | Endpoint             | Description    |
| -------- | -------------------- | -------------- |
| `POST`   | `/api/v1/cities`     | Create a city  |
| `GET`    | `/api/v1/cities`     | Get all cities |
| `GET`    | `/api/v1/cities/:id` | Get city by ID |
| `PATCH`  | `/api/v1/cities/:id` | Update a city  |
| `DELETE` | `/api/v1/cities/:id` | Delete a city  |

###  Airports


| Method   | Endpoint               | Description            |
| -------- | ---------------------- | ---------------------- |
| `POST`   | `/api/v1/airports`     | Create an airport      |
| `GET`    | `/api/v1/airports`     | Get all airports       |
| `GET`    | `/api/v1/airports/:id` | Get airport by ID      |
| `PATCH`  | `/api/v1/airports/:id` | Update airport details |
| `DELETE` | `/api/v1/airports/:id` | Delete an airport      |


### Flights


| Method  | Endpoint                    | Description                          |
| ------- | --------------------------- | ------------------------------------ |
| `POST`  | `/api/v1/flights`           | Create a new flight                  |
| `GET`   | `/api/v1/flights`           | Get all flights (supports filtering) |
| `GET`   | `/api/v1/flights/:id`       | Get flight by ID                     |
| `PATCH` | `/api/v1/flights/:id/seats` | Update available seats               |


## Database Relationships

- City ↔ Airport — One-to-Many

- Airport ↔ Flight — One-to-Many (departure & arrival)

- Airplane ↔ Flight — One-to-Many

- Airplane ↔ Seat — One-to-Many


## Inter-Service Communication

| Service              | Purpose                                                       |
| -------------------- | ------------------------------------------------------------- |
| **API Gateway**      | Routes and secures requests via JWT & RBAC                    |
| **Booking Service**  | Consumes flight APIs for seat validation and booking creation |
| **Reminder Service** | Triggers email notifications for upcoming flights             |



## Best Practices Implemented

- MVC + Service + Repository Architecture

- Centralized Error Handling

- Validation Middleware

- Database Transactions

- Clean REST Design

- Environment-based Configuration

- Sequelize ORM Associations



## ⚙️ Setup and Installation

### 1️⃣ Clone the Repository
 - Clone the repository.

 ### 2️⃣ Install Dependencies
 - Go inside the folder path and execute the following command:
  ```
  npm install
  ```
### 3️⃣ Configure Environment Variables
- Create a .env file in the project root:
```
PORT=your_port
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=flights_service_db
DB_DIALECT=mysql
```
### 4️⃣ Run Database Migrations
```
npx sequelize db:migrate
```

### 5️⃣ Start the Server

 - To run the server execute
 ```
 npm run dev
 ```

 Server runs at 👉 http://localhost:{your_port}/api/v1/

 ## 👨‍💻 Author

Rishi
@collab-rishi

Backend Developer | Node.js | Express | Microservices | SQL | System Design
