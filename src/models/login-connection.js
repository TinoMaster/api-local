const mongoose = require("mongoose"),
  Schema = mongoose.Schema,
  dbConfig = require("./db.config");

const loginSchema = new Schema({
  nombre: String,
  usuario: String,
  contraseña: String,
});

const loginModel = mongoose.model("Login", loginSchema);

mongoose.connect(`${dbConfig.mongoHost}/${dbConfig.mongoDb}`);

module.exports = loginModel;
