# alx-webstack-portfolio-project
# E-commerce Website for Computer Items

This project is an e-commerce website designed to sell computer items and accept payments in Litecoin. It is built with React for the frontend and Node.js for the backend.

## Table of Contents
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Setup Instructions](#setup-instructions)
- [Project Structure](#project-structure)
- [Usage Guidelines](#usage-guidelines)
- [Future Enhancements](#future-enhancements)

---

## Features

### Frontend
- Dynamic product listing.
- Search and filter functionality.
- Shopping cart with add/remove/update functionality.
- Responsive design.

### Payment Integration
- Litecoin payment support using Coinbase Commerce API.

### Backend
- RESTful API for products and orders.
- User authentication.
- Order and inventory management.

---

## Tech Stack

### Frontend
- React
- React Router
- Axios
- Bootstrap

### Backend
- Node.js (Express)
- PostgreSQL (Sequelize ORM)
- Coinbase Commerce API

---

## Setup Instructions

### Prerequisites
1. Install [Node.js](https://nodejs.org/).
2. Install [PostgreSQL](https://www.postgresql.org/).
3. Clone the repository:
   ```bash
   git clone <repository-url>
   cd ecommerce-site
   ```

### Frontend Setup
1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```

### Backend Setup
1. Navigate to the backend directory:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up environment variables in a `.env` file:
   ```env
   DATABASE_URL=postgres://<username>:<password>@localhost:5432/<database_name>
   COINBASE_API_KEY=<your-coinbase-api-key>
   ```
4. Run database migrations (if using Sequelize):
   ```bash
   npx sequelize-cli db:migrate
   ```
5. Start the server:
   ```bash
   npm start
   ```

---

## Project Structure

```
ecommerce-site/
├── frontend/
│   ├── public/            # Static assets
│   ├── src/               # Main application code
│   │   ├── components/    # Reusable components
│   │   ├── pages/         # Page components
│   │   ├── App.js         # Root component
│   │   └── index.js       # Entry point
│   ├── package.json       # Frontend dependencies
├── backend/
│   ├── models/            # Database models
│   ├── routes/            # API routes
│   ├── controllers/       # Logic for API endpoints
│   ├── server.js          # Server entry point
│   ├── package.json       # Backend dependencies
├── README.md              # Project documentation
└── ...
```

---

## Usage Guidelines

### Starting the Application
1. Run both the frontend and backend servers.
2. Access the application at `http://localhost:3000`.

### Testing Payments
Use Coinbase Commerce's test mode to simulate Litecoin payments without real transactions.

---

## Future Enhancements
- Add user authentication with JWT.
- Implement advanced filtering and sorting for products.
- Add order tracking and notifications.
- Integrate real-time Litecoin price conversions.

---

Feel free to contribute by submitting pull requests or reporting issues!
