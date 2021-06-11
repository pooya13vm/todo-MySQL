const Todo = require("../model/todo");

exports.getIndex = async (req, res) => {
  const completed = await Todo.count({ where: { completed: true } });
  const todoList = await Todo.findAll();
  res.render("index", {
    pageTitle: "To do list",
    todoList,
    completed,
    notCompleted: todoList.length - completed,
  });
};
