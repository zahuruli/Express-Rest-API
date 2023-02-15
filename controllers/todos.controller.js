const { v4: uuidv4 } = require("uuid");
let todos = require("../models/todos.model");

const getTodo = (req, res) => {
  res.status(200).send(todos);
};

const postTodo = (req, res) => {
  const newTodo = { id: uuidv4(), ...req.body };
  todos.push(newTodo);
  res
    .status(200)
    .json({ message: "todo was inserted successfully", newTodo: newTodo });
};

const updateTodo = (req, res) => {
  const selectedId = req.params.id;
  const { title, desc, active, date } = req.body;
  todos
    .filter((todo) => todo.id == selectedId)
    .map((selecteduser) => {
      selecteduser.title = title;
      selecteduser.desc = desc;
      selecteduser.active = active;
      selecteduser.date = date;
    });
  res.status(200).send(todos);
};

const deleteTodo = (req, res) => {
  const selectedId = req.params.id;
  todos = todos.filter((todo) => todo.id !== selectedId);

  res.status(200).send(todos);
};

module.exports = { getTodo, postTodo, updateTodo, deleteTodo };
