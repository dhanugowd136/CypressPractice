describe("Handling different types of dropdowns", () => {
    it.skip('Normal dropdown with SELECT Tag', () => {
        cy.visit('https://testautomationpractice.blogspot.com/')
        cy.get('#country').select('canada').should('have.value', 'canada')

    })
    it.skip('dropdown without SELECT Tag', () => {
        cy.visit('https://www.dummyticket.com/dummy-ticket-for-visa-application/')
        cy.get('#select2-billing_country-container').click()
        cy.get('.select2-search__field').type('Guyana{enter}')  //(or).type('{enter}')
        //we can't use have.value...should use have.text
        cy.get('#select2-billing_country-container').should('have.text', 'Guyana')

    })
    it('dropdown with Auto Suggestions static in nature', () => {
        cy.visit('https://www.wikipedia.org/')
        cy.get('#searchInput[type="search"]').type('Delhi')
        cy.get('.suggestion-text>h3>em').should('have.length','6')
        cy.get('.suggestion-title').contains('Delhi University').click()
       /* cy.get('.suggestion-text>h3>em').each(($el, index, $list) => {
            if ($el.text() == 'Delhi metro') {
                cy.wrap($el).click()
            }
        }) */
       cy.get('.mw-page-title-main').should('have.text', 'Delhi University ')


    })
    it.skip('Dynamic dropdown, dynamic in nature', () => {
        cy.visit('https://www.google.com/')
        cy.get('.gLFyf[aria-label="Search"]').type('cypress automation')
        cy.wait(3000)
        cy.get('.wM6W7d>span').should('have.length', '13')
        // jQuery Function
        cy.get('.wM6W7d>span').each(($el, index, $list) => {
            if ($el.text() == 'cypress automation jobs') {
                cy.wrap($el).click()
            }
        })
        cy.get('.gLFyf[aria-label="Search"]').should('have.value', 'cypress automation jobs')
    })
})