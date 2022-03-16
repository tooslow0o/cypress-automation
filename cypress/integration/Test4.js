/// <reference types="Cypress" />

describe('My Fourth Test Suite', () => {
    beforeEach(() => { cy.visit('http://rahulshettyacademy.com/AutomationPractice/') })

    xit('Checkboxes', () => {
        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value', 'option1')
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked').and('have.value', 'option1')
        cy.get('input[type="checkbox"]').check(['option1', 'option2', 'option3'])
    })

    xit('Static Dropdown Menu', () => {
        cy.get('select').select('option2').should('have.value', 'option2')
        cy.get('select').should('not.have.value', 'option1')
        cy.get('select').should('not.have.value', 'option3')
    })

    xit('Dynamic Dropdown Menu', () => {
        cy.get('#autocomplete').type('ind')
        cy.get('.ui-menu-item div').should('have.length', 3)
            .each(($el, index, $list) => {
                if ($el.text() === 'India') { cy.wrap($el).click() }
            })
        cy.get('#autocomplete').should('have.value', 'India')
    })

    xit('Hidden Element', () => {
        cy.get('#displayed-text').should('be.visible')
        cy.get('#hide-textbox').click()
        cy.get('#displayed-text').should('not.be.visible')
        cy.get('#show-textbox').click()
        cy.get('#displayed-text').should('be.visible')
    })

    xit('Radio Buttons', () => {
        cy.get('[for*="radio"]').should('have.length', 3).each(($el) => {
            cy.wrap($el).should('not.be.checked')
        })

        cy.get('[value="radio1"]').check().should('be.checked')
        cy.get('[value="radio2"]').check().should('be.checked')
        cy.get('[value="radio1"]').should('not.be.checked')
        cy.get('[value="radio3"]').check().should('be.checked')
    })

    xit('Popups', () => {
        // cy.get('#alertbtn').click()
        // cy.get('#confirmbtn').click()
        // cy.get('[value="Confirm"]').click()

        cy.on('window:alert', (string) => {
            // Mocha
            expect(string).to.equal('Hello , share this practice page and share your knowledge')
        })

        cy.on('window:confirm', (string) => {
            // Mocha
            expect(string).to.equal('Hello , Are you sure you want to confirm?')
        })

        // invoke(JQUERY fn)
        cy.get('#opentab').invoke('removeAttr', 'target').click().then(() => {
            cy.url().should('include', 'rahulshettyacademy')
        })
    })

    xit('Web Tables', () => {
        // best version
        cy.get('#product').scrollIntoView().find('td')
            .filter(':contains("Master Selenium Automation in simple Python Language")')
            .next().should('contain', '25')

        // better version
        cy.get('#product').find('td:nth-child(2)').each(($el) => {
            let text = $el.text()
            if (text.includes('Master Selenium Automation in simple Python Language')) {
                cy.wrap($el).next().should('contain', '25')
            }
        })

        // rahul shetty's code
        cy.get('tr td:nth-child(2)').each(($el, index) => {
            const text = $el.text()
            if (text.includes("Python")) {
                cy.get("tr td:nth-child(2)").eq(index).next().then(function (price) {
                    const priceText = price.text()
                    expect(priceText).to.equal('25')
                })
            }
        })
    })

    xit('Mouseover using JQuery', () => {
        // show needs to be used on the immediate parent of hidden element
        // experiemented with JQuery attr(attribute,value)
        // cy.get('div.mouse-hover-content').invoke('attr', 'display,inline').contains('Top').click()
        // best
        cy.get('div.mouse-hover-content').invoke('show').contains('Top').click()
        cy.get('a[href="#top"]').click({ force: true })
        cy.get('div.mouse-hover').children('div').invoke('show').contains('Top').click()
        cy.get('#mousehover').next().invoke('show').contains('Top').click()

        cy.url().should('include', '#top')
    })

    it('Grab HREF attribute', () => {
        // cy.wrap({ href: 'https://www.rahulshettyacademy.com/' }).its('href').should('exist').then((link) => { cy.visit(link) })
        cy.get('#opentab').invoke('attr', 'href').should('contain', 'rahulshettyacademy.com')
        cy.get('#opentab').should('have.attr', 'href', 'https://www.rahulshettyacademy.com/')
        // cy.get('#opentab').its('href', '{ log : true }').should('contain', 'rahulshettyacademy.com')
        //      cy.get('#opentab').its('href').should('exist')
        //  cy.get('#opentab').its('href').should('eqexist')


        // cy.get('#opentab').then(($el) => {
        //     const url2 = $el.prop('href')
        //     cy.log(url2)
        //     cy.visit(url2)
    })
})
