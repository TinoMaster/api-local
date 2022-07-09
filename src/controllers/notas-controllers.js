const NotasModel = require("../models/notas-models"),
  NotasController = () => {};

NotasController.getAll = (req, res) => {
  NotasModel.getAll((docs) => {
    res.send(docs);
  });
};

/* NotasController.getOne = (req, res) => {
  let id = req.params.id;
  NotasModel.getOne(id, (docs) => {
    res.send(docs);
  });
}; */

NotasController.save = (req, res) => {
  let data = {
    id: req.body.id,
    description: req.body.description,
    nombre: req.body.nombre,
    fecha: req.body.fecha,
    telefono: req.body.telefono,
    creador: req.body.creador,
  };
  NotasModel.save(data, () => {
    res.send(console.log("exitoso"));
  });
};

NotasController.delete = (req, res) => {
  let id = req.params.id;

  NotasModel.delete(id, () => {
    res.send(console.log("archivo borrado"));
  });
};

module.exports = NotasController;
