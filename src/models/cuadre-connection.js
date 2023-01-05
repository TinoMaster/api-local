const mongoose = require("mongoose"),
  Schema = mongoose.Schema,
  dbConfig = require("./db.config");

const cuadreSchema = new Schema({
  id: {
    type: Number,
    unique: true,
  },
  fecha: String,
  miron: Number,
  efectivo: Number,
  fondo: Number,
  salario1: Number,
  salario2: Number,
  turno: {
    trabajador1: String,
    trabajador2: String,
  },
  dueño: Number,
});

const CuadreModel = mongoose.model("Cuadre", cuadreSchema);
mongoose.connect(`${dbConfig.mongoHost}/${dbConfig.mongoDb}`);

module.exports = CuadreModel;
