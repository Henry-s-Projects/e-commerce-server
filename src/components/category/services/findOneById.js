import Category from '../category.model';

const findOneById = async (id) => {
  try {
    const category = await Category.findById(id);
    if (!category) {
      throw new Error('Category not found');
    }
    return category;
  } catch (error) {
    throw new Error(error.message);
  }
};

export default findOneById;
