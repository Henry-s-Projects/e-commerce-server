/* eslint-disable no-undef */
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import server from '../../../../server';

chai.use(chaiHttp);

describe('GET /category', () => {
  it('Get categories succeed', async () => {
    const res = await chai.request(server).get('/category');
    expect(res.status).to.equal(200);
    expect(res.body.payload).to.be.an('array');
  });
});
