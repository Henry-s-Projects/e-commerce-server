import userServices from '../../user/services';

const updateCart = async (userId) => {
  try {
    await userServices.updateById(userId, { cart: '' });
  } catch (error) {
    throw new Error(error.message);
  }
};

export default updateCart;
