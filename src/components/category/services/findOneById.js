import Category from '../category.model';

const findOneById = async (id) => {
  try {
    const category = await Category.findById(id);
    return category;
  } catch (error) {
    throw new Error('Category not found');
  }
};

export default findOneById;
