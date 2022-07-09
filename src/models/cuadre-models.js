const cuadreConnections = require("./cuadre-connection");
const CuadreModel = () => {};

CuadreModel.getAll = (cb) => {
  cuadreConnections.find().exec((err, docs) => {
    if (err) throw err;
    cb(docs);
  });
};

CuadreModel.save = (data, cb) => {
  cuadreConnections.countDocuments({ id: data.id }).exec((err, count) => {
    if (err) throw err;
    if (count === 0) {
      cuadreConnections.create(data, (err) => {
        if (err) throw err;
        cb();
      });
    } else if (count === 1) {
      console.log('El dia ya existe');
      /* cuadreConnections.findOneAndUpdate(
        { id: data.id },
        {
          fecha: data.fecha,
          miron: data.miron,
          efectivo: data.efectivo,
          fondo: data.fondo,
          salario1: data.salario1,
          salario2: data.salario2,
          turno: {
            trabajador1: data.turno.trabajador1,
            trabajador2: data.turno.trabajador2,
          },
          dueño: data.dueño,
        },
        (err) => {
          if (err) throw err;
          cb();
        }
      ); */
    }
  });
};

CuadreModel.getMonth = (id1, id2, cb) => {
  cuadreConnections.find({ id: { $gte: id1, $lte: id2 } }).exec((err, docs) => {
    if (err) throw err;
    cb(docs);
  });
};

CuadreModel.getPorAño = async (id1, id2, id3, id4, cb) => {
  const bd = await cuadreConnections.find({ id: { $gte: id1, $lte: id2 } });
  const bd2 = await cuadreConnections.find({ id: { $gte: id3, $lte: id4 } });
  const bd3 = await  [...bd, ...bd2];
  cb(bd3);
};

module.exports = CuadreModel;
