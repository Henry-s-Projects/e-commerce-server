import express from 'express';
import categoryController from './controllers';
import authAdmin from '../../middlewares/authAdmin';
import auth from '../../middlewares/auth';

const categoryRoutes = express.Router();
// GET
categoryRoutes.get('/', categoryController.getCategories);
// POST
categoryRoutes.post('/', auth, authAdmin, categoryController.createCategory);
// PUT
categoryRoutes.put('/:id', auth, authAdmin, categoryController.updateCategory);
// DELETE
categoryRoutes.delete(
  '/:id',
  auth,
  authAdmin,
  categoryController.deleteCategory
);

export default categoryRoutes;
