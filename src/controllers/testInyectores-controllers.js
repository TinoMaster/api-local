const testInyectoresModel = require("../models/testInyectores-models");

const testInyectoresController = () => {};

testInyectoresController.getTest = (req, res) => {
  testInyectoresModel.getTest((docs) => {
    res.send(docs);
  });
};

testInyectoresController.save = (req, res) => {
  const id = req.body.id;
  console.log(id);
  const data = req.body;

  testInyectoresModel.save(data, id, (err) => {
    if (err) throw err;
    res.send(console.log("success"));
  });
};

module.exports = testInyectoresController;
