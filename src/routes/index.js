import userRoutes from "../components/user/user.routes";

const mainRoute = (app) => {
  app.use("/user", userRoutes);
};

export default mainRoute;
