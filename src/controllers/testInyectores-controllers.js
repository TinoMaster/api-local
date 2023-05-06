const testInyectoresModel = require("../models/testInyectores-models");

const testInyectoresController = () => {};

testInyectoresController.getTest = (req, res) => {
  testInyectoresModel.getTest((docs) => {
    res.send(docs);
  });
};

testInyectoresController.save = (req, res) => {
  const id = req.body.id;
  const data = req.body;

  testInyectoresModel.save(data, id, (err) => {
    if (err) throw err;
    res.json({ success: true });
  });
};

module.exports = testInyectoresController;
