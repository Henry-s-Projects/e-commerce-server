import express from "express";
import userController from "./controllers";

const userRoutes = express.Router();

// GET
userRoutes.get("/refresh_token", userController.refreshToken);
// POST
userRoutes.post("/register", userController.register);
// PUT
// DELETE

export default userRoutes;
