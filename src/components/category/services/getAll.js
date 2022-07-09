import Category from "../category.model";

const getAll = async () => {
  try {
    const categories = await Category.find();
    return categories;
  } catch (error) {
    throw new Error(error.message);
  }
};

export default getAll;
