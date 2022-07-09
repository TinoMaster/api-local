const mongoose = require("mongoose"),
  Schema = mongoose.Schema,
  dbconfig = require("./db.config.json");

const loginSchema = new Schema({
  nombre: String,
  usuario: String,
  contraseña: String,
});

const loginModel = mongoose.model("Login", loginSchema);

mongoose.connect("mongodb://" + dbconfig.mongo.host + "/" + dbconfig.mongo.db);

module.exports = loginModel;
