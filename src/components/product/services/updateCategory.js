import findByProp from './findByProp';
import updateById from './updateById';

const updateCategory = async (oldCategory, newCategory) => {
  try {
    const products = await findByProp({ category: oldCategory });
    products.forEach(async (product) => {
      await updateById(product._id, { category: newCategory });
    });
  } catch (error) {
    throw new Error(error.message);
  }
};

export default updateCategory;
