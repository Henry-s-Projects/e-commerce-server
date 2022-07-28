/* eslint-disable no-undef */
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import server from '../../../../server';
import paymentServices from '../services';

chai.use(chaiHttp);

describe('Get payments', () => {
  it('Get payments succeed', async () => {
    await chai.request(server).get('/payment');
    const res = await paymentServices.getAll();
    expect(res).to.be.an('array');
  });
  it('Get payments by userId', async () => {
    const id = 'truongvukt2000@gmail.com';
    const res = await paymentServices.getPaymentByUserId(id);
    expect(res).to.be.an('array');
  });
});
