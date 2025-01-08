describe("Working with web elements", () => {
    it('working with Mouse Events ', () => {

        Cypress.on("uncaught:exception", (err, runnable) => {

            return false;
        });
        cy.visit('https://www.cypress.io/');
        cy.get('#dropdownDocs').trigger('mouseover')
        cy.contains('Desktops').click()




    })
})