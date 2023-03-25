const inventarioConnection = require("./inventario-connection");
const inventarioModel = () => {};

inventarioModel.getInsumos = (cb) => {
  inventarioConnection.find({ tipo: "insumos" }).exec((err, docs) => {
    if (err) throw err;
    cb(docs);
  });
};

inventarioModel.gethojas = (cb) => {
  inventarioConnection.find({ nombre: "Hojas Blancas" }).exec((err, docs) => {
    if (err) throw err;
    cb(docs);
  });
};

inventarioModel.getMediosBasicos = (cb) => {
  inventarioConnection.find({ tipo: "medio-basico" }).exec((err, docs) => {
    if (err) throw err;
    cb(docs);
  });
};

inventarioModel.save = (data, _id, cb) => {
  inventarioConnection.countDocuments({ _id: _id }).exec((err, count) => {
    if (count === 0) {
      inventarioConnection.create(data, (err) => {
        if (err) throw err;
        cb();
      });
    } else if (count === 1) {
      inventarioConnection.findOneAndUpdate(
        { _id: _id },
        {
          id: data.id,
          nombre: data.nombre,
          serie: data.serie,
          modelo: data.modelo,
          almacen: data.almacen,
          local: data.local,
          description: data.description,
          tipo: data.tipo,
          fecha: data.fecha,
        },
        (err) => {
          if (err) throw err;
          cb();
        }
      );
    }
  });
};

inventarioModel.delete = (id, cb) => {
  inventarioConnection.deleteOne({ _id: id }).exec((err, docs) => {
    if (err) throw err;
    cb();
  });
};

module.exports = inventarioModel;
