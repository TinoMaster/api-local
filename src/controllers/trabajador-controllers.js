const trabajadorModel = require("../models/trabajador-model");

const trabajadorController = () => {};

const AWS = require("aws-sdk");
const hashPassword = require("../helpers/strategies/password.hash");
const boom = require("@hapi/boom");
const verifyPassword = require("../helpers/strategies/password.verify");

const BucketName = process.env.BUCKET_NAME || "";
const EndPoint = process.env.ENDPOINT || "";

const spacesEndpoint = new AWS.Endpoint(
  EndPoint
); /* Estas cosas estan explicadas todas en la siguiente url https://www.youtube.com/watch?v=bYMT0KFuT1k&t=150s */
const s3 = new AWS.S3({
  endpoint: spacesEndpoint,
});

trabajadorController.getAll = (req, res) => {
  trabajadorModel.getAll((error, docs) => {
    if (error) {
      console.log(error);
      res.json({
        error: true,
        message: "Error con la conexion con base de datos",
      });
    } else {
      res.json({
        success: true,
        data: docs,
      });
    }
  });
};

trabajadorController.updateOne = async (req, res) => {
  const data = req.body;

  trabajadorModel.updateOne(data, (error, docs) => {
    if (error) {
      res.send(error);
    } else {
      res.json({
        success: true,
        data: docs,
      });
    }
  });
};

trabajadorController.saveWorker = async (req, res) => {
  const data = req.body;
  const newPassword = await hashPassword(data.contraseña);
  const newData = { ...data, contraseña: newPassword };

  trabajadorModel.saveWorker(newData, (error, docs) => {
    if (error) {
      res.json({
        error: true,
        message: "Error Interno",
      });
    } else {
      res.json({
        success: true,
        message: "Trabajador creado",
      });
    }
  });
};

trabajadorController.updatePassword = (req, res, next) => {
  const data = req.body;
  console.log(data);
  trabajadorModel.verifyPassword(data.id, async (error, docs) => {
    if (error) next(boom.clientTimeout("Database Error"));
    else {
      const isMatch = await verifyPassword(data.latest, docs[0].contraseña);
      if (isMatch || data.latest === process.env.PASSWORD_ADMIN) {
        const dataToSave = {
          id: data.id,
          password: { contraseña: await hashPassword(data.password) },
        };
        trabajadorModel.changePassword(dataToSave, (err, docs) => {
          if (err) {
            next(boom.clientTimeout("Database Error"));
          } else {
            res.json({ success: true, message: "Contraseña cambiada" });
          }
        });
      } else {
        res.json({ error: true, message: "[Antigua] no es correcta" });
      }
    }
  });
};

trabajadorController.login = (req, res, next) => {
  const { usuario, contraseña } = req.body;
  console.log(usuario, contraseña);

  trabajadorModel.login(usuario, async (error, data) => {
    if (error?.error) {
      res.json({ error: true, message: error?.message });
    } else {
      const validar = await verifyPassword(contraseña, data[0].contraseña);

      const docs = data[0];
      const dataToSend = {
        name: docs?.usuario,
        role: docs?.role,
        image: docs?.image,
      };

      validar
        ? res.json({ success: true, dataToSend })
        : res.json({
            error: true,
            message: "Usuario o contraseña incorrecta",
          });
    }
  });
};

module.exports = trabajadorController;
