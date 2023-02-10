import Payment from '../payment.model';
import updateSold from './updateSold';
import updateCart from './updateCart';

const createNewPayment = async (payment) => {
  try {
    const newPayment = new Payment(payment);
    await newPayment.save();

    await payment.cart.forEach(async (item) => {
      await updateSold(item._id, item.quantity);
    });

    await updateCart(payment.user_id);

    return newPayment;
  } catch (error) {
    throw new Error(error);
  }
};

export default createNewPayment;
