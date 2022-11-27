const mongoose = require("mongoose"),
  Schema = mongoose.Schema,
  dbConfig = require("./db.config");

const trabajadorSchema = new Schema(
  {
    nombre: String,
    usuario: String,
    direccion: String,
    municipio: String,
    telefono: String,
    correo: { type: String, unique: true },
    image: String,
    id: { type: String, unique: true },
    contraseña: String,
    role: String,
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const trabajadorModel = mongoose.model("trabajadores", trabajadorSchema);

mongoose.connect(`${dbConfig.mongoHost}/${dbConfig.mongoDb}`);

module.exports = trabajadorModel;
