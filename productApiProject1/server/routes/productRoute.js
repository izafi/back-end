const express = require("express");

const createProduct = require("../controller/productController")

    const router = express.Router();

router.post("/", createProduct);
// router.get("/", getProduct);
// router.get("/:id", getProduct);
// router.put("/:id", updateProduct);
// router.delete("/:id", deleteProduct);

module.exports= router;