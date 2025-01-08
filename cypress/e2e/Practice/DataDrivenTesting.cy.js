describe('MyTestSuite', () => {
    it('DataDrivenTest', () => {
        Cypress.on("uncaught:exception", (err, runnable) => {

            return false;
        });
        cy.fixture('LoginData2').then((data) => {
            cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
            data.forEach((userdata) => {

                cy.get('[name="username"]').type(userdata.username);
                cy.get('[name="password"]').type(userdata.password);
                cy.get('[type="submit"]').click();

                if (userdata.username == 'Admin' && userdata.password == 'admin123') {

                    cy.get('.oxd-topbar-header-breadcrumb').should('have.text', userdata.expected)
                    cy.get('.oxd-userdropdown-tab').click();
                    cy.get('.oxd-dropdown-menu>li:nth-child(4)').click();

                }
                else {

                    cy.get('.oxd-alert-content > .oxd-text').should('have.text', userdata.expected)
                }

            })
        })
    })

})