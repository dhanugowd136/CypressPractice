class LoginPage {
    txtUsername="input[name='username']";
    txtPassword= "input[type='password']";
    btnSubmit="button[type='submit']";
    lblMsg=".oxd-topbar-header-breadcrumb";
    setUsername(username) {
        cy.get(this.txtUsername).type(username);
    }
    setPassword(password) {
        cy.get(this.txtPassword).type(password);
    }
    clickSubmint() {
        cy.get(this.btnSubmit).click();
    }
    verifyLogin() {
        cy.get(this.lblMsg).should('have.text', 'Dashboard');
    }

}
export default LoginPage;