const mongoose = require("mongoose"),
  Schema = mongoose.Schema,
  dbConfig = require("./db.config");

const trabajadorSchema = new Schema(
  {
    nombre: { type: String, required: true },
    usuario: { type: String, required: true },
    direccion: String,
    municipio: String,
    telefono: String,
    correo: { type: String, unique: true, required: true },
    image: String,
    id: { type: String, unique: true },
    contraseña: { type: String, required: true },
    role: { type: String, required: true },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const trabajadorModel = mongoose.model("trabajadores", trabajadorSchema);

mongoose.connect(`${dbConfig.mongoHost}/${dbConfig.mongoDb}`);

module.exports = trabajadorModel;
