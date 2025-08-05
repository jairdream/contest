# MERN Todo App - Live Coding Contest

A full-stack Todo application built with the MERN stack (MongoDB, Express.js, React, Node.js). This application provides user authentication and complete CRUD operations for managing todo items.

## 🏆 Contest Instructions

**Welcome to the MERN Stack Live Coding Contest!**

You have been given a partially implemented Todo application. Your task is to complete **4 missing functions** to make the application fully functional.

### 🎯 Your Mission

You need to implement the following functions:

#### Frontend (React) - 2 Functions
1. **`handleSubmit`** in `frontend/src/components/Input.jsx` - Create new todo
2. **`deleteTodo`** in `frontend/src/components/Todos.jsx` - Delete existing todo

#### Backend (Node.js/Express) - 2 Functions  
3. **`createTodo`** in `backend/controllers/todoController.js` - API endpoint to create todo
4. **`deleteTodo`** in `backend/controllers/todoController.js` - API endpoint to delete todo

### ⏰ Contest Rules

- **Time Limit**: 45 minutes
- **Goal**: Implement all 4 functions to make the app fully functional
- **Git Workflow**: Work on your own branch and commit each function separately
- **Testing**: You should be able to add and delete todos successfully
- **Resources**: You can use documentation, but no external help
- **Total Score**: 100 points (20 points per section)

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

### 🚀 Getting Started

1. **Clone and Setup** (5 minutes)
   ```bash
   git clone [your-repo-url]
   cd MERN-Todoapp-master
   ```

2. **Create Your Branch** (IMPORTANT - Git Workflow)
   ```bash
   # Create and switch to your personal branch
   git checkout -b [your-name]-contest
   # Example: git checkout -b john-doe-contest
   ```

3. **Backend Setup**
   ```bash
   cd backend
   npm install
   # Create .env file with your MongoDB connection
   npm run dev
   ```

4. **Frontend Setup** (in new terminal)
   ```bash
   cd frontend
   npm install
   npm run dev
   ```

5. **Find the TODOs**
   Look for `// TODO: Implement this function` comments in the code.

### 🔄 Git Workflow Requirements

**IMPORTANT**: You must follow this Git workflow for full points!

#### For Each Function Implementation:
1. **Implement the function**
2. **Test that it works**
3. **Commit with descriptive message**:
   ```bash
   # Example commit messages:
   git add .
   git commit -m "feat: implement handleSubmit function in Input.jsx"
   git commit -m "feat: implement deleteTodo function in Todos.jsx"
   git commit -m "feat: implement createTodo API endpoint"
   git commit -m "feat: implement deleteTodo API endpoint"
   ```

#### Final Steps:
```bash
# Push your branch when complete
git push origin [your-name]-contest

# Example: git push origin john-doe-contest
```

**Expected Git History**: You should have **4 commits minimum** - one for each function implementation.

### 📋 Function Requirements

### � Git Workflow Requirements

**IMPORTANT**: You must follow this Git workflow for full points!

#### For Each Function Implementation:
1. **Implement the function**
2. **Test that it works**
3. **Commit with descriptive message**:
   ```bash
   # Example commit messages:
   git add .
   git commit -m "feat: implement handleSubmit function in Input.jsx"
   git commit -m "feat: implement deleteTodo function in Todos.jsx"
   git commit -m "feat: implement createTodo API endpoint"
   git commit -m "feat: implement deleteTodo API endpoint"
   ```

#### Final Steps:
```bash
# Push your branch when complete
git push origin [your-name]-contest

# Example: git push origin john-doe-contest
```

**Expected Git History**: You should have **4 commits minimum** - one for each function implementation.

#### 1. Frontend - `handleSubmit` (Input.jsx)
- Prevent default form submission
- Make POST request to `http://localhost:3005/api/todos`
- Include authorization header with JWT token
- Send todo data in request body
- Update state using dispatch on success
- Clear input field after successful creation

#### 2. Frontend - `deleteTodo` (Todos.jsx)  
- Make DELETE request to `http://localhost:3005/api/todos/:id`
- Include authorization header with JWT token
- Update state using dispatch on success
- Handle errors appropriately

#### 3. Backend - `createTodo` (todoController.js)
- Extract todo from request body
- Get user ID from authenticated user (`req.user._id`)
- Create new todo in database with Mongoose
- Return created todo with 200 status
- Handle errors with appropriate status codes

#### 4. Backend - `deleteTodo` (todoController.js)
- Extract ID from request parameters
- Validate MongoDB ObjectId format
- Find and delete todo from database
- Handle case when todo doesn't exist
- Return deleted todo with 200 status
- Handle errors with appropriate status codes

### 🔍 Available Resources

- **Models**: Check `backend/models/todoModel.js` for schema
- **Context**: Review `frontend/src/context/TodosContext.jsx` for state management
- **Working Functions**: Study `getTodos`, `updateTodo` for reference patterns
- **Authentication**: User token is available in context (`user.token`)

### ✅ Testing Your Implementation

1. Start both servers
2. Register/Login to the application
3. Try adding a new todo (should work if functions 1 & 3 are correct)
4. Try deleting a todo (should work if functions 2 & 4 are correct)
5. Check browser console and server logs for errors

### 🏁 Submission

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