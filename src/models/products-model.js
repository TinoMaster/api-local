const ProductConnection = require("./products-connection");
const ProductModel = () => {};

ProductModel.getAll = async (cb) => {
  try {
    ProductConnection.find().exec((err, data) => {
      if (err) {
        throw err;
      } else {
        cb(null, data);
      }
    });
  } catch (error) {
    console.log(error);
    cb(error, null);
  }
};

ProductModel.getById = (id, cb) => {
  try {
    ProductConnection.findById({ _id: id }).exec((err, doc) => {
      if (err) {
        throw err;
      } else cb(null, doc);
    });
  } catch (error) {
    cb(error, null);
  }
};

ProductModel.updateOne = (data, cb) => {
  try {
    ProductConnection.findOneAndUpdate({ _id: data._id }, data, (err) => {
      if (err) {
        throw err;
      } else cb(null);
    });
  } catch (error) {
    cb(error);
  }
};

ProductModel.saveProduct = (data, cb) => {
  try {
    ProductConnection.create(data, (err) => {
      if (err) {
        throw err;
      } else {
        cb(null);
      }
    });
  } catch (error) {
    console.log(error);
    cb(error);
  }
};

ProductModel.deleteProduct = (id, cb) => {
  try {
    ProductConnection.deleteOne({ _id: id }).exec((err) => {
      if (err) {
        throw err;
      } else cb(null);
    });
  } catch (error) {
    cb(error);
  }
};

module.exports = ProductModel;
