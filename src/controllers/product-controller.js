const ProductModel = require("../models/products-model");
const ProductController = () => {};

ProductController.getAll = (req, res) => {
  console.log(req.url);
  ProductModel.getAll((error, data) => {
    if (error) {
      res.json({
        error: true,
        message: "No se ah podido conectar a la base de datos",
      });
    } else {
      res.json({
        success: true,
        data,
      });
    }
  });
};

ProductController.getById = (req, res) => {
  const id = req.params;
  ProductModel.getById(id, (error, docs) => {
    if (error) {
      res.json({ error: true, message: "Error con la BD" });
    } else res.json({ success: true, data: docs });
  });
};

ProductController.updateOne = (req, res) => {
  const data = req.body;
  ProductModel.updateOne(data, (error) => {
    if (error) {
      res.json({ error: true, message: "Ah ocurrido un error" });
    } else
      res.json({ success: true, message: "Se ah actualizado correctamente" });
  });
};

ProductController.saveProduct = (req, res) => {
  const data = req.body;
  ProductModel.saveProduct(data, (error) => {
    if (error) {
      res.json({
        error: true,
        message: "No se ah podido introducir el producto",
      });
    } else {
      res.json({ success: true, data });
    }
  });
};

ProductController.deleteProduct = (req, res) => {
  const id = req.params.id;
  ProductModel.deleteProduct(id, (error) => {
    if (error) {
      res.json({ error: true, message: "Ah ocurrido un error" });
    } else {
      res.json({ success: true, message: "Borrado Exitoso" });
    }
  });
};

module.exports = ProductController;
