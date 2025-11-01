# 🎫 Flyora Booking Service

A microservice responsible for handling flight bookings in the Flyora Airline Booking System. This service manages the entire booking lifecycle, from creation to cancellation, while ensuring transactional integrity and proper state management.

## 🎯 Features

- Create and manage flight bookings
- Handle booking status transitions (INITIATED → PENDING → BOOKED/CANCELLED)
- Validate seat availability with Flights Service
- Process booking payments
- Send booking notifications via RabbitMQ
- Implement idempotency for booking operations
- Schedule booking cleanup for abandoned transactions

## 🏗️ Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MySQL
- **ORM**: Sequelize
- **Message Queue**: RabbitMQ (amqplib)
- **HTTP Client**: Axios
- **Logging**: Winston
- **Scheduling**: node-cron
- **Development**: Nodemon

## 📁 Project Structure

```
booking-service/
├── src/
│   ├── config/           # Configuration files
│   │   ├── config.json   # Database configuration
│   │   ├── logger-config.js
│   │   ├── queue-config.js
│   │   └── server-config.js
│   ├── controllers/      # Request handlers
│   │   ├── booking-controller.js
│   │   └── info-controller.js
│   ├── middlewares/     # Custom middlewares
│   ├── migrations/      # Database migrations
│   ├── models/         # Database models
│   │   └── booking.js
│   ├── repositories/   # Database operations
│   │   ├── booking-repository.js
│   │   └── crud-repository.js
│   ├── routes/        # API routes
│   │   └── v1/
│   ├── services/      # Business logic
│   │   └── booking-service.js
│   └── utils/        # Helper functions
│       ├── common/
│       ├── errors/
│       └── helpers/
├── .env
└── package.json
```

## 📝 Booking Model

The service uses the following schema for bookings:

```javascript
{
  flightId: Integer,     // Reference to the flight
  userId: Integer,       // User making the booking
  status: Enum,         // INITIATED, PENDING, BOOKED, CANCELLED
  noOfSeats: Integer,   // Number of seats booked
  totalCost: Integer    // Total cost of booking
}
```

## 🚀 Setup and Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/collab-rishi/Flyora.git
   cd Flyora/booking-service
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Configure Environment**
   Create a `.env` file with:

   ```env
   PORT=3002
   DB_HOST=localhost
   DB_USER=root
   DB_PASSWORD=your_password
   DB_NAME=flyora_bookings
   DB_DIALECT=mysql

   FLIGHT_SERVICE_URL=http://localhost:3000
   RABBITMQ_URL=amqp://localhost
   ```

4. **Database Setup**

   ```bash
   npx sequelize-cli db:create
   npx sequelize-cli db:migrate
   ```

5. **Start the Service**
   ```bash
   npm run dev
   ```

## 🔄 API Endpoints

### Booking Management

- **Create Booking**

  ```http
  POST /api/v1/bookings
  ```

  ```json
  {
    "flightId": 1,
    "noOfSeats": 2
  }
  ```

- **Get Booking Details**

  ```http
  GET /api/v1/bookings/:id
  ```

- **Cancel Booking**
  ```http
  PATCH /api/v1/bookings/:id/cancel
  ```

## 🔄 Booking Status Flow

```
INITIATED → PENDING → BOOKED/CANCELLED
```

- **INITIATED**: Initial booking request received
- **PENDING**: Payment in progress
- **BOOKED**: Payment successful, seats confirmed
- **CANCELLED**: Booking cancelled or payment failed

## 📡 Inter-Service Communication

- **Flights Service**: Validates seat availability and updates seat count
- **Notification Service**: Sends booking confirmation/cancellation emails
- **API Gateway**: Handles authentication and routes requests

## ⚙️ Configuration

### Database Configuration (config/config.json)

```json
{
  "development": {
    "username": "root",
    "password": "your_password",
    "database": "flyora_bookings",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
```

## 🏃‍♂️ Running in Development

```bash
npm run dev
```

The service will start on the configured port (default: 3002).

## 🧪 Testing

```bash
# TODO: Add test commands once implemented
```

## 🔍 Logging

The service uses Winston for logging. Logs are categorized as:

- INFO: General operational logs
- ERROR: Error logs with stack traces
- DEBUG: Detailed debugging information

## 🔐 Security

- Input validation for all endpoints
- Transaction isolation for booking operations
- Idempotency keys for payment operations
- Rate limiting (via API Gateway)

## 📜 License

This project is licensed under the ISC License.
