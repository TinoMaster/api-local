const trabajadorConnection = require("./trabajador-connection");
const trabajadorModel = () => {};

trabajadorModel.getAll = (cb) => {
  try {
    trabajadorConnection.find().exec((err, docs) => {
      if (err) throw err;
      cb(null, docs);
    });
  } catch (error) {
    cb(error, null);
  }
};

trabajadorModel.updateOne = (data, cb) => {
  trabajadorConnection.findOneAndUpdate({ _id: data._id }, data, (error) => {
    try {
      if (error) throw error;
      cb(null, data);
    } catch (error) {
      cb(error, null);
    }
  });
};

trabajadorModel.saveWorker = (data, cb) => {
  trabajadorConnection.create(data, (err) => {
    try {
      if (err) {
        cb(err, null);
        throw err;
      } else {
        cb(null, data);
      }
    } catch (error) {
      console.log(error);
    }
  });
};

trabajadorModel.verifyPassword = (id, cb) => {
  try {
    trabajadorConnection.find({ _id: id }).exec((error, docs) => {
      if (error) {
        throw error;
      } else {
        cb(null, docs);
      }
    });
  } catch (error) {
    cb(error, null);
  }
};

trabajadorModel.changePassword = (data, cb) => {
  const { id, password } = data;
  try {
    trabajadorConnection.findOneAndUpdate({ _id: id }, password, (err) => {
      if (err) {
        throw err;
      } else {
        cb(null, data);
      }
    });
  } catch (error) {
    cb(error, null);
  }
};

trabajadorModel.login = (correo, cb) => {
  trabajadorConnection.find({ correo }).exec((error, docs) => {
    if (docs.length === 0) {
      cb({ error: true, message: "No se encuentra el usuario" }, null);
    } else cb(null, docs);
  });
};

module.exports = trabajadorModel;
