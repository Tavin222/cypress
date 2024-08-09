/// <reference types="cypress" />

describe('Teste para agenda', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app')
    })

    it('deve adicionar um contato', () => {
        cy.get('input[type="text"]').type('Otavio Coelho')
        cy.get('input[type="email"]').type('otaviocoelho@teste.com')
        cy.get('input[type="tel"]').type('11997925095')
        cy.get('.adicionar').click()
        cy.get('.contato').should('have.length', 4)
    })

    it('deve remover um contato', () => {
        cy.get('.delete').first().click()
        cy.get('.contato').should('have.length', 3)
    })

    it('deve editar um contato', () => {
        cy.get('.edit').first().click()
        cy.get('input[type="text"]').type(' Silva')
        cy.get('.alterar').first().click()
    })
})