# Bike Store API

A Bike Store API developed using **Express** and **TypeScript**, with **MongoDB** integration via **Mongoose**. This API enables efficient management of bike products and customer orders, ensuring data integrity with robust schema validation.

---

## Table of Contents

- [Features](#features)
  - [Product Management](#product-management)
  - [Order Management](#order-management)
  - [Schema Validation](#schema-validation)
  - [Error Handling](#error-handling)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Configuration](#configuration)
- [API Endpoints](#api-endpoints)
  - [Product Endpoints](#product-endpoints)
  - [Order Endpoints](#order-endpoints)

---

## Features

### Product Management
- **Create** new bike products with required fields validation.
- **Retrieve**:
  - A list of all bikes.
  - Filtered results by category, name, or brand.
- **Get Details** of a specific bike by its ID.
- **Update**:
  - Bike information, including price and stock levels.
- **Delete** a bike from the database.

### Order Management
- **Place an Order**:
  - Automatic inventory updates upon order placement.
  - Prevents orders if the stock is insufficient.
- **Revenue Calculation**:
  - Computes total revenue from all orders using aggregation.

### Schema Validation
- Enforces strict rules for product and order properties:
  - e.g., price, category, stock levels.
  
### Error Handling
- Comprehensive responses for:
  - Validation errors.
  - Resource not found.
  - Server errors.

---

## Technologies Used

- **Node.js**: Backend JavaScript runtime.
- **Express**: Web framework for building APIs.
- **TypeScript**: Ensures type safety and robust code.
- **MongoDB**: NoSQL database for scalable storage.
- **Mongoose**: ODM for MongoDB with schema validation.
- **Dotenv**: For environment variable management.
# bike-store-backend
