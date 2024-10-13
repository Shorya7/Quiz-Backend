# Online Quiz Application API

This is a RESTful API for a basic online quiz application built using Node.js, Express.js, and MongoDB. The API supports user authentication, quiz management, and result tracking.

---

## Features

- User Authentication (Register/Login)
- MCQ Quiz Management
  - Create Quiz
  - Get All Quizzes
  - Get Quiz Details
  - Submit Quiz Answers
  - View Results
- Each quiz question is an MCQ (Multiple Choice Question) with a single correct answer.

---

## Technologies Used

- **Node.js**
- **Express.js**
- **MongoDB** (Mongoose ODM)
- **JWT** (JSON Web Tokens for authentication)
- **bcrypt.js** (For password hashing)

---

## Getting Started

### 1. Clone the Repository

Clone the project from the GitHub repository:

```
git clone https://github.com/Shorya7/Quiz-Backend.git
cd Quiz-Backend
```

### 2. Install Dependencies

```
npm install
```

### 3. Environment Variables
Create a .env file in the root directory and configure the following environment variables:
```
PORT=5000
MONGO_URI=<your_mongodb_connection_string>
JWT_SECRET=<your_jwt_secret>
```

### 4. Start the Server
Run the following command to start the server:
```
npm run dev
```

## API Endpoints

### Deployed API Link
[Live API](https://quiz-backend-kezu.onrender.com)

---

### User Authentication

#### 1. Register User
- **POST** `/api/auth/register`

#### 2. Login User
- **POST** `/api/auth/login`

---

### Quiz Management

#### 3. Create a Quiz
- **POST** `/api/quizzes`

#### 4. Get All Quizzes
- **GET** `/api/quizzes`

#### 5. Get Quiz Details
- **GET** `/api/quizzes/:id`

---

### Taking a Quiz

#### 6. Submit Quiz Answers
- **POST** `/api/quizzes/:id/submit`

---

### Quiz Results

#### 7. Get User Quiz Results
- **GET** `/api/quizzes/results/me`
