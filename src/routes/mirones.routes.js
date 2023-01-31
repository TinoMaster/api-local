const express = require("express"),
  router = express.Router(),
  MironesController = require("../controllers/mirones-controllers"),
  cors = require("cors"),
  path = require("path");

const convertXLSX = require("../helpers/convertXLSX");
const handlerCSV = require("../helpers/handlerCSV");
let nameOfData;

const multer = require("multer");
const storage = multer.diskStorage({
  destination: "uploads/",
  filename: function (req, file, cb) {
    nameOfData = file.originalname.split(" ")[0];
    cb(null, file.originalname.split(" ")[0] + path.extname(file.originalname));
  },
});
const upload = multer({ storage });

router.use(cors());
router.get("/mirones", MironesController.getAll);
router.post(
  "/mirones/handlerExcel",
  upload.single("file"),
  async (req, res) => {
    const archivo = req.file;
    convertXLSX(archivo.path)
      .then(() => {
        handlerCSV("public/csv/data.csv", nameOfData)
          .then((data) => {
            
            res.json({
              success: true,
              message: "Archivo procesado correctamente",
              data,
            });
          })
          .catch((err) => {
            console.log(err);
            res.status(500).json({ error: true, message: "Internal error" });
          });
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({ error: true, message: "Internal error" });
      });
  }
);

module.exports = router;
