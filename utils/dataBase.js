const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("todo_db", "root", "Moghadam13", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
