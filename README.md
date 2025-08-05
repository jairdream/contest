# MERN Todo App - Live Coding Contest

A full-stack Todo application built with the MERN stack (MongoDB, Express.js, React, Node.js). This application provides user authentication and complete CRUD operations for managing todo items.

## 🏆 Contest Instructions

**Welcome to the MERN Stack Live Coding Contest!**

You have a partially implemented Todo application. Your task is to complete **4 specific functions** to make the app fully functional.

### 🎯 Your Mission: Complete These 4 Functions

#### Frontend (React) - 2 Functions
1. **`handleSubmit`** in `frontend/src/components/Input.jsx` - Handle form submission to create todos
2. **`deleteTodo`** in `frontend/src/components/Todos.jsx` - Handle delete button clicks

#### Backend (Node.js/Express) - 2 Functions  
3. **`createTodo`** in `backend/controllers/todoController.js` - API endpoint for POST `/api/todos`
4. **`deleteTodo`** in `backend/controllers/todoController.js` - API endpoint for DELETE `/api/todos/:id`

### ⏰ Contest Rules

- **Time Limit**: 45 minutes total
- **Goal**: All 4 functions must work correctly
- **Git Requirement**: Create personal branch + 4 separate commits (one per function)
- **Success Criteria**: Add and delete todos without errors
- **Resources Allowed**: Documentation only (no external help)
- **Total Score**: 100 points divided into 5 categories (20 points each)

### 📊 Scoring Breakdown (100 Total Points)

#### 1. Git Workflow & Setup (20 points)
- Proper branch creation and naming
- Individual commits for each function
- Clean commit messages
- Final push to personal branch

#### 2. Frontend Implementation (20 points)
- `handleSubmit` function in Input.jsx
- `deleteTodo` function in Todos.jsx
- Proper error handling
- State management integration

#### 3. Backend Implementation (20 points)
- `createTodo` API endpoint
- `deleteTodo` API endpoint
- Database operations
- Error handling and validation

#### 4. Code Quality (20 points)
- Clean, readable code
- Best practices followed
- Proper async/await usage
- Appropriate HTTP status codes

#### 5. Functionality & Testing (20 points)
- All functions work correctly
- End-to-end functionality
- No console errors
- User experience quality

### 🚀 Quick Start Guide

#### Step 1: Clone & Create Branch (5 minutes)
```bash
git clone [your-repo-url]
cd MERN-Todoapp-master

# Create your personal branch (REQUIRED for scoring)
git checkout -b [your-name]-contest
# Example: git checkout -b john-doe-contest
```

#### Step 2: Start Backend Server
```bash
cd backend
npm install

# Create .env file with MongoDB connection:
# MONGODB_URI=your_mongodb_connection_string
# JWT_SECRET=your_jwt_secret_key
# PORT=3005

npm run dev
```
✅ **Backend should run on**: `http://localhost:3005`

#### Step 3: Start Frontend Server (New Terminal)
```bash
cd frontend
npm install
npm run dev
```
✅ **Frontend should run on**: `http://localhost:5173`

#### Step 4: Find & Implement Functions
Look for `// TODO: Implement this function` comments in the code.

### 🔄 Git Workflow (REQUIRED for Full Points)

**You MUST follow this workflow:**

#### For Each Function:
1. ✅ **Implement** the function
2. ✅ **Test** it works (try the feature in browser)
3. ✅ **Commit** with specific message:

```bash
# After implementing each function:
git add .

# Use these EXACT commit message formats:
git commit -m "feat: implement handleSubmit function in Input.jsx"
git commit -m "feat: implement deleteTodo function in Todos.jsx" 
git commit -m "feat: implement createTodo API endpoint"
git commit -m "feat: implement deleteTodo API endpoint"
```

#### Final Submission:
```bash
# When all 4 functions are complete:
git push origin [your-name]-contest
```

**⚠️ IMPORTANT**: You need exactly **4 commits** (one per function) for full Git points!

### 📋 Function Requirements

#### 1. Frontend - `handleSubmit` (Input.jsx)
**What it should do:**
- Prevent default form submission
- Make POST request to `http://localhost:3005/api/todos`
- Include authorization header with JWT token: `Bearer ${user.token}`
- Send todo data in request body: `{todo: "user input"}`
- Update state using `dispatch({type: "CREATE_TODO", payload: json})`
- Clear input field on success: `setTodo("")` and `input.current.blur()`

#### 2. Frontend - `deleteTodo` (Todos.jsx)  
**What it should do:**
- Make DELETE request to `http://localhost:3005/api/todos/${t._id}`
- Include authorization header with JWT token: `Bearer ${user.token}`
- Update state using `dispatch({type: "DELETE_TODO", payload: json})`
- Handle errors appropriately (log to console)

