const Sequelize = require("sequelize");
const db = require("../db");

const List = db.define("list", {
  status: {
    type: Sequelize.ENUM("empty", "has product(s)"),
    defaultValue: "empty",
  },
});

module.exports = List;
