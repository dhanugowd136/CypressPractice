class LoginPage {
    setUsername(username) {
        cy.get("input[name='username']").type(username);
    }
    setPassword(password) {
        cy.get("input[type='password']").type(password);
    }
    clickSubmint() {
        cy.get("button[type='submit']").click();
    }
    verifyLogin() {
        cy.get('.oxd-topbar-header-breadcrumb').should('have.text', 'Dashboard');
    }

}
export default LoginPage;