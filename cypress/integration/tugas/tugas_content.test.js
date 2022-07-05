/* eslint-disable eol-last */
/* eslint-disable indent */
/* eslint-disable semi */
/// <reference types = "cypress" />

describe('Tugas Validate Content', () => {
    it('Lanjutkan kode', () => {
        cy.request('https://pokeapi.co/api/v2/ability/7/').as('limber')
        cy.get('@limber').should((response) => {
        expect(response.status).to.eq(200)
        expect(response.body.name).to.eq('limber')
        })
    });
});