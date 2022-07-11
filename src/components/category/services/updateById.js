import Category from '../category.model';

const updateById = async (id, data) => {
  try {
    const category = await Category.findByIdAndUpdate(id, data);
    return category;
  } catch (error) {
    throw new error(error.message);
  }
};

export default updateById;
