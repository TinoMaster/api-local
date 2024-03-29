const cuadreConnections = require("./cuadre-connection");
const CuadreModel = () => {};

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
      if (err) throw err;

      if (count === 0) {
        cuadreConnections.create(data, (err) => {
          if (err) throw err;
          else cb(null, data);
        });
      } else if (count === 1) {
        cb({ error: true, message: "data already exist" }, null);
      }
    } catch (error) {
      console.log(error);
    }
  });
};

CuadreModel.getLastSell = (cb) => {
  try {
    cuadreConnections
      .find()
      .sort({ $natural: -1 })
      .limit(1)
      .exec((err, docs) => {
        if (err) throw err;
        cb(null, docs);
      });
  } catch (error) {
    console.log(error);
    cb(error, null);
  }
};

CuadreModel.getMonth = (fechaToSearch, cb) => {
  const fecha = fechaToSearch.toString();
  const regex = new RegExp(`^([1-9]|1[0-9]|2[0-9]|3[0-1])-${fecha}`);
  cuadreConnections.find({ fecha: { $regex: regex } }).exec((err, docs) => {
    if (err) throw err;
    cb(docs);
  });
};

CuadreModel.getPorAño = async (año, cb) => {
  const regex = new RegExp(
    `^([1-9]|1[0-9]|2[0-9]|3[0-1])-([1-9]|1[0-2])-${año}`
  );
  try {
    cuadreConnections.find({ fecha: { $regex: regex } }).exec((err, docs) => {
      if (err) throw err;
      cb(null, docs);
    });
  } catch (error) {
    cb(error, null);
  }
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
