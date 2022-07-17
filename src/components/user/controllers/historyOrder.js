import paymentServices from '../../payment/services';

const historyOrder = async (req, res) => {
  try {
    const user = req.user;
    const history = await paymentServices.getPaymentByUserId(user.id);
    return res.json({ payload: history });
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

export default historyOrder;
