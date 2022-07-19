import userRoutes from '../components/user/user.routes';
import categoryRoutes from '../components/category/category.routes';
import productRoutes from '../components/product/product.routes';
import paymentRoutes from '../components/payment/payment.routes';

const mainRoute = (app) => {
  app.use('/user', userRoutes);
  app.use('/category', categoryRoutes);
  app.use('/product', productRoutes);
  app.use('/payment', paymentRoutes);
};

export default mainRoute;
