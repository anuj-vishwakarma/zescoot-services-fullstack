# Zescoot Services Fullstack

A full-stack web application for bike rental and service management built using **HTML, CSS, JavaScript, Java Servlets, JDBC, and MySQL**.

The platform provides secure authentication with **Google Login, OTP verification, and Phone Number Authentication** for a modern and user-friendly experience.

---

# 🚀 Features

## 👤 User Authentication
- Login & Signup system
- Google Authentication
- OTP Verification
- Phone Number Login
- Secure session handling

## 🏍️ Bike Rental System
- Browse available bikes
- View bike details
- Rent bikes online
- Booking management

## 🛠️ Service Management
- Book vehicle servicing
- Manage service requests
- Service status tracking

## 📱 Responsive Frontend
- Built using:
  - HTML
  - CSS
  - JavaScript
- Mobile-friendly UI

## ⚙️ Backend Functionality
- Java Servlets for request handling
- JDBC for database connectivity
- MySQL database integration
- CRUD operations support

---

# 🏗️ Tech Stack

## Frontend
- HTML5
- CSS3
- JavaScript

## Backend
- Java Servlets
- JDBC

## Database
- MySQL

## Authentication
- Google OAuth Login
- OTP Authentication
- Phone Number Verification

---

# 📂 Project Structure

```bash
zescoot-services-fullstack/
│
├── frontend/
│   ├── html/
│   ├── css/
│   ├── js/
│
├── backend/
│   ├── servlets/
│   ├── dao/
│   ├── models/
│   ├── database/
│
├── mysql/
│   ├── schema.sql
│
├── assets/
│
└── README.md
```

---

# 🧠 System Architecture

```text
Frontend (HTML/CSS/JS)
        ↓
Java Servlets
        ↓
JDBC
        ↓
MySQL Database
```

---

# 🔐 Authentication Flow

## Google Login
- User authenticates using Google OAuth
- Account is verified securely
- Session is created after successful login

## OTP & Phone Login
- User enters phone number
- OTP is sent for verification
- User gains access after OTP validation

---

# 💾 Database Functionalities

The application uses MySQL for:
- User data storage
- Booking records
- Service requests
- Authentication details
- Session-related information

---

# ⚡ Key Functionalities

- User Registration & Login
- Bike Listings
- Rental Booking
- Service Booking
- Database Connectivity using JDBC
- Authentication & Authorization
- Dynamic Data Handling
- Session Management

---

# 🛠️ Setup Instructions

## 1️⃣ Clone the Repository

```bash
git clone https://github.com/anuj-vishwakarma/zescoot-services-fullstack.git
```

---

## 2️⃣ Configure MySQL Database

Create a database:

```sql
CREATE DATABASE zescoot;
```

Import the SQL schema file.

---

## 3️⃣ Configure JDBC

Update database credentials inside the JDBC configuration file:

```java
String url = "jdbc:mysql://localhost:3306/zescoot";
String username = "root";
String password = "your_password";
```

---

## 4️⃣ Run the Project

Deploy the project on:
- Apache Tomcat Server

Then open:

```text
http://localhost:8080/zescoot
```

---

# 🎯 Future Improvements

- Payment Gateway Integration
- Admin Dashboard
- Real-time Booking Tracking
- Email Notifications
- JWT Authentication
- REST API Conversion
- React or Angular Frontend Migration

---



# 👨‍💻 Author

Created by **Anuj Vishwakarma**

## GitHub
- https://github.com/anuj-vishwakarma

## Repository
- https://github.com/anuj-vishwakarma/zescoot-services-fullstack

---

# ⭐ Conclusion

Zescoot is a complete full-stack web application demonstrating:
- Frontend development
- Backend development with Java
- Database integration using JDBC
- Authentication systems
- Real-world rental/service workflow implementation

This project showcases strong fundamentals of full-stack web development using Java-based technologies.
