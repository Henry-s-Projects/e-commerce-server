import Product from '../product.model';

const updateById = async (id, info) => {
  try {
    const product = await Product.findById(id);
    if (!product) {
      throw new Error('Product not found');
    }
    await Product.findByIdAndUpdate(id, info);
  } catch (error) {
    throw new Error(error.message);
  }
};

export default updateById;
