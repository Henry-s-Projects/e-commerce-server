import Payment from '../payment.model';

const createNewPayment = async (payment) => {
  try {
    const newPayment = new Payment(payment);
    newPayment.save();

    return newPayment;
  } catch (error) {
    throw new Error(error);
  }
};

export default createNewPayment;
