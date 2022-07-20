import categoryServices from '../services';
import productServices from '../../product/services';

const updateCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const category = await categoryServices.findOneById(id);
    const { name } = req.body;
    await categoryServices.updateById(id, { name });
    await productServices.updateCategory(category.name, name);
    return res.json({ msg: 'Category updated' });
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

export default updateCategory;
