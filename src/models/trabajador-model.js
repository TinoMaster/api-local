const trabajadorConnection = require("./trabajador-connection");
const trabajadorModel = () => {};

trabajadorModel.getAll = (cb) => {
  trabajadorConnection.find().exec((err, docs) => {
    if (err) throw err;
    cb(docs);
  });
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

module.exports = trabajadorModel;
