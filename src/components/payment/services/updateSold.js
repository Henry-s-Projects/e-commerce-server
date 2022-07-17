import productServices from '../../product/services';

const updateSold = async (id, quantity) => {
  try {
    const product = await productServices.getById(id);
    if (!product) {
      throw new Error('Product not found');
    }
    const newSold = product.sold + quantity;
    await productServices.updateById(id, { sold: newSold });
  } catch (error) {
    throw new Error(error.message);
  }
};

export default updateSold;
