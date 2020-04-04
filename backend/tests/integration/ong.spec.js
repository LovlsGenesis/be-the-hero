const request = require('supertest')
const app = require('../../src/app')
const connection = require('../../src/database/connection')

describe('ONG', () => {
  beforeEach(async () => {
    await connection.migrate.rollback();
    await connection.migrate.latest();
  });

  afterAll(async () => {
    await connection.destroy();
  })

  it('should be able to create a new ONG', async () => {
      const response = await request(app)
      .post('/ongs')
      // .set('Authorization', 'ce359d61' ) set Authorization with ong id
      .send({
          name: "APAD5",
          email: "contato@apad.com.br",
          whatsapp: "4700000000",
          city: "Sao Paulo",
          uf: "SP"
      });

      expect(response.body).toHaveProperty('id');
      expect(response.body.id).toHaveLength(8);
      console.log(response.body)
  })
})