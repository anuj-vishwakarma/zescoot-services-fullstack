# Zescoot Services Fullstack

A full-stack bike rental service platform built to simplify online scooter/bike booking, rental management, and customer interactions.  
This project demonstrates a complete full-stack architecture using Java Servlets, JDBC, MySQL, and a modern frontend.

## Repository
https://github.com/anuj-vishwakarma/zescoot-services-fullstack

---

# 🚀 Features

## User Features
- ## Responsive User Interface
  
  <img width="1919" height="1079" alt="image" src="https://github.com/user-attachments/assets/020d30b2-4618-4a00-990c-1d41f2abbdd1" />

- ## User Registration & Login

  <img width="1918" height="1078" alt="image" src="https://github.com/user-attachments/assets/1af1369b-be80-4d11-9449-73b673930fa6" />

  <img width="1919" height="1079" alt="image" src="https://github.com/user-attachments/assets/7bf291f4-67f0-45a0-97b1-1bc950b23711" />
- ## Rich Dashboard

  <img width="1903" height="975" alt="image" src="https://github.com/user-attachments/assets/67648a7e-30a0-418f-a5a4-ed98d4850c09" />

- ## Secure Authentication
    
- ## Browse Available Bikes/Scooters

<img width="1901" height="966" alt="image" src="https://github.com/user-attachments/assets/0aaf0e31-226b-4139-901c-0569802a7656" />

  
- ## View Vehicle Details
-   
- ## Online Booking System
- 
- ## Booking History
- 
  <img width="1897" height="970" alt="image" src="https://github.com/user-attachments/assets/9d1b8208-0625-4555-8ddb-57e5f581f89d" />
- ## Booking Reports

  <img width="1901" height="967" alt="image" src="https://github.com/user-attachments/assets/9f5b298d-b38d-43bd-8452-dace1a78fad7" />
- ## Settings

<img width="1899" height="968" alt="image" src="https://github.com/user-attachments/assets/0cba778d-7aee-47a9-b39c-28d684bec3e9" />


---

## Admin Features
- Add/Edit/Delete Vehicles
- Manage Bookings
- Manage Users
- Booking Status Updates
- Admin Dashboard

---

# 🛠️ Tech Stack

## Frontend
- HTML
- CSS
- JavaScript

---

## Backend
- Java Servlets
- JDBC
- Apache Tomcat Server

---

## Database
- MySQL

---

## Tools & Platforms
- Git
- GitHub
- IntelliJ IDEA
- Apache Tomcat
- Maven *(if used)*

---

# 📂 Project Structure

```bash
zescoot-services-fullstack/
│
├── backend/
│   ├── src/
│   │   ├── controller/
│   │   ├── dao/
│   │   ├── model/
│   │   ├── utility/
│   │   └── servlet/
│   │
│   ├── WebContent/
│   └── web.xml
│
├── frontend/
│   ├── public/
│   ├── src/
│   ├── components/
│   ├── pages/
│   └── services/
│
├── database/
│   └── schema.sql
│
├── screenshots/
│
└── README.md
```

---

# ⚙️ Installation & Setup

## 1️⃣ Clone the Repository

```bash
git clone https://github.com/anuj-vishwakarma/zescoot-services-fullstack.git
```

---

## 2️⃣ Navigate to the Project Directory

```bash
cd zescoot-services-fullstack
```

---

# 🗄️ Database Setup

## Create MySQL Database

```sql
CREATE DATABASE zescoot;
```

---

## Import SQL File

Import the provided SQL schema file:

```bash
database/schema.sql
```

---

## Configure Database Connection

Update your JDBC configuration file:

```java
String url = "jdbc:mysql://localhost:3306/zescoot";
String username = "YOUR_USERNAME";
String password = "YOUR_PASSWORD";
```

---

# 🖥️ Backend Setup (Servlet + Tomcat)

