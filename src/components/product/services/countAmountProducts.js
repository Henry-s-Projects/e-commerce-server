import Product from '../product.model';

const countAmountProducts = async (filter) => {
  const amount = await Product.count(filter);
  return amount;
};

export default countAmountProducts;
