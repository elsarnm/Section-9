/* eslint-disable eol-last */
/* eslint-disable indent */
/* eslint-disable semi */
/// <reference types = "cypress" />

describe('Successfully validate content-type', () => {
  it('Validate Header', () => {
    cy.request('https://pokeapi.co/api/v2/pokemon/ditto').as('pokemon');
    cy.get('@pokemon').its('headers').its('content-type')
      .should('include', 'application/json; charset=utf-8');
  });

  it('Validate Status', () => {
    cy.request('https://pokeapi.co/api/v2/pokemon/ditto').as('pokemon');
    cy.get('@pokemon').its('status').should('equal', 200);
  });

  it('Validate Status', () => {
    cy.request({
      method: 'GET',
      url: 'https://reqres.in/api/users?pages=2&per_pages=1&delay=3',
    }).as('users');
    cy.get('@users').its('status').should('equal', 200);
  });

  it('Validate Content', () => {
    cy.request('https://pokeapi.co/api/v2/pokemon/ditto').as('pokemon');
    cy.get('@pokemon').its('body').should('include', { name: 'ditto' });
  });

  it('Update user', () => {
    const newUser = {
      name: 'Queen Els',
      job: 'QA Engineering',
    };
    cy.request('PUT', 'https:reqres.in/api/users/2', newUser).then((response) => {
      expect(response.status).equal(200);
      expect(response.body.name).to.eq(newUser.name);
    });
  });
});
