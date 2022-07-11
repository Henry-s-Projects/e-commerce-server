import Category from '../category.model';
import findByName from './findByName';

const createNewCategory = async (name) => {
  try {
    const category = await findByName(name);

    if (category !== null) {
      throw new Error('Category already exists');
    }

    const newCategory = new Category({
      name,
    });
    newCategory.save();

    return newCategory;
  } catch (error) {
    throw new Error(error.message);
  }
};

export default createNewCategory;
