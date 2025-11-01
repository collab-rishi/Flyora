# 📧 Flyora Notification Service

A microservice responsible for handling all email notifications in the Flyora Airline Booking System. This service processes email requests via message queues and manages the email delivery lifecycle.

## 🎯 Features

- Asynchronous email processing via RabbitMQ
- Email template management
- Booking confirmation notifications
- Flight schedule change alerts
- Ticket status tracking
- Retry mechanism for failed emails
- Email delivery status monitoring

## 🏗️ Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MySQL
- **ORM**: Sequelize
- **Message Queue**: RabbitMQ (amqplib)
- **Email Service**: Nodemailer
- **Logging**: Winston
- **Development**: Nodemon

## 📁 Project Structure

```
notification-service/
├── src/
│   ├── config/           # Configuration files
│   │   ├── config.json   # Database configuration
│   │   ├── email-config.js
│   │   ├── logger-config.js
│   │   └── server-config.js
│   ├── controllers/      # Request handlers
│   │   ├── email-controller.js
│   │   └── info-controller.js
│   ├── middlewares/     # Custom middlewares
│   ├── migrations/      # Database migrations
│   ├── models/         # Database models
│   │   └── ticket.js   # Email ticket model
│   ├── repositories/   # Database operations
│   │   ├── ticket-repository.js
│   │   └── crud-repository.js
│   ├── routes/        # API routes
│   │   └── v1/
│   ├── services/      # Business logic
│   │   └── email-service.js
│   └── utils/        # Helper functions
│       ├── common/
│       ├── errors/
│       └── helpers/
├── .env
└── package.json
```

## 📝 Ticket Model

The service uses the following schema for email tickets:

```javascript
{
  subject: String,        // Email subject
  content: String,        // Email content/body
  recepientEmail: String, // Recipient's email address
  status: Enum           // PENDING, SUCCESS, FAILED
}
```

## 🚀 Setup and Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/collab-rishi/Flyora.git
   cd Flyora/notification-service
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Configure Environment**
   Create a `.env` file with:

   ```env
   PORT=3003
   DB_HOST=localhost
   DB_USER=root
   DB_PASSWORD=your_password
   DB_NAME=flyora_notifications
   DB_DIALECT=mysql

   RABBITMQ_URL=amqp://localhost

   EMAIL_HOST=smtp.gmail.com
   EMAIL_PORT=587
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-app-specific-password
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

## 📨 Message Queue Topics

The service listens to the following RabbitMQ queues:

- `BOOKING_CONFIRMATION`: New booking notifications
- `BOOKING_CANCELLATION`: Booking cancellation notifications
- `FLIGHT_UPDATE`: Flight schedule change notifications

## 🔄 Email Processing Flow

```
Message Queue → Email Generation → Send Attempt → Status Update
```

- **Message Reception**: Receive notification request from queue
- **Ticket Creation**: Create a new email ticket record
- **Email Processing**: Generate and send email
- **Status Update**: Update ticket status based on delivery result
- **Retry Mechanism**: Retry failed emails based on configuration

## 📧 Email Templates

The service supports various email templates for different scenarios:

- Booking confirmation
- Booking cancellation
- Flight schedule changes
- Payment confirmations
- System alerts

## 🔍 Logging

The service uses Winston for logging with the following categories:

- INFO: General operational logs
- ERROR: Email delivery failures and errors
- DEBUG: Detailed processing information

## ⚙️ Configuration

### Email Configuration (config/email-config.js)

```javascript
{
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_PORT,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
}
```

### Database Configuration (config/config.json)

```json
{
  "development": {
    "username": "root",
    "password": "your_password",
    "database": "flyora_notifications",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
```

## 🏃‍♂️ Running in Development

```bash
npm run dev
```

The service will start on the configured port (default: 3003).

## 🧪 Testing

```bash
# TODO: Add test commands once implemented
```

## 🔐 Security

- Email authentication using secure SMTP
- Environment variable protection
- Input validation for email addresses
- Rate limiting for email sending
- Queue message validation

## 🔍 Monitoring

The service tracks:

- Email delivery rates
- Queue processing metrics
- Failed email statistics
- Retry attempts
- System performance

## 📜 License

This project is licensed under the ISC License.
