const trabajadorModel = require("../models/trabajador-model");

const trabajadorController = () => {};

const AWS = require("aws-sdk");

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

trabajadorController.saveWorker = (req, res) => {
  const data = req.body;
  const newData = { ...data, image: urlImage };
  console.log(req.body);
  console.log(newData);

  trabajadorModel.saveWorker(newData, (docs) => {
    res.json(docs);
  });
};

module.exports = trabajadorController;
