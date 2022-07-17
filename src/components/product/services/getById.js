import Product from '../product.model';

const getById = async (id) => {
  try {
    const product = await Product.findById(id);
    if (!product) {
      throw new Error('Product not found');
    }
    return product;
  } catch (error) {
    throw new Error(error.message);
  }
};

export default getById;
