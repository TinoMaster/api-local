const loginConecction = require("./login-connection");

const loginModel = () => {};

loginModel.getAdmin = (cb) => {
  loginConecction.find().exec((err, doc) => {
    if (err) throw err;
    else {
      cb(doc);
    }
  });
};

loginModel.getusuario = (data, cb) => {
  loginConecction.find({ nombre: data.nombre }).exec((err, doc) => {
    if (err) throw err;
    else {
      cb(doc);
    }
  });
};

loginModel.postUsuario = (data, cb) => {
  loginConecction.create(data, (err) => {
    if (err) throw err;
    cb();
  });
};

module.exports = loginModel;
