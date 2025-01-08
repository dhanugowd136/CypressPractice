describe("Working with web elements", () => {
    it('working with Tabs ', () => {

        Cypress.on("uncaught:exception", (err, runnable) => {

            return false;
        });

        cy.visit('https://www.cypress.io/');
        cy.contains('API').invoke("removeAttr", "target").click({force: true});
        cy.url().should('include', 'https://docs.cypress.io/api/commands/and')

        cy.reload()  //to reload the page

        cy.go('back')  //to go backward
        cy.go(1) //forward cy.go('forward)






    })
})