const CuadreModels = require("../models/cuadre-models");

const CuadreController = () => {};

CuadreController.getAll = (req, res, next) => {
  CuadreModels.getAll((error, docs) => {
    if (error) {
      res.send(error.output.payload);
      next(error);
    } else res.json(docs);
  });
};

CuadreController.save = (req, res, next) => {
  console.log(req.body);
  let data = {
    id: req.body.id,
    fecha: req.body.fecha,
    miron: req.body.miron,
    efectivo: req.body.efectivo,
    fondo: req.body.fondo,
    salario1: req.body.salario1,
    salario2: req.body.salario2,
    turno:
      req.body.turno.trabajador2 === ""
        ? { ...req.body.turno, trabajador1: `${req.body.turno.trabajador1}(S)` }
        : req.body.turno,
    dueño: req.body.dueño,
  };
  CuadreModels.save(data, (error, docs) => {
    if (error) {
      res.send(error.output.payload);
      next(error);
    }
    res.json(docs);
  });
};

CuadreController.getMonth = (req, res) => {
  let mes = req.params.fecha;
  CuadreModels.getMonth(mes, (docs) => {
    res.json(docs);
  });
};

CuadreController.getPorAño = (req, res) => {
  let mes = req.url;
  let año = mes.substring(8, 12);

  let fecha1 = parseInt(`${año}001`);
  let fecha2 = parseInt(`${año}931`);
  let fecha3 = parseInt(`${año}1001`);
  let fecha4 = parseInt(`${año}1131`);

  CuadreModels.getPorAño(fecha1, fecha2, fecha3, fecha4, (docs) => {
    res.json(docs);
  });
};
CuadreController.deleteOne = (req, res) => {
  const id = req.params.id;
  CuadreModels.deleteOne(id, (error) => {
    if (error) {
      res.json({ error: true, message: "Error con la base de datos" });
    } else res.json({ success: true, message: "Se ah borrado el archivo" });
  });
};

module.exports = CuadreController;
