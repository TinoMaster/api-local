const CuadreModels = require("../models/cuadre-models");

const CuadreController = () => {};

CuadreController.getAll = (req, res) => {
  CuadreModels.getAll((docs) => {
    res.send(docs);
  });
};

CuadreController.save = (req, res) => {
  console.log(req.body);
  let data = {
    id: req.body.id,
    fecha: req.body.fecha,
    miron: req.body.miron,
    efectivo: req.body.efectivo,
    fondo: req.body.fondo,
    salario1: req.body.salario1,
    salario2: req.body.salario2,
    turno: req.body.turno,
    dueño: req.body.dueño,
  };
  CuadreModels.save(data, () => {
    res.send(console.log("se ah introducido el dato"));
  });
};

CuadreController.getMonth = (req, res) => {
  let mes = req.url;
  let fecha1;
  let fecha2;

  switch (mes) {
    case "/cuadre/enero":
      fecha1 = 2022001;
      fecha2 = 2022031;
      break;
    case "/cuadre/febrero":
      fecha1 = 2022101;
      fecha2 = 2022129;
      break;
    case "/cuadre/marzo":
      fecha1 = 2022201;
      fecha2 = 2022231;
      break;
    case "/cuadre/abril":
      fecha1 = 2022301;
      fecha2 = 2022330;
      break;
    case "/cuadre/mayo":
      fecha1 = 2022401;
      fecha2 = 2022431;
      break;
    case "/cuadre/junio":
      fecha1 = 2022501;
      fecha2 = 2022530;
      break;
    case "/cuadre/julio":
      fecha1 = 2022601;
      fecha2 = 2022631;
      break;
    case "/cuadre/agosto":
      fecha1 = 2022701;
      fecha2 = 2022731;
      break;
    case "/cuadre/septiembre":
      fecha1 = 2022801;
      fecha2 = 2022830;
      break;
    case "/cuadre/octubre":
      fecha1 = 2022901;
      fecha2 = 2022931;
      break;
    case "/cuadre/noviembre":
      fecha1 = 20221001;
      fecha2 = 20221030;
      break;
    case "/cuadre/diciembre":
      fecha1 = 20221101;
      fecha2 = 20221131;
      break;
  }
  CuadreModels.getMonth(fecha1, fecha2, (docs) => {
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

  CuadreModels.getPorAño(fecha1, fecha2,fecha3,fecha4, (docs) => {
    res.json(docs);
  });
};

module.exports = CuadreController;
