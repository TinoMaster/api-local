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

let urlImage = "";

trabajadorController.getAll = (req, res) => {
  trabajadorModel.getAll((docs) => res.send(docs));
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

trabajadorController.saveImage = async (req, res) => {
  const { image } = req.files;

  try {
    await s3
      .putObject({
        ACL: "public-read",
        Bucket: BucketName,
        Body: image.data,
        Key: image.name,
      })
      .promise();

    urlImage = `https://${BucketName}.${EndPoint}/${image.name}`;
  } catch (error) {
    console.log(error);
    res.send(error);
  }
  return res.json({
    success: true,
    message: "Archivos subidos correctamente",
  });
};

trabajadorController.saveWorker = async (req, res) => {
  const data = req.body;
  const newPassword = await hashPassword(data.contraseña);
  const newData = { ...data, image: urlImage, contraseña: newPassword };

  trabajadorModel.saveWorker(newData, (error, docs) => {
    if (error) {
      res.json({
        error: true,
        message: "Error de conexion",
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

module.exports = trabajadorController;
