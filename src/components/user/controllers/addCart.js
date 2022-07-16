import userServices from '../services';

const addCart = async (req, res) => {
  try {
    const user = req.user;
    if (!user) return res.status(401).json({ message: 'Unauthorized' });

    await userServices.updateById(user.id, { cart: req.body.cart });

    return res.json({ msg: 'Added to cart' });
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

export default addCart;
