import Payment from '../payment.model';

const getAll = async () => {
  try {
    const payments = await Payment.find();
    return payments;
  } catch (error) {
    throw new Error(error);
  }
};

export default getAll;
