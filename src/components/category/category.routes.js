import express from "express";
import categoryController from "./controllers";
import authAdmin from "../../middlewares/authAdmin";

const categoryRoutes = express.Router();
// GET
categoryRoutes.get("/", categoryController.getCategories);
// POST
categoryRoutes.post("/", authAdmin, categoryController.createCategory);
// PUT
categoryRoutes.put("/:id", authAdmin, categoryController.updateCategory);
// DELETE
categoryRoutes.delete("/:id", authAdmin, categoryController.deleteCategory);

export default categoryRoutes;
