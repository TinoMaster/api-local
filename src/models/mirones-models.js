const MironModel = () => {};
const MironConnection = require("./mirones-connection");

MironModel.getAll = (cb) => {
  try {
    MironConnection.find().exec((err, docs) => {
      if (err) {
        cb(err, null);
      } else cb(null, docs);
    });
  } catch (error) {
    console.log(error);
  }
};

MironModel.save = (data, cb) => {
  try {
    MironConnection.create(data, (err) => {
      if (err) {
        cb(err);
      } else cb(null);
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = MironModel;
