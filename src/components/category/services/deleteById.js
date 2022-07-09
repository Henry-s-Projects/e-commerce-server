import Category from "../category.model";

const deleteById = async (id) => {
  try {
    await Category.findByIdAndDelete(id);
    return true;
  } catch (error) {
    throw new Error(error.message);
  }
};

export default deleteById;
