import Payment from '../payment.model';
import updateSold from './updateSold';

const createNewPayment = async (payment) => {
  try {
    const newPayment = new Payment(payment);
    await newPayment.save();

    await payment.cart.forEach(async (item) => {
      await updateSold(item._id, item.quantity);
    });

    return newPayment;
  } catch (error) {
    throw new Error(error);
  }
};

export default createNewPayment;
