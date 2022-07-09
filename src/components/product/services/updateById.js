import Product from "../product.model";

const updateById = async (id, info) => {
  try {
    const product = await Product.findByIdAndUpdate(id, info);
    return product;
  } catch (error) {
    throw new Error(error.message);
  }
};

export default updateById;
