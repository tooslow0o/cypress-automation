/// <reference types="Cypress" />

describe('My Third Test Suite', () => {
    it('My Third Test Case', () => {
        cy.visit('http://rahulshettyacademy.com/AutomationPractice/')

        // // checkbox
        // cy.get('#checkBoxOption1').check().should('be.checked').and('have.value', 'option1')
        // cy.get('#checkBoxOption1').uncheck().should('not.be.checked').and('have.value', 'option1')
        // cy.get('input[type="checkbox"]').check(['option1', 'option2', 'option3'])

        // // static dropdown
        // cy.get('select').select('option2').should('have.value', 'option2')
        // cy.get('select').should('not.have.value', 'option1')
        // cy.get('select').should('not.have.value', 'option3')

        // dynamic dropdown
        cy.get('#autocomplete').type('ind')

        cy.get('.ui-menu-item div').should('have.length', 3)
            .each(($el, index, $list) => {
                if ($el.text() === 'India') {
                    cy.wrap($el).click()
                }
            })
    })
})
