const mongoose = require("mongoose"),
  Schema = mongoose.Schema,
  dbConfig = require("./db.config");

const deudasSchema = new Schema({
  creador: {
    type: String,
    required: true,
  },
  deudor: {
    type: String,
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
});

const DeudasModel = mongoose.model("Deudas", deudasSchema);
mongoose.connect(`${dbConfig.mongoHost}/${dbConfig.mongoDb}`);

module.exports = DeudasModel;
