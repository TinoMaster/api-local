const trabajadorConnection = require("./trabajador-connection");
const trabajadorModel = () => {};

trabajadorModel.getAll = (cb) => {
  trabajadorConnection.find().exec((err, docs) => {
    if (err) throw err;
    cb(docs);
  });
};

trabajadorModel.saveWorker = (data, cb) => {
  trabajadorConnection.create(data, (err) => {
    if (err) throw err;
    cb(data);
  });
};

module.exports = trabajadorModel;
