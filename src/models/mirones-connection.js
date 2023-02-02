const mongoose = require("mongoose"),
  Schema = mongoose.Schema,
  dbConfig = require("./db.config");

const mironSchema = new Schema({
  id: {
    type: String,
    unique: true,
  },
  name: String,
  fecha: String,
  cant_dispositivos: Number,
  volumen_copia: Number,
  cant_ficheros: Number,
  venta_total: Number,
  dispositivos: [
    {
      dispositivo: String,
      tipo: String,
      insercion: String,
      tamano_copiados: String,
      ficheros_copiados: String,
      ficheros_borrados: String,
      pago: Number,
      cobrado: Number,
      comentario: String,
    },
  ],
});

const mironModel = mongoose.model("Mirones", mironSchema);
mongoose.connect(`${dbConfig.mongoHost}/${dbConfig.mongoDb}`);

module.exports = mironModel;
