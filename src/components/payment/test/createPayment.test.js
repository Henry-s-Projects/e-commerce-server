/* eslint-disable no-undef */
import paymentServices from '../services';
import { expect } from 'chai';

describe('Create new payment', () => {
  it('Create succeed', async () => {
    const newPayment = {
      user_id: '62c84882a0849b2920957df8',
      name: 'Vu Luu',
      email: 'truongvukt2000@gmail.com',
      cart: [
        {
          product_id: 'pct1',
        },
      ],
      paymentID: 'PAYID-MLKBRZA39T73514WW587340B',
      address: {
        city: 'San Jose',
        country_code: 'US',
        line1: '1 Main St',
        postal_code: '95131',
        recipient_name: 'John Doe',
        state: 'CA',
      },
    };
    const res = await paymentServices.createNewPayment(newPayment);
    expect(res).to.be.an('object');
  });
});
