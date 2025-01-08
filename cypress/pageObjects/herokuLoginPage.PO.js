import logindata from "../fixtures/herokuLoginData.json"
class loginPage{
    
    inputUsername = 'input[name="username"]'
    inputPassword = 'input[name="password"]'
    lblMsg = "Logout"
    invalidUsernameErrorMsg = "Your username is invalid!"
    invalidPasswordErrorMsg = "Your password is invalid!"

    loginBtn(){
        return 'button[type="submit"]'
    }

    logoutBtn(){
        return 'a[class="button secondary radius"]'
    }
    loginWithInvalidUsername(invalidUsername, validPassword){
        cy.get(this.inputUsername).type(invalidUsername)
        cy.get(this.inputPassword).type(validPassword)
        cy.get(this.loginBtn()).click()
        cy.contains(this.invalidUsernameErrorMsg).should('be.visible')
    }
    loginWithvalidUsername(validUsername, invalidPassword){
        cy.get(this.inputUsername).type(validUsername)
        cy.get(this.inputPassword).type(invalidPassword)
        cy.get(this.loginBtn()).click()
        cy.contains(this.invalidPasswordErrorMsg).should('be.visible')
    }
    loginWithInvalidUsernameInvalidPassword(invalidUsername, invalidPassword){
        cy.get(this.inputUsername).type(invalidUsername)
        cy.get(this.inputPassword).type(invalidPassword)
        cy.get(this.loginBtn()).click()
        cy.contains(this.invalidUsernameErrorMsg).should('be.visible')
    }
}
const login = new loginPage()

export default login;