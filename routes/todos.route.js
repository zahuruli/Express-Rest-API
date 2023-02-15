const {
  getTodo,
  postTodo,
  updateTodo,
  deleteTodo,
} = require("../controllers/todos.controller");

const Router = require("express").Router();

Router.get("/", getTodo);
Router.post("/", postTodo);
Router.put("/:id", updateTodo);
Router.delete("/:id", deleteTodo);

module.exports = Router;
