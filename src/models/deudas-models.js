const DeudasModel = () => {};
const DeudasConnection = require("./deudas-connection");

DeudasModel.getAll = async (cb) => {
  try {
    const deudas = await DeudasConnection.find();
    cb(null, deudas);
  } catch (error) {
    console.log(error);
    cb(error, null);
  }
};

DeudasModel.create = async (deuda, cb) => {
  try {
    const newDeuda = await DeudasConnection.create(deuda);
    cb(null, newDeuda);
  } catch (error) {
    console.log(error);
    cb(error, null);
  }
};

module.exports = DeudasModel;
