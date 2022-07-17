import paymentServices from '../services';

const createPayment = async (req, res) => {
  try {
    const user = req.user;
    const { cart, paymentID, address } = req.body;
    const newPayment = await paymentServices.createNewPayment({
      user_id: user._id,
      name: user.name,
      email: user.email,
      paymentID,
      address,
      cart,
    });

    return res.json({ payload: newPayment });
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

export default createPayment;
