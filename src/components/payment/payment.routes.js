import express from 'express';
import auth from '../../middlewares/auth';
import authAdmin from '../../middlewares/authAdmin';
import paymentControllers from './controllers';

const paymentsRoutes = express.Router();

// GET
paymentsRoutes.get('/', auth, authAdmin, paymentControllers.getPayments);
// POST
paymentsRoutes.post('/', auth, paymentControllers.createPayment);
// PUT
// DELETE

export default paymentsRoutes;
