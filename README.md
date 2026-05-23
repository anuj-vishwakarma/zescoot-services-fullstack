# Zescoot Services Fullstack

A full-stack desktop-based bike rental and service management system built using **JavaFX**, **Java Servlets**, **JDBC**, and **MySQL**.

The project provides a complete platform for managing vehicle rentals, customer bookings, service operations, and backend data handling through a modern desktop interface.

---

## 🚀 Features

### 👤 User Features
- User Registration & Login
- Browse available bikes/scooters
- Book rental vehicles
- View booking details
- Rental price calculation
- Vehicle availability tracking
- Service request management

### 🛠️ Admin Features
- Add / Update / Delete vehicles
- Manage customer bookings
- Track rental history
- Manage service requests
- Database-driven vehicle inventory management
- User management system

---

## 🏗️ Tech Stack

### Frontend
- JavaFX
- Scene Builder

### Backend
- Java Servlets
- JDBC

### Database
- MySQL

### Server
- Apache Tomcat

---

## ⚙️ System Architecture

```text
JavaFX Desktop UI
        ↓
    Servlets
        ↓
      JDBC
        ↓
     MySQL
```

---

## 📂 Project Modules

### 1. Authentication Module
- Login system
- Registration system
- Session handling

### 2. Vehicle Management Module
- Add vehicles
- Update vehicle details
- Delete vehicles
- Availability management

### 3. Booking Module
- Create bookings
- Rental duration handling
- Pricing calculations

### 4. Service Management Module
- Vehicle servicing records
- Service status tracking

### 5. Database Module
- JDBC connection handling
- CRUD operations
- Query execution

---

## 🗄️ Database Design

### Main Tables
- `users`
- `vehicles`
- `bookings`
- `services`

### Relationships
- One user can create multiple bookings
- One vehicle can have multiple service records
- Bookings are linked with both users and vehicles

---

## 🧰 Tools & Technologies

- Java
- JavaFX
- Servlets
- JDBC
- MySQL
- Scene Builder
- IntelliJ IDEA / Eclipse
- Apache Tomcat

---

## 📦 Installation & Setup

### Prerequisites
- Java JDK 17+
- MySQL Server
- Apache Tomcat
- JavaFX SDK

---

### Clone Repository

```bash
git clone https://github.com/anuj-vishwakarma/zescoot-services-fullstack.git
```

---

### Database Setup

1. Create MySQL database:

```sql
CREATE DATABASE zescoot;
```

2. Import SQL tables.

3. Update database credentials in JDBC configuration.

---

### Run Backend

1. Configure Apache Tomcat
2. Deploy servlet project
3. Start Tomcat server

---

### Run Frontend

1. Open JavaFX project
2. Configure JavaFX SDK
3. Run the application

---

## 🔒 Security Features

- Authentication system
- Input validation
- JDBC Prepared Statements
- SQL Injection prevention

---

## 📈 Future Improvements

- Online payment integration
- Real-time vehicle tracking
- REST API migration
- Cloud deployment
- Mobile application support
- JWT authentication
- Microservices architecture

---

## 🎯 Learning Outcomes

This project demonstrates:
- Full-stack Java development
- Desktop application development using JavaFX
- Backend development with Servlets
- Database integration using JDBC
- CRUD operations
- MVC architecture understanding
- Client-server communication

---

## 👨‍💻 Author

**Anuj Vishwakarma**

GitHub: https://github.com/anuj-vishwakarma
