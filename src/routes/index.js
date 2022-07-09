import userRoutes from "../components/user/user.routes";
import categoryRoutes from "../components/category/category.routes";
import auth from "../middlewares/auth";

const mainRoute = (app) => {
  app.use("/user", userRoutes);
  app.use("/category", auth, categoryRoutes);
};

export default mainRoute;
