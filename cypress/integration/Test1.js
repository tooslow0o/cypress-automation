/// <reference types="Cypress" />

describe('My First Test Suite', () => {
    it('My First Test Case', () => {
        cy.visit('http://rahulshettyacademy.com/seleniumPractise/#/')
        cy.get('input.search-keyword').type('Cucumber')
        cy.get('button.search-button').click()
    })
    // it('My Second Test Case', () => {
    // })
})