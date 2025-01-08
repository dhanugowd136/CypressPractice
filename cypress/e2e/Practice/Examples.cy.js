

describe('My Test Suite', () => {
    it('Click on link using label and custom command', () => {

        cy.visit('https://testautomationpractice.blogspot.com/')
        //ClickLink -custom command
        cy.ClickLink('Apple')
    })
    it('Navigations', () => {
        Cypress.on("uncaught:exception", (err) => {
            return false;
        })
        cy.visit('https://demo.opencart.com/')
        cy.title().should('eq', 'Your Store')
        cy.get(':nth-child(7) > .nav-link').click()
        //to verify the title of the page
        cy.title().should('eq', 'Cameras')


        cy.go(-1)
        cy.title().should('eq', 'Your Store')
        cy.go(1)
        cy.title().should('eq', 'Cameras')

    })
    it('Screenshots by explicit', () => {
        cy.visit('https://demo.opencart.com/')
        cy.get('.img-fluid:nth-child(1)').eq(1).screenshot('Logo') //sprcific web elememt
        // cy.screenshot('homepage') //full home page
    })
    it('Verification of Current URL', () => {
        cy.visit('https://demo.opencart.com/')
        cy.url().should('eq', 'https://demo.opencart.com/')
        cy.url().should('include', 'opencart')
    })
    it('Verification of title of the page and print ', () => {
        cy.visit('https://demo.opencart.com/')
        cy.title().should('eq', 'Your Store') //verift the title
        cy.title().should('include', 'Store') //partial text
        //Print the title of the page in log
        cy.title().then((txt) => {
            cy.log(txt)
        })
    })
    it('To get the text available in web element and verification ', () => {
        cy.visit('https://demo.opencart.com/')
        //to get the text
        cy.get('.price-new').first().then((txt) => {
            var txtval = txt.text();
            cy.log(txtval)
        })
        //to verify the text
        cy.get('.price-new').first().should('have.text','$602.00')
        .and('include.text','602')

    })
    it.only('To get the text available in web element and verification ', () => {
        cy.visit('https://trello.com')
        cy.get('a[data-uuid="MJFtCCgVhXrVl7v9HA7EH_login"]').click()
        cy.origin('https://id.atlassian.com/login',()=>{
            cy.get('#username').type('hjhhxzxb@gmail.com')
            cy.get('#login-submit').click()
        })
        

    })
})