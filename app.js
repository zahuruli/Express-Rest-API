const express = require("express");
const bodyParser = require("body-parser");
const TodosRouter = require("./routes/todos.route");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/todo", TodosRouter);

app.get("/", (req, res) => {
  res.status(200).sendFile(__dirname + "/views/index.html");
});
app.use((req, res, next) => {
  res.status(404).json({ message: "Routes not found. 404 Error !!!" });
});
app.use((err, req, res, next) => {
  res.status(500).json({ serverError: err });
});

module.exports = app;
