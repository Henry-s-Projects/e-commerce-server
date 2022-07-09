import Product from "../product.model";

const getAll = async () => {
  try {
    const products = await Product.find({});
    return products;
  } catch (error) {
    throw new Error(error.message);
  }
};

export default getAll;
