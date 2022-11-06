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
      cb(null, data);
      if (error) throw error;
    } catch (error) {
      console.log(error);
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

module.exports = trabajadorModel;
