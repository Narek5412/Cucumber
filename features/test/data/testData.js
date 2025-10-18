const { faker } = require('@faker-js/faker');

module.exports = {
  users: {
    validUser: {
      email: `tomSmith1@example.com`,
      password: 'Tom-54321',
    },
    newUserWithValidCredentials: {
      firstName: 'Tom',
      lastName: 'Smith',
      dateOfBirth: '2001-01-01',
      street: 'street',
      postalCode: '001',
      countryCode: 'AM',
      city: 'city',
      state: 'state',
      phone: '1234567890',
      email: faker.internet.email(),
      password: 'Tom-54321',
    },
    newUserWithRepeatedCredentials: {
      firstName: 'Tom',
      lastName: 'Smith',
      dateOfBirth: '2001-01-01',
      street: 'street',
      postalCode: '001',
      countryCode: 'AM',
      city: 'city',
      state: 'state',
      phone: '1234567890',
      email: `tomSmith1@example.com`,
      password: 'Tom-54321',
    },
  },

  products: {
    pliers: {
      name: 'Combination Pliers',
    },
  },
};
