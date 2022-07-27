/* eslint-disable no-undef */
import productServices from '../services';

describe('Delete Product', () => {
  it('Delete product succeed', async () => {
    // replace id of product to delete
    const id = '62e159df74291e2e61794a3d';
    await productServices.deleteById(id);
  });
  it('Delete product failed because product not found', async () => {
    try {
      const id = '62e14ea5419eb419890672c7';
      await productServices.deleteById(id);
    } catch (error) {
      // console.log('Product not found');
    }
  });
});
