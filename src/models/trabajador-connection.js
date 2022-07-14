const mongoose = require("mongoose"),
  Schema = mongoose.Schema,
  dbconfig = require("./db.config.json");

const trabajadorSchema = new Schema({
  nombre: String,
  direccion: String,
  municipio: String,
  telefono: String,
  CI: String,
  correo: String,
  fecha: String,
  img: String,
});

const trabajaorModel = mongoose.model("trabajadores", trabajadorSchema);

mongoose.connect("mongodb://" + dbconfig.mongo.host + "/" + dbconfig.mongo.db);

module.exports = trabajaorModel;
