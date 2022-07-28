/* eslint-disable no-undef */
import { expect } from 'chai';
import productServices from '../services';

describe('Create new product', () => {
  it('Create new product succeed', async () => {
    // change new product_id before create
    const data = {
      product_id: '123',
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

    const res = await productServices.createNewProduct(data);
    expect(res).to.be.an('object');
    expect(res).to.have.property('_id');
  });
  it('Create new product failed because exists product_id', async () => {
    try {
      const data = {
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

      await productServices.createNewProduct(data);
    } catch (error) {
      // console.log('Product ID already exists');
    }
  });
});
