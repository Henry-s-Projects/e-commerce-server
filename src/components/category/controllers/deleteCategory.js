import categoryServices from '../services';

const deleteCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedCategory = await categoryServices.deleteById(id);
    if (deletedCategory) {
      return res.json({ msg: 'Category deteled.' });
    } else {
      return res.status(400).json({ msg: 'Category not found.' });
    }
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

export default deleteCategory;
