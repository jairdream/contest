const mongoose = require("mongoose");
const Todos = require("../models/todoModel");

const getTodos = async (req, res) => {
  try {
    const uid = req.user._id;
    const todos = await Todos.find({ uid }).sort({ createdAt: -1 });
    res.status(200).json(todos);
  } catch (error) {
    res.status(400).json({ error: "error.message" });
  }
};

const getTodo = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "No such document" });
  }

  try {
    const todo = await Todos.findById({ _id: id });

    if (!todo) {
      return res.status(404).json({ message: "No such document" });
    }

    res.status(200).json(todo);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const createTodo = async (req, res) => {
  // TODO: Implement this function
  // This function should:
  // 1. Extract todo data from request body
  // 2. Get user ID from authenticated user
  // 3. Create new todo in database
  // 4. Return appropriate response
};

const deleteTodo = async (req, res) => {
  // TODO: Implement this function
  // This function should:
  // 1. Extract ID from request parameters
  // 2. Validate if ID is a valid MongoDB ObjectId
  // 3. Find and delete the todo from database
  // 4. Handle cases where todo doesn't exist
  // 5. Return appropriate response
};

const updateTodo = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such document." });
  }

  try {
    const todos = await Todos.findByIdAndUpdate(
      { _id: id },
      {
        ...req.body,
      }
    );

    if (!todos) {
      return res.status(404).json({ message: "No such document" });
    }

    res.status(200).json(todos);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getTodos,
  getTodo,
  createTodo,
  deleteTodo,
  updateTodo,
};
