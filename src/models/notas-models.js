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

NotasModel.updateChecked = (id, checked, cb) => {
  try {
    notasConnection.findOneAndUpdate({ id }, { checked }).exec((error) => {
      if (error) {
        cb(error);
      } else cb();
    });
  } catch (err) {
    console.log(err);
  }
};

module.exports = NotasModel;
