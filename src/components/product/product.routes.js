import express from 'express';
import productController from './controllers';
import authAdmin from '../../middlewares/authAdmin';
import auth from '../../middlewares/auth';

const productRoutes = express.Router();

// GET
productRoutes.get('/', productController.getProducts);
// POST
productRoutes.post('/', auth, authAdmin, productController.createProduct);
productRoutes.post('/upload', auth, authAdmin, productController.uploadImg);
productRoutes.post('/destroy', auth, authAdmin, productController.deleteImg);
// PUT
productRoutes.put('/:id', auth, authAdmin, productController.updateProduct);
// DELETE
productRoutes.delete('/:id', auth, authAdmin, productController.deleteProduct);

export default productRoutes;
