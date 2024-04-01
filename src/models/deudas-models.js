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

DeudasModel.getMyDebtsCouples = async (creator, cb) => {
  try {
    const deudas = await DeudasConnection.find({ creador: creator });
    const deudasCouples = deudas.reduce((arrayResult, element) => {
        const { deudor, acreedor } = element;
        const couple = { deudor, acreedor };
        const isCouple = arrayResult.find(
            (element) =>
            element.deudor === couple.deudor && element.acreedor === couple.acreedor
        );
        if (!isCouple) {
            arrayResult.push(couple);
        }
        return arrayResult;
    },[]);
    cb(null, deudasCouples);
  } catch (error) {
    console.log(error);
    cb(error, null);
  }
};

DeudasModel.getByCreator = async (creator, cb) => {
  try {
    const deudas = await DeudasConnection.find({ creador: creator });
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
