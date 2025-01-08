
import logindata from "../fixtures/herokuLoginData.json"
import login from "../pageObjects/herokuLoginPage.PO"

describe("Heroku app login functionality", () => {
    beforeEach(()=>{
        cy.visit("login")
    })
    it("Verify login with valid credentials", () => {

        cy.get(login.inputUsername).type(logindata.validuUsername)
        cy.get(login.inputPassword).type(logindata.validPassword)
        cy.get(login.loginBtn()).click()
        cy.contains(login.lblMsg).should("be.visible")
        cy.get(login.logoutBtn()).click()
    })

    it("Verify login with valid user name and invalid password", () => {

       
        login.loginWithvalidUsername(logindata.validuUsername, logindata.invalidPassword)
       

    })

    it("Verify login with invalid user name and valid password", () => {

        login.loginWithInvalidUsername(logindata.invalidUsername, logindata.validPassword)
    

    })

    
    it("Verify login with invalid user name and invalid password", () => {


        login.loginWithInvalidUsernameInvalidPassword(logindata.invalidUsername, logindata.invalidPassword)

    })
})