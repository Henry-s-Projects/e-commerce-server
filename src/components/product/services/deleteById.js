import Product from '../product.model';
import deleteAsset from '../../../utils/deleteAsset';

const deleteById = async (id) => {
  try {
    // delete image on cloudinary
    const product = await Product.findById(id);
    if (!product) {
      throw new Error('Product not found');
    }
    deleteAsset(product.images.public_id);

    // delete product in product collection
    await Product.findByIdAndDelete(id);
  } catch (error) {
    throw new Error(error.message);
  }
};

export default deleteById;
