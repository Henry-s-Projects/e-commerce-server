import Category from '../category.model';
import findByName from './findByName';

const updateById = async (id, data) => {
  try {
    const checkCategory = await findByName(data.name);

    if (checkCategory !== null && checkCategory._id !== id) {
      throw new Error('Category name already exists');
    }

    const category = await Category.findByIdAndUpdate(id, data);
    return category;
  } catch (error) {
    throw new Error(error.message);
  }
};

export default updateById;
