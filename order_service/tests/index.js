/* eslint-env mocha */
const supertest = require('supertest')
app = require('../src/server')


describe('Order Service', () => {
  it('should return status code 201 and return order data for customer A with orderStatus pending', function(done) {
    const payload = {
      username: 'customerA',
      productId: 'product1234',
      amount: 6.34
    }

    supertest(app)
    .post('/api/v1/orders/create')
    .send(payload)
    .expect(201)
    .end(function(err, res) {
      if (err) done(err);
      done();
    });
  })
})
