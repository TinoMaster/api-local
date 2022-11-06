const mongoose = require("mongoose"),
  Schema = mongoose.Schema,
  dbConfig = require("./db.config");

const inventarioSchema = new Schema({
  id: Number,
  nombre: String,
  serie: String,
  modelo: String,
  almacen: Number,
  local: Number,
  description: String,
  tipo: String,
  fecha: String,
});

const inventarioModel = mongoose.model("Inventario", inventarioSchema);
mongoose.connect(`${dbConfig.mongoHost}/${dbConfig.mongoDb}`);

module.exports = inventarioModel;
