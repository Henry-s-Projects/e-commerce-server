import express from 'express';
import productController from './controllers';
import authAdmin from '../../middlewares/authAdmin';
import auth from '../../middlewares/auth';

const productRoutes = express.Router();

// GET
productRoutes.get('/', productController.getProducts);
// POST
productRoutes.post('/', auth, authAdmin, productController.createProduct);
// PUT
productRoutes.put('/:id', auth, authAdmin, productController.updateProduct);
// DELETE
productRoutes.delete('/:id', auth, authAdmin, productController.deleteProduct);

export default productRoutes;
