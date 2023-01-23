const CardsConnection = require("./cards-connection");
const CardsModel = () => {};

CardsModel.getAll = (cb) => {
  try {
    CardsConnection.find().exec((err, docs) => {
      if (err) {
        throw err;
      } else {
        cb(null, docs);
      }
    });
  } catch (error) {
    cb(error, null);
  }
};
CardsModel.saveCard = (data, cb) => {
  try {
    CardsConnection.create(data, (err) => {
      if (err) throw err;
      else cb(null, data);
    });
  } catch (error) {
    cb(error, null);
  }
};
CardsModel.deleteCard = (id, cb) => {
  try {
    CardsConnection.deleteOne({ id }).exec((err) => {
      if (err) {
        throw err;
      } else {
        cb(null);
      }
    });
  } catch (error) {
    cb(error);
  }
};
CardsModel.deleteAll = (cb) => {
  try {
    CardsConnection.deleteMany((err) => {
      if (err) {
        throw err;
      } else {
        cb(null);
      }
    });
  } catch (error) {
    cb(error);
  }
};

module.exports = CardsModel;
