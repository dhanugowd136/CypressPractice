describe("RadioVutton and checkbox", () => {
    it("checking radio button", () => {

        cy.visit('https://testautomationpractice.blogspot.com/')
        //checking visibility
        cy.get('#male').should('be.visible')
        cy.get('#female').should('be.visible')

        //selectingradio button
        cy.get('#male').check().should('be.checked')
        cy.get('#female').should('not.be.checked')


    })
    it.only("checking check box", () => {

        cy.visit('https://testautomationpractice.blogspot.com/')
        // //checking visibility
        // cy.get('[type="checkbox"][id="sunday"]').should('be.visible')

        // //selecting single check box
        // cy.get('[type="checkbox"][id="sunday"]').check().should('be.checked')
        // //unselecting single check box
        // cy.get('[type="checkbox"][id="sunday"]').uncheck().should('not.be.checked')

        //selecting multiple check boxes
        // cy.get('.form-check-input[type="checkbox"]').check().should('be.checked')
        // cy.wait(5000)
        // cy.get('.form-check-input[type="checkbox"]').uncheck().should('not.be.checked')

        // //selecting specific check box
        // cy.get('.form-check-input[type="checkbox"]').first().check()
        // cy.get('.form-check-input[type="checkbox"]').last().check()

        //selecting specific checkboxes using values
        cy.get('.form-check-input[type="checkbox"]').check(['sunday','wednesday','saturday']).should('be.checked')
        cy.get('.form-check-input[type="checkbox"]').uncheck(['monday','tuesday','thursday','friday']).should('not.be.checked')


    })
})