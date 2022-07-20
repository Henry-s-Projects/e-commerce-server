import Product from '../product.model';

const createNewProduct = async (data) => {
  try {
    const { product_id, title, price, description, content, images, category } =
      data;
    const product = await Product.findOne({ product_id });
    if (product) {
      throw new Error('Product ID already exists');
    }
    const newProduct = new Product({
      product_id,
      title,
      price,
      description,
      content,
      images,
      category,
    });
    newProduct.save();
    return newProduct;
  } catch (error) {
    throw new Error(error.message);
  }
};

export default createNewProduct;
