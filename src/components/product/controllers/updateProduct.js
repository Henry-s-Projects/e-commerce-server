import productServices from '../services';

const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    await productServices.updateById(id, req.body);
    const products = await productServices.getAll();
    return res.json({ msg: 'product updated', payload: products });
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

export default updateProduct;
