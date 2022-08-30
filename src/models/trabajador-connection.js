const mongoose = require("mongoose"),
  Schema = mongoose.Schema,
  dbConfig = require("./db.config.json");

const trabajadorSchema = new Schema({
  nombre: String,
  usuario: String,
  direccion: String,
  municipio: String,
  telefono: String,
  id: Number,
  correo: String,
  fecha: String,
  img: String,
  activo: Boolean,
});

const trabajaorModel = mongoose.model("trabajadores", trabajadorSchema);

mongoose.connect(`mongodb://${dbConfig.mongo.host}/${dbConfig.mongo.db}`);

module.exports = trabajaorModel;
