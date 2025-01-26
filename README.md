# Anchor E-Commerce Site

This project is an e-commerce website built to provide an efficient shopping experience for computer products. The application is designed to facilitate Litecoin payments and features a modern tech stack.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Setup Instructions](#setup-instructions)
- [Project Structure](#project-structure)
- [Usage Guidelines](#usage-guidelines)
- [Future Enhancements](#future-enhancements)
- [Contributing](#contributing)
- [License](#license)

---

## Features

### User Features
- **Dynamic Product Catalog**: Browse through an array of computer products with detailed descriptions and pricing.
- **Search and Filter**: Easily find products using search and filter options.
- **Shopping Cart**: Add, update, and remove products dynamically.
- **Secure Authentication**: JWT-based sign-up, login, and logout functionalities.
- **Order History**: Track previous orders and view their statuses.

### Admin Features
- **Admin Dashboard**: Manage users, products, and orders efficiently.
- **Notifications**: Get updates on low inventory, pending orders, and user activities.

### Payment Integration
- **Litecoin Support**: Pay securely through integrated cryptocurrency payments.

---

## Tech Stack

### Frontend
- **React**: For building user interfaces.
- **React Router**: For client-side routing.
- **Axios**: For API requests.
- **Bootstrap**: For responsive design.

### Backend
- **Node.js**: JavaScript runtime for server-side development.
- **Express.js**: Web application framework for Node.js.
- **MongoDB**: NoSQL database for managing data.
- **JWT**: Secure token-based authentication.

### DevOps
- **Docker**: For containerized deployments.
- **Jenkins**: To automate CI/CD pipelines.
- **GitHub**: For version control and collaboration.

---

## Setup Instructions

### Prerequisites
- **Node.js** (v14 or later)
- **MongoDB** (v4.0 or later)
- **Docker** (optional for deployment)
- **Coinbase Commerce Account** (for Litecoin integration)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/shiftyshadows/anchor-e-commerce-site.git
   cd anchor-e-commerce-site
   ```

2. Install Backend Dependencies:
   ```bash
   cd server
   npm install
   ```

3. Configure Backend Environment Variables:
   Create a `.env` file in the `server` directory with the following variables:
   ```env
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   COINBASE_API_KEY=your_coinbase_api_key
   ```

4. Start the Backend Server:
   ```bash
   npm start
   ```

5. Install Frontend Dependencies:
   ```bash
   cd ../client
   npm install
   ```

6. Configure Frontend Environment Variables:
   Create a `.env` file in the `client` directory with:
   ```env
   REACT_APP_API_URL=http://localhost:5000
   ```

7. Start the Frontend Application:
   ```bash
   npm start
   ```

8. Open the Application:
   Navigate to `http://localhost:3000` in your browser.

---

## Project Structure

```
anchor-e-commerce-site/
├── client/                 # Frontend application
│   ├── public/
│   └── src/
│       ├── components/
│       ├── pages/
│       ├── services/
│       ├── App.js
│       └── index.js
├── server/                 # Backend application
│   ├── config/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── utils/
│   ├── app.js
├── .gitignore
├── README.md
└── package.json
```

---

## Usage Guidelines

1. **Sign Up or Sign In**:
   Users must register or log in to access personalized features.
2. **Browse Products**:
   Explore a variety of computer products and add desired items to the cart.
3. **Checkout**:
   Proceed to checkout and pay using Litecoin.
4. **Order Tracking**:
   Monitor the status of your past and current orders.

---

## Future Enhancements

- **Multiple Payment Options**: Support for more cryptocurrencies and traditional payment methods.
- **Order Notifications**: Real-time alerts for order updates.
- **Enhanced Admin Tools**: Analytics and better user management tools.
- **Mobile App**: Native applications for Android and iOS platforms.

---

## Contributing

We welcome contributions! Fork the repository, create a feature branch, and submit a pull request.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

