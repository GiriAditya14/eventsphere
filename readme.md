# 🗓️ EventSphere – Full-Stack Event Management Platform

> 🏆 **Top 6 Finalist** – Arma Code 0, National Level Hackathon hosted by IISER Bhopal and IIIT Bhopal among 990+ participants

EventSphere is a full-stack MERN web application designed to streamline the end-to-end lifecycle of events—from creation and management to discovery and participation. Built in under 36 hours during a national-level hackathon, it offers a robust, secure, and user-friendly experience for both event organizers and attendees.

---

## 🚩 Problem Statement

In many organizations and institutions, managing events is still a fragmented process—organizers rely on spreadsheets, emails, and messaging groups while attendees struggle with poor discoverability and lack of real-time updates. There is no unified platform to create, manage, and participate in events with role-based accessibility.

**EventSphere** bridges this gap by providing an all-in-one event management platform with a clean UI, strong backend architecture, and dynamic interaction capabilities.

---

## ✨ Features

### 🔐 Authentication & Authorization
- Secure JWT-based authentication
- Passwords hashed using bcrypt
- Role-based access (Admin, Organizer, User)

### 🛠️ Event Management
- Create, update, and delete events (Organizer/Admin)
- Input event name, description, date, time, location, type
- Backend validations for fields and route protection

### 🔍 Event Discovery
- View all available events as a public user
- Filter and search events based on:
  - Event name
  - Event type (Technical, Cultural, etc.)
  - Location

### 👥 User Management
- Admin view of all registered users
- User deletion to prevent spam/misuse
- Restricted access to admin-only routes

### 🧪 RESTful APIs
- Fully tested APIs via Postman
- Modular MVC pattern with clear separation of concerns
- Proper error handling and data validation middleware

---

## 💻 Tech Stack

| Layer           | Technology                      |
|----------------|----------------------------------|
| Frontend        | React.js, Tailwind CSS           |
| Backend         | Node.js, Express.js              |
| Database        | MongoDB Atlas                    |
| Authentication  | JWT, bcrypt.js                   |
| Deployment      | Vercel (Frontend), Render (Backend) |
| API Testing     | Postman                          |
| Version Control | Git & GitHub                     |

---

## 📸 Screenshots

-  **Dashboard**  
![Dashboard](https://drive.google.com/uc?export=view&id=1ey3nn_9ZKwqfDvO3XQSib5gSk6WeFB8-)

-  **Filter section**  
![Filter section](https://drive.google.com/uc?export=view&id=15cqF5HKKcwXbaS5hWHsq10nA2fc9BgGu)

-  **Event Type cards**  
![Event Type cards](https://drive.google.com/uc?export=view&id=1vAxReLgMPUOV1S693GEWyrDQsfU-8IAz)

-  **Event Creation Form**  
![Event Creation Form](https://drive.google.com/uc?export=view&id=13zROJ0dgNo5qT3tvVZms8DUg4egCs0c-)

---

## 🚀 Getting Started

Follow these steps to run the project locally.

### 1. Clone the repository

```bash
git clone https://github.com/your-username/eventsphere.git
cd eventsphere
```

### 2. Backend Setup

```bash
cd backend
npm install
```
Create a .env file in /backend:
```bash
PORT=5000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
```
Start the backend server:
```bash
npm run dev
```

### 3. Frontend Setup

```bash
cd ../frontend
npm install
npm run dev
```
Visit http://localhost:5173 to explore the app.

---

## 📁 Project Structure
```bash
eventsphere/
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── config/
│   └── server.js
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   └── App.jsx
│   ├── tailwind.config.js
│   └── main.jsx
```

---

## 🚧 Future Improvements
- RSVP/Join Event functionality
- Event posters with Cloudinary upload
- Email/SMS reminders using Twilio or SendGrid
- Pagination and lazy loading for large event datasets
- Admin analytics dashboard

---

## 👥 Team
- Aditya Giri – Handled backend development, database modeling, API integration, and route protection.
- Chaitanya Sharma – Strong pillar of our team; managed backend deployment and ensured smooth coordination under pressure.
- Khushi Kundwani – Contributed to frontend development with responsive design and page optimizations.
- Aditya Mudliar – Handled frontend development, UI design, route integration, and state management.

---

## 📃 License
Licensed under the MIT License.

---

## 🤝 Acknowledgements
- IISER Bhopal & IIIT Bhopal for hosting Arma Code 0
- Hackathon Mentors and Judges for valuable feedback



