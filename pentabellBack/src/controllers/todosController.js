const Todo = require("../models/Todo");

//ADD todos
const addTodo = async (req, res) => {
  const newTodo = new Todo(req.body);

  try {
    const savedTodo = await newTodo.save();
    res.status(201).json(savedTodo);
  } catch (error) {
    res.status(500).json(error || "could not save Todos");
  }
};

//GET ALL TODOS
const getAllTodos = async (req, res) => {

  try {

    const todos = await Todo.find()

    res.status(200).json(todos);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

//DELETE
const deleteTodo = async (req, res) => {
  try {
    await Todo.findByIdAndDelete(req.params.todoId);
    res.status(200).json("Todo has been deleted");
  } catch (error) {
    res.status(500).json(error);
  }
};

//UPDATE 
const updateTodo = async (req, res) => {
  try {
    const updatedTodo = await Todo.findByIdAndUpdate(
      req.params.todoId,
      {
        $set: req.body,
      },
      { new: true }
    );

    res.status(200).json(updatedTodo);
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.addTodo = addTodo;
exports.getAllTodos =getAllTodos;
exports.deleteTodo = deleteTodo;
exports.updateTodo = updateTodo;
