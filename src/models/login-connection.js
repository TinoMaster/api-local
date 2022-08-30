const mongoose = require("mongoose"),
  Schema = mongoose.Schema,
  dbConfig = require("./db.config.json");

const loginSchema = new Schema({
  nombre: String,
  usuario: String,
  contraseña: String,
});

const loginModel = mongoose.model("Login", loginSchema);

console.log(`mongodb://${dbConfig.mongo.host}/${dbConfig.mongo.db}`);
mongoose.connect(`mongodb://${dbConfig.mongo.host}/${dbConfig.mongo.db}`);

module.exports = loginModel;
