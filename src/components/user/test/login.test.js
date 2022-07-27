/* eslint-disable no-undef */
process.env.NODE_ENV = 'test';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import server from '../../../../server';

chai.use(chaiHttp);

describe('POST /user/login', () => {
  it('Login succeed', async () => {
    const account = {
      email: 'truongvukt2000@gmail.com',
      password: '123456',
    };
    const res = await chai.request(server).post('/user/login').send(account);
    expect(res.status).to.equal(200);
  });
  it('Login failed because incorrect email or password', async () => {
    const incorrectEmail = {
      email: 'abc@gmail.com',
      password: '123456',
    };
    const incorrectPassword = {
      email: 'abc@gmail.com',
      password: '1',
    };
    const res1 = await chai
      .request(server)
      .post('/user/login')
      .send(incorrectEmail);
    const res2 = await chai
      .request(server)
      .post('/user/login')
      .send(incorrectPassword);
    expect(res1.status).to.equal(400);
    expect(res2.status).to.equal(400);
  });
});
