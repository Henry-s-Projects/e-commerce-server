/* eslint-disable no-undef */
import { expect } from 'chai';
import categoryServices from '../services';

describe('Create new category', () => {
  it('Create succeed', async () => {
    const name = 'Test category 3';
    const res = await categoryServices.createNewCategory(name);
    expect(res).to.have.property('_id');
    expect(res).to.be.an('object');
  });
  it('Create failed because name already exists', async () => {
    try {
      const name = 'category 1';
      await categoryServices.createNewCategory(name);
    } catch (error) {
      // console.log('Category already exists');
    }
  });
});
