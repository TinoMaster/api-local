const NotasModel = require("../models/notas-models"),
  NotasController = () => {};

NotasController.getAll = (req, res) => {
  NotasModel.getAll((docs) => {
    res.send(docs);
  });
};

NotasController.save = (req, res) => {
  let data = {
    id: req.body.id,
    description: req.body.description,
    nombre: req.body.nombre,
    fecha: req.body.fecha,
    telefono: req.body.telefono,
    creador: req.body.creador,
    checked: 1,
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

NotasController.updateChecked = (req, res) => {
  const id = req.params.id;
  const checked = req.body.checked;
  console.log(checked);
  NotasModel.updateChecked(id, checked, (error) => {
    if (error) {
      console.log(error);
      res.status(500).json({ error: true, message: "Internal error" });
    } else res.json({ success: true, message: "Checked actualizado" });
  });
};

module.exports = NotasController;
