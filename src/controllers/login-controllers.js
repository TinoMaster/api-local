const loginModels = require("../models/login-model");

const loginControllers = () => {};

loginControllers.getUsuario = (req, res) => {
  let data = {
    usuario: req.body.usuario,
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

module.exports = loginControllers;
