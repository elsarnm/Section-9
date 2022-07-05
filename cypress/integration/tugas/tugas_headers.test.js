/* eslint-disable eol-last */
/* eslint-disable indent */
/* eslint-disable semi */
/// <reference types = "cypress" />

describe('Tugas content-type', () => {
  it('Validate Header', () => {
    cy.request('https://pokeapi.co/api/v2/pokemon/ditto').as('pokemon');
    cy.get('@pokemon').its('headers').its('content-type').should('include', 'application/json; charset=utf-8');
  });

  it('Response body yang didapat', () => {
    cy.request({
      method: 'GET',
      url: 'https://pokeapi.co/api/v2/pokemon/ditto',
    }).as('pokemon').then((res) => {
        expect(res.status).to.eq(200)
        expect(res.body.name).to.eq('ditto')
    })
  });
});
