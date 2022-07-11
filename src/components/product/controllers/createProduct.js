import productServices from '../services';

const createProduct = async (req, res) => {
  try {
    const { product_id, title, price, description, content, images, category } =
      req.body;
    const newProduct = await productServices.createNewProduct({
      product_id,
      title,
      price,
      description,
      content,
      images,
      category,
    });
    return res.json({ payload: newProduct });
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

export default createProduct;
