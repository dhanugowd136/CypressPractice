import Jobtitlesdata from "../fixtures/Admin/Jobtitles.json"
describe('Verify add post functionality', () => {
it('Verify add post', () => {
    cy.visit("/web/index.php/auth/login")
    cy.get("input[name='username2']").type(Cypress.env("username"))
    cy.get("input[type='password']").type(Cypress.env("password"))
    cy.get("button[type='submit']").click()
    cy.get("a.oxd-main-menu-item.active").should("be.visible")
   // cy.get('a[class="oxd-main-menu-item active"]').click()
   cy.get(':nth-child(12) > .oxd-main-menu-item > .oxd-text').click()
   cy.get('.oxd-buzz-post-input').type(Jobtitlesdata.Post)
   cy.get('.oxd-buzz-post-slot > .oxd-button').click()
   cy.contains("Successfully Saved").should("be.visible")
   


})
})