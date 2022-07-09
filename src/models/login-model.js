const loginConecction = require("./login-connection");

const loginModel = () => {};

loginModel.getusuario = (data, cb) => {
  loginConecction.find({ usuario: data.usuario }).exec((err, doc) => {
    if (err) throw err;
    else {
      cb(doc);
    }
  });
};

module.exports = loginModel;
