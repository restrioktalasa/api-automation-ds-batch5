import chai, { assert } from 'chai';
import chaiJsonSchema from 'chai-json-schema';
import supertest from 'supertest';

// Use the chai-json-schema plugin
chai.use(chaiJsonSchema);

// Import the schema
import { getSchema } from '../resource/get-schema.js';
import { postSchema } from '../resource/post-schema.js';
import { putSchema } from '../resource/put-schema.js';
import { deleteSchema } from '../resource/delete-schema.js';

const baseUrl = 'https://reqres.in';
const request = supertest(baseUrl);

describe('API Automation Tests', () => {
  it('GET /users/2 - Verify user details', async () => {
    const response = await request.get('/api/users/2');
    assert.equal(response.status, 200);
    assert.jsonSchema(response.body, getSchema);
  });

  it('POST /users - Create a new user', async () => {
    const response = await request.post('/api/users')
    .send({ name: 'John Doe', job: 'leader' });
    assert.equal(response.status, 201);
    assert.jsonSchema(response.body, postSchema);
  });

  it('PUT /users/2 - Update user details', async () => {
    const response = await request.put('/api/users/2')
    .send({ name: 'Jane Doe', job: 'zion resident' });
    assert.equal(response.status, 200);
    assert.jsonSchema(response.body, putSchema);
  });

  it('DELETE /users/2 - Delete user', async () => {
    const response = await request.delete('/api/users/2');
    assert.equal(response.status, 204);
    assert.jsonSchema(response.body, deleteSchema);
  });
});
