const InventarioModel = require("../models/inventario-model");

const InventarioController = () => {};

InventarioController.getInsumos = (req, res) => {
  InventarioModel.getInsumos((docs) => {
    res.send(docs);
  });
};

InventarioController.gethojas = (req, res) => {
  InventarioModel.gethojas((docs) => {
    res.send(docs);
  });
};

InventarioController.getMediosBasicos = (req, res) => {
  InventarioModel.getMediosBasicos((docs) => {
    res.send(docs);
  });
};

InventarioController.save = (req, res) => {
  let _id = req.params.id;
  let data = req.body;

  InventarioModel.save(data, _id, () => {
    res.send(console.log("Exitoso!!!"));
  });
};

InventarioController.delete = (req, res) => {
  let id = req.params.id;

  InventarioModel.delete(id, () => {
    res.send(console.log("Archivo Borrado"));
  });
};

module.exports = InventarioController;
