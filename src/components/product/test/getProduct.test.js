/* eslint-disable no-undef */
process.env.NODE_ENV = 'test';

import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import server from '../../../../server';

chai.use(chaiHttp);

describe('GET /product', () => {
  it('GET all the products', async () => {
    const res = await chai.request(server).get('/product');
    expect(res.status).to.equal(200);
    expect(res.body.payload).to.be.an('array');
  });
  it('Get 2 products with filter by title: Jacket', async () => {
    const res = await chai
      .request(server)
      .get('/product')
      .query({ title: 'Jacket' });
    expect(res.status).to.equal(200);
    expect(res.body.payload).to.be.an('array');
    expect(res.body.payload.length).to.equal(2); // just have 2 products with title Jacket
  });
  it('Get 0 products with filter by title dont exist: ABCDEFIKLMNOKFKKASJCHJH', async () => {
    const res = await chai
      .request(server)
      .get('/product')
      .query({ title: 'ABCDEFIKLMNOKFKKASJCHJH' });
    expect(res.status).to.equal(200);
    expect(res.body.payload).to.be.an('array');
    expect(res.body.payload.length).to.equal(0);
  });
  it('Get 5 products on page 1', async () => {
    const res = await chai
      .request(server)
      .get('/product')
      .query({ itemsPerPage: 5, page: 1 });
    expect(res.status).to.equal(200);
    expect(res.body.payload).to.be.an('array');
    expect(res.body.payload.length).to.equal(5);
  });
  it('Get all products with sorting ascending price', async () => {
    const res = await chai
      .request(server)
      .get('/product')
      .query({ sort: 'price' });

    const comparePriceBetween2Products =
      res.body.payload[0].price <= res.body.payload[1].price &&
      res.body.payload[1].price <= res.body.payload[2].price;
    expect(res.status).to.equal(200);
    expect(res.body.payload).to.be.an('array');
    expect(comparePriceBetween2Products).to.equal(true);
  });
  it('Get all products with filter paging sorting', async () => {
    const res = await chai
      .request(server)
      .get('/product')
      .query({ title: 'Jacket', itemsPerPage: 5, page: 1, sort: 'price' });
    const comparePriceBetween2Products =
      res.body.payload[0].price <= res.body.payload[1].price;
    expect(res.status).to.equal(200);
    expect(res.body.payload).to.be.an('array');
    expect(res.body.payload.length).to.equal(2); // just have 2 products with title Jacket
    expect(comparePriceBetween2Products).to.be.true;
  });
});
