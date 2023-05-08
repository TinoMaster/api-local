const DeudasController = () => {};
const DeudasModel = require("../models/deudas-models");

DeudasController.getAll = (req, res) => {
  DeudasModel.getAll((err, docs) => {
    if (err) {
      res.status(500).json({ error: true, message: "Ah ocurrido un error" });
    }
    res.status(200).json({ success: true, data: docs });
  });
};

DeudasController.getMyDebtsCouples = (req, res) => {
  const creator = req.params.creator;
  DeudasModel.getMyDebtsCouples(creator, (err, docs) => {
    if (err) {
      res.status(500).json({ error: true, message: "Ah ocurrido un error" });
    }
    res.status(200).json({ success: true, data: docs });
  });
};

DeudasController.getByCreator = (req, res) => {
  const creator = req.params.creator;
  DeudasModel.getByCreator(creator, (err, docs) => {
    if (err) {
      res.status(500).json({ error: true, message: "Ah ocurrido un error" });
    }
    res.status(200).json({ success: true, data: docs });
  });
};

DeudasController.create = (req, res) => {
  const deuda = {
    deudor: req.body.deudor,
    acreedor: req.body.acreedor,
    deuda: req.body.deuda,
    fecha: req.body.fecha,
    pagada: {
      isDone: req.body.pagada.isDone,
      fecha: req.body.pagada.fecha,
    },
  };

  DeudasModel.create(deuda, (err, doc) => {
    if (err) {
      res.status(500).json({ error: true, message: "Ah ocurrido un error" });
    }
    res.status(200).json({ success: true, data: doc });
  });
};

module.exports = DeudasController;
