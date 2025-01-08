describe("Working with web elements", () => {
    it('working with Images ', () => {

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.get('img[alt="company-branding"]').should('exist')
        cy.get('img[alt="company-branding"]').should('be.visible')

        //to verify the attributes in any elements

        //cy.get(loctor).should('have.attr', 'attrname', ''attrvalue)

        cy.get('img[alt="company-branding"]').should('have.attr', 'src', '/web/images/ohrm_branding.png?v=1721393199309')

        

    })
})