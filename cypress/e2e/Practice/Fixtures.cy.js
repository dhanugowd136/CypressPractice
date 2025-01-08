describe('MyTestSuite', () => {

    /* //Direct access
     it('FixturesDemoTest', () => {
         cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
         cy.fixture('LoginData').then((data)=>{
             cy.get('[name="username"]').type(data.username);
             cy.get('[name="password"]').type(data.password);
             cy.get('[type="submit"]').click();
             cy.get('.oxd-topbar-header-breadcrumb').should('have.text',data.expected)
         })
         
     }) */
    //access through hook- For multiple it blocks
    let userdata;

    before(() => {
        cy.fixture('LoginData').then((data) => {
            userdata = data;

        })
    })
    it('FixturesDemoTest', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

        cy.get('[name="username"]').type(userdata.username);
        cy.get('[name="password"]').type(userdata.password);
        cy.get('[type="submit"]').click();
        cy.get('.oxd-topbar-header-breadcrumb').should('have.text', userdata.expected)

    })
})