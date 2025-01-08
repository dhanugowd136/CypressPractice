
describe('Verif add employee functionality', () => {

    it('Verify add employee with mandatory fields', () => {

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.get("input[name='username2']").type("Admin")
        cy.get("input[type='password']").type("admin123")
        cy.get("button[type='submit']").click()
        cy.get("a.oxd-main-menu-item.active").should("be.visible")
        cy.get('a[href="/web/index.php/pim/viewPimModule"]').click()
        cy.contains("Add Employee").click()
       // cy.get('.--name-grouped-field > :nth-child(1) > :nth-child(2) > .oxd-input').type('Dhanu')   //input[name=firstName]
       cy.get('input[name="firstName"]').type('Dhanu')
        cy.get(':nth-child(3) > :nth-child(2) > .oxd-input').type('Shashi')  
        cy.get('.oxd-button--secondary').click()
        cy.contains("Successfully Saved").should('be.visible')

    })

    it.only('Verify add employee error message for mandatory fields', () => {

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.get("input[name='username']").type("Admin")
        cy.get("input[type='password']").type("admin123")
        cy.get("button[type='submit']").click()
        cy.get("a.oxd-main-menu-item.active").should("be.visible")
        cy.get('a[href="/web/index.php/pim/viewPimModule"]').click() //force:true
        cy.contains("Add Employee").click()
       // cy.get('.--name-grouped-field > :nth-child(1) > :nth-child(2) > .oxd-input').type('Dhanu')   //input[name="firstName"]
        cy.get('.oxd-button--secondary').click()
        //cy.contains("Required").should('be.visible')
        cy.get('span[class="oxd-text oxd-text--span oxd-input-field-error-message oxd-input-group__message"]').eq(0).should('be.visible')
        cy.get('span[class="oxd-text oxd-text--span oxd-input-field-error-message oxd-input-group__message"]').eq(1).should('be.visible')





        

    })
})