/// <reference types="Cypress" />

describe('My Second Test Suite', () => {
    it('My Second Test Case', () => {
        cy.visit('http://rahulshettyacademy.com/seleniumPractise/#/')
        // cy.get('input.search-keyword').type('Cucumber')
        // cy.get('button.search-button').click()
        // cy.get('.quantity').clear().type('69')
        // cy.get('.product-action > button').click()
        cy.get('input.search-keyword').type('ca')
        cy.get('button.search-button').click()
        // cy.get('div.product:visible').should('have.length', 4)
        cy.get('div.product:hidden').should('have.length', 1)
        cy.get('div.products').find('.product').should('have.length', 4)
        cy.get('div.products').find('.product').eq(2).contains('ADD TO CART').click()
        cy.get(':nth-child(3) > .product-action > button').click()

    })

    it.only('My Second Test Case', () => {
        cy.visit('http://rahulshettyacademy.com/seleniumPractise/#/')
        cy.get('input.search-keyword').type('ca')
        cy.get('button.search-button').click()
        cy.wait(1000)

        cy.get('.products').as('productsLocator')
        cy.get('@productsLocator').find('.product').each(($el, index, $list) => {
            let textVeg = $el.find('h4.product-name').text()
            if (textVeg.includes('Cashews')) {
                cy.wrap($el).find('.product-action>button').click()
            }
        })

        cy.get('.cart-icon > img').click()

        cy.contains('PROCEED TO CHECKOUT').click()
        cy.wait(1000)
        cy.get(':nth-child(14)').click()

        cy.get('select').select('United States')

        cy.get('.chkagree').click()

        cy.get(':nth-child(14)').click()
    })
})