#### 3. Backend - `createTodo` (todoController.js)
**What it should do:**
- Extract `{todo}` from `req.body`
- Get user ID from `req.user._id` (already authenticated)
- Create new todo: `await Todos.create({todo, uid})`
- Return created todo with 200 status
- Handle errors with try-catch and 400 status

#### 4. Backend - `deleteTodo` (todoController.js)
**What it should do:**
- Extract `id` from `req.params`
- Validate ObjectId: `mongoose.Types.ObjectId.isValid(id)`
- Find and delete: `await Todos.findByIdAndDelete({_id: id})`
- Handle case when todo doesn't exist (404 status)
- Return deleted todo with 200 status
- Handle errors with try-catch and 400 status

### 🔍 Available Resources

- **Models**: Check `backend/models/todoModel.js` for schema
- **Context**: Review `frontend/src/context/TodosContext.jsx` for state management
- **Working Functions**: Study `getTodos`, `updateTodo` for reference patterns
- **Authentication**: User token is available in context (`user.token`)

### ✅ Testing Your Implementation

1. **Start both servers** (backend on 3005, frontend on 5177)
2. **Register/Login** to the application
3. **Test adding** a new todo (should work if functions 1 & 3 are correct)
4. **Test deleting** a todo (should work if functions 2 & 4 are correct)
5. **Check console** for errors in browser and server logs

### 🏁 Submission Process

When you complete the functions:
1. **Test the application thoroughly**
2. **Commit your final changes** (if any)
3. **Push your branch**: `git push origin [your-name]-contest`
4. **Raise your hand to indicate completion**
5. **Be ready to demonstrate your solution**
6. **Share your branch name with the judge**

### 📝 Evaluation Process

Judges will:
1. **Check your Git history** (4 separate commits expected)
2. **Review your code quality** and implementation
3. **Test the functionality** on your branch
4. **Calculate your score** based on the 5 categories above

**Good luck! May the best coder win! 🚀**

---

## 🚀 Live Demo

[View Live Demo](https://mernstack-todo.netlify.app/)

![Todo App Preview](https://user-images.githubusercontent.com/85039185/210167483-c82f7878-26cd-4af7-b9da-ac51f300546c.png)

## 🛠️ Tech Stack

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - MongoDB object modeling
- **bcrypt** - Password hashing
- **jsonwebtoken** - JWT authentication
- **cors** - Cross-origin resource sharing
- **dotenv** - Environment variables

### Frontend
- **React** - Frontend framework
- **Vite** - Build tool
- **React Router DOM** - Client-side routing
- **Sass** - CSS preprocessor
- **React Icons** - Icon library

## 📋 Features

- ✅ User Authentication (Login/Signup)
- ✅ Add Todo Items
- ✅ Edit Todo Items
- ✅ Delete Todo Items
- ✅ Mark Todo Items as Complete
- ✅ Responsive Design
- ✅ JWT-based Authentication

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:
- [Node.js](https://nodejs.org/) (v14 or higher)
- [MongoDB](https://www.mongodb.com/) (local installation or MongoDB Atlas)
- [Git](https://git-scm.com/)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/marko898911/MERN-ToDo.git
   cd MERN-Todoapp-master
   ```

2. **Set up the Backend**
   ```bash
   cd backend
   npm install
   ```
   
   Create a `.env` file in the backend directory and add your environment variables:
   ```env
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   PORT=3005
   ```

3. **Set up the Frontend**
   ```bash
   cd ../frontend
   npm install
   ```

### Running the Application

1. **Start the Backend Server**
   ```bash
   cd backend
   
   # For development (with nodemon)
   npm run dev
   
   # For production
   npm start
   ```
   Backend server runs on: `http://localhost:3005`

2. **Start the Frontend Development Server**
   ```bash
   cd frontend
   npm run dev
   ```
   Frontend application runs on: `http://localhost:5173`

## 📁 Project Structure

```
MERN-Todoapp/
├── backend/
│   ├── controllers/
│   │   ├── todoController.js
│   │   └── userController.js
│   ├── middleware/
│   │   └── requireAuth.js
│   ├── models/
│   │   ├── todoModel.js
│   │   └── userModel.js
│   ├── routes/
│   │   ├── todoRoutes.js
│   │   └── userRoutes.js
│   ├── package.json
│   └── server.js
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Input.jsx
│   │   │   └── Todos.jsx
│   │   ├── context/
│   │   │   ├── AuthContext.jsx
│   │   │   └── TodosContext.jsx
│   │   ├── pages/
│   │   │   ├── Home.jsx
│   │   │   ├── Login.jsx
│   │   │   └── Signup.jsx
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── package.json
│   └── vite.config.js
└── README.md
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📝 License

This project is open source and available under the [MIT License](LICENSE).