## Requirements
- JDK 8 or above
- Apache Tomcat Server
- MySQL Server

---

## Configure Tomcat Server

1. Download and install Apache Tomcat
2. Open IntelliJ IDEA
3. Configure Tomcat Server:
   - Go to:
     ```text
     Run → Edit Configurations
     ```
   - Add new configuration:
     ```text
     Tomcat Server → Local
     ```
   - Select Tomcat installation directory
   - Deploy the backend project artifact

---

## Add MySQL JDBC Driver

Download MySQL Connector/J and place it inside:

```text
WEB-INF/lib/
```

Or add it using Maven dependency if Maven is used.

---

## Run Backend Server

Start the Tomcat server from IntelliJ IDEA.

Backend will run on:

```bash
http://localhost:8080/
```

---

# 💻 Frontend Setup

## Install Dependencies

```bash
npm install
```

---

## Run Frontend

```bash
npm start
```

Frontend will run on:

```bash
http://localhost:3000
```

---

# 🔐 Authentication Flow

- User registers using email/password
- Credentials validated through Servlets
- JDBC handles database interaction
- Session management used for authentication
- Protected routes accessible after login

---

# 📡 API Endpoints

## Authentication APIs

| Method | Endpoint | Description |
|---|---|---|
| POST | `/login` | User login |
| POST | `/register` | User registration |
| GET | `/logout` | Logout user |

---

## Vehicle APIs

| Method | Endpoint | Description |
|---|---|---|
| GET | `/vehicles` | Get all vehicles |
| GET | `/vehicle?id=1` | Get vehicle details |
| POST | `/addVehicle` | Add vehicle |
| POST | `/updateVehicle` | Update vehicle |
| GET | `/deleteVehicle?id=1` | Delete vehicle |

---

## Booking APIs

| Method | Endpoint | Description |
|---|---|---|
| POST | `/bookVehicle` | Create booking |
| GET | `/myBookings` | User bookings |
| POST | `/updateBooking` | Update booking status |

---

# 🧠 System Design Overview

## Frontend
Handles:
- User Interface
- API Calls
- Form Validation
- Authentication State

---

## Backend
Handles:
- Servlet Request Processing
- Business Logic
- JDBC Database Operations
- Session Management

---

## Database
Stores:
- Users
- Vehicles
- Bookings
- Rental Records

---

# 📸 Screenshots

Add screenshots inside the `screenshots/` folder.

Example:

```markdown
![Home Page](screenshots/home.png)
![Dashboard](screenshots/dashboard.png)
![Booking Page](screenshots/booking.png)
```

---

# 🌟 Future Improvements

- JWT Authentication
- Payment Gateway Integration
- Email Notifications
- Role-Based Access Control
- Real-Time Vehicle Tracking
- Docker Deployment
- Cloud Hosting
- Mobile Application

---

# 🧪 Testing

## Backend Testing

Test APIs using:
- Postman
- Browser
- Frontend Integration

---

## Frontend Testing

```bash
npm test
```

---

# 🚀 Deployment

## Backend Deployment
- Export WAR file
- Deploy WAR on Apache Tomcat server

---

## Frontend Deployment

Build production frontend:

```bash
npm run build
```

---

# 🤝 Contributing

Contributions are welcome.

## Steps
1. Fork the repository
2. Create a new branch
3. Commit changes
4. Push to branch
5. Create Pull Request

---

# 👨‍💻 Author

## Anuj Vishwakarma

- GitHub: https://github.com/anuj-vishwakarma
- Repository: https://github.com/anuj-vishwakarma/zescoot-services-fullstack

---

# 📄 License

This project is licensed under the MIT License.

---

# ⭐ Support

If you liked this project:
- Star the repository
- Fork the project
- Share it with others

---

# 📬 Contact

For collaboration or queries:

- GitHub: https://github.com/anuj-vishwakarma
- Email: mail.anujvishwakarma@gmail.com
