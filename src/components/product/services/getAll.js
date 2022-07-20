import Product from '../product.model';

const getAll = async (filter, itemsPerPage, page, sortCondition) => {
  try {
    const products = await Product.find(filter)
      .sort(sortCondition)
      .limit(itemsPerPage)
      .skip(itemsPerPage * page);

    return products;
  } catch (error) {
    throw new Error(error.message);
  }
};

export default getAll;
