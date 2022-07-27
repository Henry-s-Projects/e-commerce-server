/* eslint-disable no-undef */
import productServices from '../services';

describe('Update product', () => {
  it('Update product succeed', async () => {
    const updateInfo = {
      product_id: '001',
      title: 'Jacket',
      price: '70',
      description: 'Jacket for man',
      content: 'One Product for man to push your attractive level up',
      images: {
        url: 'http://res.cloudinary.com/vuluuu1120/image/upload/v1657387906/ecommerce/yxo8z3d4o9xftlmtk9tf.jpg',
        public_id: 'ecommerce/yxo8z3d4o9xftlmtk9tf',
      },
      category: 'Man',
    };

    const id = '62e15b5e2bf636cf496e9b2b';

    await productServices.updateById(id, updateInfo);
  });
  it('Update product failed because product not found by id', async () => {
    try {
      const updateInfo = {};

      const id = '62e159df74291e2e61794a3d33';

      await productServices.updateById(id, updateInfo);
    } catch (error) {
      // console.log('Product not found');
    }
  });
});
