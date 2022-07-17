import Payment from '../payment.model';

const getPaymentByUserId = async (id) => {
  try {
    const payments = await Payment.find({ user_id: id });
    return payments;
  } catch (error) {
    throw new Error(error);
  }
};

export default getPaymentByUserId;
