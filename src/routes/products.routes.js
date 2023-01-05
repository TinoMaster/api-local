const express = require("express"),
  router = express.Router(),
  ProductController = require("../controllers/product-controller");

router.get("/products", ProductController.getAll);

router.get("/products/getOne/:id", ProductController.getById);

router.post("/products/addProduct", ProductController.saveProduct);

router.put("/products/updateProduct", ProductController.updateOne);

router.delete("/products/:id", ProductController.deleteProduct);

module.exports = router;
