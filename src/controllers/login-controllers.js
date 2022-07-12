const loginModels = require("../models/login-model");

const loginControllers = () => {};

loginControllers.getUsuario = (req, res) => {
  let data = {
    nombre: req.body.nombre,
    contraseña: req.body.contraseña,
  };
  loginModels.getusuario(data, (docs) => {
    console.log(data.contraseña);
    console.log(docs);
    if (docs.length > 0) {
      if (data.contraseña == docs[0].contraseña) {
        res.json(docs);
      } else console.log("error de contraseña");
    } else {
      console.log("incorrecta");
    }
  });
};

loginControllers.postUsuario = (req, res) => {
  let data = req.body;
  console.log(data);

  loginModels.postUsuario(data, () => {
    res.send(console.log("Usuario creado correctamente"));
  });
};

module.exports = loginControllers;
