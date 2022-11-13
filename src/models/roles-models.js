const rolesConnection = require("./roles-connection");
const rolesModel = () => {};

rolesModel.getAll = (cb) => {
  try {
    rolesConnection.find().exec((error, docs) => {
      if (error) throw error;
      cb(null, docs);
    });
  } catch (error) {
    cb(error, null);
  }
};

rolesModel.saveRole = (data, cb) => {
  try {
    rolesConnection.create(data, (err) => {
      if (err) throw err;
      cb(null, data);
    });
  } catch (error) {
    cb(error, null);
  }
};

module.exports = rolesModel;
