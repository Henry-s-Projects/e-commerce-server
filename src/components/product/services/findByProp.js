import Product from '../product.model';

const findByProp = async (filter) => {
  try {
    const product = await Product.find(filter);
    return product;
  } catch (error) {
    throw new Error(error.message);
  }
};

export default findByProp;
