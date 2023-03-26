const InventarioModel = require("../models/inventario-model");

const InventarioController = () => {};

InventarioController.getInsumos = (req, res) => {
  InventarioModel.getInsumos((error, docs) => {
    if (error) {
      res.json({ error: true, message: "Error al obtener los insumos" });
    } else res.json({ success: true, message: "", data: docs });
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

  InventarioModel.save(data, _id, (error, docs) => {
    if (error) {
      res.json({ error: true, message: "Error al obtener los datos" });
    } else
      res.json({
        success: true,
        message: "datos obtenidos correctamente",
        data: docs,
      });
  });
};

InventarioController.delete = (req, res) => {
  let id = req.params.id;

  InventarioModel.delete(id, (error, docs) => {
    if (error) {
      res.json({ error: true, message: "Error al obtener los insumos" });
    } else
      res.json({
        success: true,
        message: "Eliminado correctamente",
        data: docs,
      });
  });
};

module.exports = InventarioController;
