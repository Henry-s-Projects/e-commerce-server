/* eslint-disable no-undef */
import { expect } from 'chai';
import categoryServices from '../services';

describe('Update category', () => {
  it('Update succeed', async () => {
    const name = 'Test category updated';
    const id = '62e2aa9dad544055f87da910';

    const res = await categoryServices.updateById(id, { name });
    expect(res).to.have.property('_id');
    expect(res).to.be.an('object');
  });
  it('Update failed because name already exists', async () => {
    try {
      const name = 'category 1';
      const id = '62e2aa9dad544055f87da910';
      await categoryServices.updateById(id, { name });
    } catch (error) {
      // console.log('Category name already exists');
    }
  });
  it('Update failed because category not found', async () => {
    try {
      const name = 'category 1';
      const id = '123456';
      await categoryServices.updateById(id, { name });
    } catch (error) {
      // console.log('Category name already exists');
    }
  });
});
