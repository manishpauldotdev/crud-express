const express = require("express");
const productController = require("../controllers/product.controller");
const router = express.Router();

router.get("/", productController.getProducts);
router.get("/:d", productController.getProduct);

router.post("/", productController.createProduct);

router.put("/:id", productController.updateProduct);

router.delete("/:id", productController.deleteProduct);

module.exports = router;
