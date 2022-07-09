import userRoutes from "../components/user/user.routes";
import categoryRoutes from "../components/category/category.routes";
import productRoutes from "../components/product/product.routes";
import auth from "../middlewares/auth";

const mainRoute = (app) => {
  app.use("/user", userRoutes);
  app.use("/category", auth, categoryRoutes);
  app.use("/product", auth, productRoutes);
};

export default mainRoute;
