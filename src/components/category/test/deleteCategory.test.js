/* eslint-disable no-undef */
import { expect } from 'chai';
import categoryServices from '../services';

describe('Delete category by id', () => {
  it('Delete succeed', async () => {
    const id = '62e2b125eaf2e9d778ea74af';
    const res = await categoryServices.deleteById(id);
    expect(res).to.be.true;
  });
  it('Delete failed because category not found by id', async () => {
    try {
      const id = '123456';
      await categoryServices.deleteById(id);
    } catch (error) {
      // console.log('Category not found');
    }
  });
});
