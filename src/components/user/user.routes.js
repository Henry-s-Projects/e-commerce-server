import express from 'express';
import userController from './controllers';
import auth from '../../middlewares/auth';

const userRoutes = express.Router();

// GET
userRoutes.get('/refresh_token', userController.refreshToken);
userRoutes.get('/logout', userController.logout);
userRoutes.get('/getInfo', auth, userController.getInfo);
userRoutes.get('/history', auth, userController.historyOrder);
// POST
userRoutes.post('/register', userController.register);
userRoutes.post('/login', userController.login);
// PUT
// DELETE
// PATCH
userRoutes.patch('/addCart', auth, userController.addCart);

export default userRoutes;
