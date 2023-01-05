const cuadreConnections = require("./cuadre-connection");
const CuadreModel = () => {};

const boom = require("@hapi/boom");

CuadreModel.getAll = (cb) => {
  cuadreConnections.find().exec((err, docs) => {
    try {
      if (err) {
        throw boom.clientTimeout("Database Error");
      }
      cb(null, docs);
    } catch (error) {
      cb(error, null);
    }
  });
};

CuadreModel.save = (data, cb) => {
  cuadreConnections.countDocuments({ id: data.id }).exec((err, count) => {
    try {
      if (err) throw boom.clientTimeout("Database Error");

      if (count === 0) {
        cuadreConnections.create(data, (err) => {
          if (err) throw boom.clientTimeout("Database Error");
          else cb(null, data);
        });
      } else if (count === 1) {
        throw boom.badData("Data already exist");
      }
    } catch (error) {
      cb(error, null);
    }
  });
};

CuadreModel.getMonth = (fechaToSearch, cb) => {
  const fecha = fechaToSearch.toString();
  const regex = new RegExp(`^([1-9]|1[0-9]|2[0-9]|30)-${fecha}`);
  cuadreConnections.find({ fecha: { $regex: regex } }).exec((err, docs) => {
    if (err) throw err;
    cb(docs);
  });
};

CuadreModel.getPorAño = async (id1, id2, id3, id4, cb) => {
  const bd = await cuadreConnections.find({ id: { $gte: id1, $lte: id2 } });
  const bd2 = await cuadreConnections.find({ id: { $gte: id3, $lte: id4 } });
  const bd3 = await [...bd, ...bd2];
  cb(bd3);
};

CuadreModel.deleteOne = (id, cb) => {
  try {
    cuadreConnections.deleteOne({ id }, (err) => {
      if (err) {
        throw err;
      } else cb(null);
    });
  } catch (error) {
    cb(error);
  }
};

module.exports = CuadreModel;
