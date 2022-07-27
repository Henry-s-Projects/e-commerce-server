/* eslint-disable no-undef */
import chai, { expect } from 'chai';
import server from '../../../../server';
import chaiHttp from 'chai-http';

chai.use(chaiHttp);

describe('Post /user/register', () => {
  it('Register succeeed', async () => {
    const account = {
      name: 'User 2',
      email: 'user2@gmail.com',
      password: '123456',
    };
    const res = await chai.request(server).post('/user/register').send(account);
    expect(res.status).to.equal(200);
    expect(res.body.payload).to.be.an('object');
  });
  it('Register failed because email is exist', async () => {
    const account = {
      name: 'User 1',
      email: 'user1@gmail.com',
      password: '123456',
    };
    const res = await chai.request(server).post('/user/register').send(account);
    expect(res.status).to.equal(400);
  });
  it('Register failed because password length less than 6 characters', async () => {
    const account = {
      name: 'User 1',
      email: 'abc@gmail.com',
      password: '123',
    };
    const res = await chai.request(server).post('/user/register').send(account);
    expect(res.status).to.equal(400);
  });
});
