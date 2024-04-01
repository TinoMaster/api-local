const mongoose = require("mongoose"),
  Schema = mongoose.Schema,
  dbConfig = require("./db.config");

const deudasSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  creador: {
    type: Array,
    required: true,
  },
  deudor: {
    type: Array,
    required: true,
  },
  acreedor: {
    type: String,
    required: true,
  },
  deuda: Number,
  fecha: String,
  pagada: {
    isDone: Boolean,
    fecha: String,
  },
  pagos: [
    {
      fecha: String,
      cantidad: Number,
    },
  ],
  comentario: Array,
});

const DeudasModel = mongoose.model("Deudas", deudasSchema);
mongoose.connect(`${dbConfig.mongoHost}/${dbConfig.mongoDb}`);

module.exports = DeudasModel;
