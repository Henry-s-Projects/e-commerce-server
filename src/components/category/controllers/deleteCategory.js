import categoryServices from '../services';
import productServices from '../../product/services';

const deleteCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const category = await categoryServices.findOneById(id);
    const products = await productServices.findByProp({
      category: category.name,
    });
    if (products.length > 0) {
      return res.status(400).json({
        msg: 'Please delete all products in this category before deleting this category',
      });
    }

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
