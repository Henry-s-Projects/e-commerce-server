import productServices from '../services';

const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    await productServices.deleteById(id);
    const products = await productServices.getAll();
    return res.json({ msg: 'product deleted', payload: products });
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

export default deleteProduct;
