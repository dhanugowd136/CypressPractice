class LoginPage1 {

    userinput = "input[name='username'"
    passwordinput = "input[type='password']"

    loginbtn() {
        return "button[type='submit']"
    }

    LoginWithCreds(username, password) {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.get(this.userinput).type(username)
        cy.get(this.passwordinput).type(password)
        cy.get(this.loginbtn()).click()
    }
}
const login1 = new LoginPage1()
export default login1