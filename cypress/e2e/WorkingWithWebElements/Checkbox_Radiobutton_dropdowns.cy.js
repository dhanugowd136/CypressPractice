
describe("Working with web elements", () => {
    it('working with checkbox ', () => {

        cy.visit("https://register.rediff.com/register/register.php?FormName=user_details")
        cy.get('input[name^="chk_altemail"]').check().should("be.checked")
        //cy.get('input[name^="chk_altemail"]').should("be.checked")

        cy.wait(3000)
        cy.get('input[name^="chk_altemail"]').uncheck().should("not.be.checked")

    })

    it('working with check box 2', () => {

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        // cy.get("input[name='username']").type(LoginData.username) //reading the data from fixture/json file
        cy.get("input[name='username']").type(Cypress.env("username")) //reading the data from env variable from config file globally
        cy.get("input[type='password']").type(Cypress.env("password"))
        cy.get("button[type='submit']").click()
        cy.get("a.oxd-main-menu-item.active").should("be.visible")
        cy.contains("PIM").click()
        //  cy.get('input[type="checkbox"]').check({force: true})
        cy.wait(1000)
        //  cy.get('input[type="checkbox"]').uncheck({force: true})
        cy.wait(2000)
        cy.get('input[type="checkbox"]').check(['1', '2', '3', '4'], { force: true })
        cy.wait(2000)
        cy.get('input[type="checkbox"]').uncheck(['1', '4'], { force: true })

    })
    it('working with radio button ', () => {

        cy.visit("https://register.rediff.com/register/register.php?FormName=user_details")
        cy.get('input[value=m]').should('be.checked')
        cy.get('input[value=f]').should('not.be.checked')

        cy.get('input[value=f]').check()

        cy.get('input[value=f]').should('be.checked')
        cy.get('input[value=m]').should('not.be.checked')

    })

    it.only('working with dropdowns ', () => {

        cy.visit("https://register.rediff.com/register/register.php?FormName=user_details")


        //1 Approach by using text
          cy.get('select[name^=DOB_Month]').select("APR").should('have.value','04')


        //2 Approach by using value
        //cy.get('select[name^=DOB_Month]').select("08").should('have.value','08')

        //3 Approach by using index
        //cy.get('select[name^=DOB_Month]').select(4)
    })
})

