const notasConnection = require("./notas-connection");
const NotasModel = () => {};

NotasModel.getAll = (cb) => {
  notasConnection.find().exec((err, docs) => {
    if (err) throw err;
    cb(docs);
  });
};

NotasModel.save = (data, cb) => {
  notasConnection.countDocuments({ id: data.id }).exec((err, count) => {
    if (err) throw err;
    if (count === 0) {
      notasConnection.create(data, (err) => {
        if (err) throw err;
        cb();
      });
    } else if (count === 1) {
      notasConnection.findOneAndUpdate(
        { id: data.id },
        {
          description: data.description,
          nombre: data.nombre,
          fecha: data.fecha,
          telefono: data.telefono,
        },
        (err) => {
          if (err) throw err;
          cb();
        }
      );
    }
  });
};

NotasModel.delete = (id, cb) => {
  notasConnection.deleteOne({ id: id }).exec((err, docs) => {
    if (err) throw err;
    cb();
  });
};

module.exports = NotasModel;
