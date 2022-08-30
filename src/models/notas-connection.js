const mongoose = require("mongoose"),
  Schema = mongoose.Schema,
  dbConfig = require("./db.config.json");

const notaSchema = new Schema({
  id: {
    type: Number,
    unique: true,
  },
  description: String,
  nombre: String,
  fecha: String,
  creador: String,
  telefono: String,
});

const notasModel = mongoose.model("Notas", notaSchema);
mongoose.connect(`mongodb://${dbConfig.mongo.host}/${dbConfig.mongo.db}`);

module.exports = notasModel;
