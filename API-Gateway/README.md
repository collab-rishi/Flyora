# 🚪 Flyora API Gateway

The API Gateway service for the Flyora Airline Booking System. This service acts as the entry point for all client requests, handling authentication, authorization, request routing, and user management with role-based access control.

## 🎯 Features

- User authentication and management
- Role-based access control (RBAC)
- Request routing to microservices
- Rate limiting
- Request/Response transformation
- Error handling
- Logging and monitoring
- Security middleware

## 🏗️ Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MySQL
- **ORM**: Sequelize
- **Authentication**: JWT, bcrypt
- **Proxy**: http-proxy-middleware
- **Rate Limiting**: express-rate-limit
- **Logging**: Winston
- **Development**: Nodemon

## 📁 Project Structure

```
API-Gateway/
├── src/
│   ├── config/           # Configuration files
│   │   ├── config.json   # Database configuration
│   │   ├── logger-config.js
│   │   └── server-config.js
│   ├── controllers/      # Request handlers
│   │   ├── user-controller.js
│   │   └── info-controller.js
│   ├── middlewares/     # Custom middlewares
│   │   └── auth-request-middlewares.js
│   ├── migrations/      # Database migrations
│   ├── models/         # Database models
│   │   ├── user.js
│   │   ├── role.js
│   │   └── user_role.js
│   ├── repositories/   # Database operations
│   │   ├── user-repository.js
│   │   └── role-repository.js
│   ├── routes/        # API routes
│   │   └── v1/
│   ├── seeders/      # Database seeders
│   ├── services/     # Business logic
│   │   └── user-service.js
│   └── utils/       # Helper functions
│       ├── common/
│       ├── errors/
│       └── helpers/
├── .env
└── package.json
```

## 🔑 User and Role Models

### User Model

```javascript
{
  email: String,     // Unique email, validated
  password: String,  // Hashed using bcrypt
  roles: [Role]      // Many-to-many relationship
}
```

### Role Model

```javascript
{
  name: Enum[("ADMIN", "CUSTOMER", "FLIGHT_COMPANY")];
}
```

## 🚀 Setup and Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/collab-rishi/Flyora.git
   cd Flyora/API-Gateway
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Configure Environment**
   Create a `.env` file with:

   ```env
   PORT=3001
   DB_HOST=localhost
   DB_USER=root
   DB_PASSWORD=your_password
   DB_NAME=flyora_gateway
   DB_DIALECT=mysql

   JWT_SECRET=your-secret-key
   SALT_ROUNDS=10

   FLIGHT_SERVICE_URL=http://localhost:3000
   BOOKING_SERVICE_URL=http://localhost:3002
   NOTIFICATION_SERVICE_URL=http://localhost:3003
   ```

4. **Database Setup**

   ```bash
   npx sequelize-cli db:create
   npx sequelize-cli db:migrate
   npx sequelize-cli db:seed:all
   ```

5. **Start the Service**
   ```bash
   npm run dev
   ```

## 🔄 API Endpoints

### Authentication & User Management

- **User Registration**

  ```http
  POST /api/v1/users/signup
  ```

  ```json
  {
    "email": "user@example.com",
    "password": "securepass",
    "roleId": 2
  }
  ```

- **User Login**

  ```http
  POST /api/v1/users/signin
  ```

  ```json
  {
    "email": "user@example.com",
    "password": "securepass"
  }
  ```

- **Get User Profile**
  ```http
  GET /api/v1/users/:id
  ```

### Service Routes

- **Flights Service**: `/api/v1/flights/*`
- **Booking Service**: `/api/v1/bookings/*`
- **Notification Service**: `/api/v1/notifications/*`

## 🛡️ Role-Based Access Control

The system supports three user roles:

1. **ADMIN**

   - Full system access
   - User management
   - Role management
   - System monitoring

2. **CUSTOMER**

   - Flight search
   - Booking management
   - Profile management

3. **FLIGHT_COMPANY**
   - Flight management
   - Schedule management
   - Seat inventory

## 🔒 Security Features

- Password hashing with bcrypt
- JWT-based authentication
- Rate limiting per IP/user
- Request validation
- CORS protection
- Error handling middleware

## ⚙️ Configuration

### Database Configuration (config/config.json)

```json
{
  "development": {
    "username": "root",
    "password": "your_password",
    "database": "flyora_gateway",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
```

## 🔍 Logging

The service uses Winston for logging with the following categories:

- INFO: General operational logs
- ERROR: Authentication failures and errors
- DEBUG: Detailed request/response information

## 🏃‍♂️ Running in Development

```bash
npm run dev
```

The service will start on the configured port (default: 3001).

## 🧪 Testing

```bash
# TODO: Add test commands once implemented
```

## 📊 Monitoring

The gateway tracks:

- Request rates and patterns
- Authentication attempts
- Error rates
- Service health
- Response times

## 🔐 Security Best Practices

1. Use HTTPS in production
2. Implement proper rate limiting
3. Validate all input data
4. Sanitize response data
5. Regular security audits
6. Keep dependencies updated

## 📜 License

This project is licensed under the ISC License.
