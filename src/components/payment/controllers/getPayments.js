import paymentServices from '../services';

const getPayments = async (req, res) => {
  try {
    const payments = await paymentServices.getAll();
    return res.json({ payload: payments });
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

export default getPayments;
