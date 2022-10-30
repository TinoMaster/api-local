const mongoose = require("mongoose"),
  Schema = mongoose.Schema,
  dbConfig = require("./db.config.json");

const trabajadorSchema = new Schema(
  {
    nombre: String,
    usuario: String,
    direccion: String,
    municipio: String,
    telefono: String,
    correo: String,
    image: String,
    id: String,
    contraseña: String,
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const trabajadorModel = mongoose.model("trabajadores", trabajadorSchema);

mongoose.connect(`mongodb://${dbConfig.mongo.host}/${dbConfig.mongo.db}`);

module.exports = trabajadorModel;
