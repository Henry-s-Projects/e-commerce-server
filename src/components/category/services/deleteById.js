import Category from '../category.model';

const deleteById = async (id) => {
  try {
    const category = await Category.findById(id);
    if (!category) {
      throw new Error('Category not found');
    }
    await Category.findByIdAndDelete(id);
    return true;
  } catch (error) {
    throw new Error(error.message);
  }
};

export default deleteById;
