import Category from '../category.model';

const findByName = async (name) => {
  try {
    const category = await Category.findOne({ name });
    return category;
  } catch (error) {
    throw new Error(error.message);
  }
};

export default findByName;
