import express from "express";
import productController from "./controllers";
import authAdmin from "../../middlewares/authAdmin";

const productRoutes = express.Router();

// GET
productRoutes.get("/", productController.getProducts);
// POST
productRoutes.post("/", authAdmin, productController.createProduct);
// PUT
productRoutes.put("/:id", authAdmin, productController.updateProduct);
// DELETE
productRoutes.delete("/:id", authAdmin, productController.deleteProduct);

export default productRoutes;
