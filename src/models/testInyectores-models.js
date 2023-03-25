const testInyectoresConnection = require("./testInyectores-connection");

const testInyectoresModel = () => {};

testInyectoresModel.getTest = (cb) => {
  testInyectoresConnection.find().exec((err, docs) => {
    if (err) throw err;
    cb(docs);
  });
};

testInyectoresModel.save = (data, id, cb) => {
  testInyectoresConnection.countDocuments({ id: id }).exec((err, count) => {
    if (count === 0) {
      testInyectoresConnection.create(data, (err) => {
        if (err) throw err;
        cb();
      });
    } else if (count === 1) {
      testInyectoresConnection.findOneAndUpdate({ id: id }, data, (err) => {
        if (err) throw err;
        cb();
      });
    }
  });
};

module.exports = testInyectoresModel;
