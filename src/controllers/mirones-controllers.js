const MironController = () => {};
const MironModel = require("../models/mirones-models");
const fs = require("fs");
const path = require("path");

MironController.getAll = (req, res) => {
  MironModel.getAll((error, docs) => {
    if (error) {
      res.status(500).json({ error: true, message: "Internal error" });
    } else
      res.json({ success: true, message: "Peticion aceptada", data: docs });
  });
};

MironController.save = (req, res) => {
  const data = req.body;
  MironModel.save(data, (error) => {
    if (error) {
      res.json({
        error: true,
        message: `No se ah podido guardar el archivo ${data.fecha}`,
      });
    } else
      res.json({ success: true, message: "Archivo guardado correctamente" });
  });
};

MironController.convertExcel = (req, res) => {
 
  res.json({ recibido: true });
};

module.exports = MironController;
