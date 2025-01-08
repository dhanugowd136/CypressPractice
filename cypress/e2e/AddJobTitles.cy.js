import LoginData from "../fixtures/LoginData.json"
import Jobtitlesdata from "../fixtures/Admin/Jobtitles.json"

describe('Verify add job titles functionality', () => {
    it('Verify add job titles functinality with mandatory fields', () => {
        cy.visit("/web/index.php/auth/login")
       // cy.get("input[name='username']").type(LoginData.username) //reading the data from fixture/json file
       cy.get("input[name='username']").type(Cypress.env("username")) //reading the data from env variable from config file globally
        cy.get("input[type='password']").type(Cypress.env("password"))
        cy.get("button[type='submit']").click()
        cy.get("a.oxd-main-menu-item.active").should("be.visible")
        cy.contains("Admin").click()
        cy.contains("Job").click()
        cy.contains("Job Titles").click()
        //cy.get('button[oxd-button oxd-button--medium oxd-button--secondary]').click()
        cy.get('.oxd-button').click()
        let r = (Math.random() + 1).toString(36).substring(7);
        cy.get(':nth-child(2) > .oxd-input').type(Jobtitlesdata.Jobtitle + r)
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-textarea').type(Jobtitlesdata.Description)
        cy.get('.oxd-button--secondary').click()
        cy.contains("Successfully Saved").should('be.visible')
    })
})