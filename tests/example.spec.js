import { test, expect } from '@playwright/test';

test('GET user by ID', async ({ request }) => {

  const response = await request.get('https://jsonplaceholder.typicode.com/users/1');

  expect(response.status()).toBe(200);

  const user = await response.json();

  expect(user).toHaveProperty('id', 1);
  expect(user).toHaveProperty('name');
  expect(user).toHaveProperty('email');

});

test('POST create new user', async ({ request }) => {

  const response = await request.post('https://jsonplaceholder.typicode.com/users', {
    data: {
      name: 'Gisela Mora',
      email: 'gisela@test.com'
    }
  });

  expect(response.status()).toBe(201);

  const newUser = await response.json();

  expect(newUser).toHaveProperty('name', 'Gisela Mora');
  expect(newUser).toHaveProperty('email', 'gisela@test.com');
  expect(newUser).toHaveProperty('id');

});