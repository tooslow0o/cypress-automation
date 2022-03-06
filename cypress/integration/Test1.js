/// <reference types="Cypress" />

describe('My First Test Suite', () => {
    it('My First Test Case', () => {
        cy.visit('http://rahulshettyacademy.com/seleniumPractise/#/')
        // cy.get('input.search-keyword').type('Cucumber')
        // cy.get('button.search-button').click()
        // cy.get('.quantity').clear().type('69')
        // cy.get('.product-action > button').click()
        cy.get('input.search-keyword').type('ca')
        cy.get('button.search-button').click()
        cy.get('div.product:visible').should('have.length', 4)
        cy.get('div.product:hidden').should('have.length', 1)
        cy.get('div.products').find('.product').should('have.length', 4)
        cy.get('div.products').find('.product').eq(2).contains('ADD TO CART').click()
        cy.get(':nth-child(3) > .product-action > button').click()

    })

    it.only('My Second Test Case', () => {
        cy.visit('http://rahulshettyacademy.com/seleniumPractise/#/')
        cy.get('input.search-keyword').type('ca')
        cy.get('button.search-button').click()
        //cy.pause()
        // cy.get('h4.product-name').should('have.length', 4).as('productNames')

        // cy.get('@productNames').each(($el) => {
        //     let vegName = $el.text()
        //     if (vegName.includes('Cashews')) {
        //         cy.wrap($el).closest('.button').click()
        //     }
        // })

        // cy.get('.product:visible').each(($el, index, $list) => {

        cy.wait(2000)
        cy.get('.products').find('.product').each(($el, index, $list) => {

            let textVeg = $el.find('h4.product-name').text()
            if (textVeg.includes('Cashews')) {
                cy.wrap($el).find('.product-action>button').click()
                // cy.wrap($el).closest('.button').click()
            }
        })
    })
})
