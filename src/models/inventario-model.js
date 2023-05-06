const inventarioConnection = require("./inventario-connection");
const inventarioModel = () => {};

inventarioModel.getInsumos = (cb) => {
  try {
    inventarioConnection.find({ tipo: "insumos" }).exec((err, docs) => {
      if (err) throw err;
      cb(null, docs);
    });
  } catch (error) {
    console.log(error);
    cb(error, null);
  }
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
  try {
    inventarioConnection.countDocuments({ _id: _id }).exec((err, count) => {
      if (count === 0) {
        inventarioConnection.create(data, (err, docs) => {
          if (err) throw err;
          cb(null, docs);
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
          (err, docs) => {
            if (err) throw err;
            cb(null, docs);
          }
        );
      }
    });
  } catch (error) {
    console.log(error);
    cb(error, null);
  }
};

inventarioModel.delete = (id, cb) => {
  try {
    inventarioConnection.findByIdAndDelete({ _id: id }).exec((err, docs) => {
      if (err) throw err;
      cb(null, docs);
    });
  } catch (error) {
    console.log(error);
    cb(error, null);
  }
};

module.exports = inventarioModel;
