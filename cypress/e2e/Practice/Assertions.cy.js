

describe("Automate web elements", () => {

    it("Automate input text box", () => {
        // //input text box
        cy.visit('https://testautomationpractice.blogspot.com/')
        //     cy.get('#name').type('Dhanu').should('have.value','Dhanu')
        // //Radio button
        //     cy.get('input[type="radio"][value="male"]').check().should('be.checked')
        //      //checkbox
        //  cy.get('input[type="checkbox"][.form-check-input]').check(['1', '2', '3', '4'],{force:true}).should('be.checked')
        //  cy.wait(5000)

        //cy.get('input[type="checkbox"]').uncheck(['1', '4']).should('not.be.checked')

        // //dropdowns

        //1 Approach by using text
        //cy.get('select[name^=DOB_Month]').select("APR").should('have.value','04')

        // cy.get('#country').select('canada').should('have.value', 'canada')

        //2 Approach by using value
        //cy.get('select[name^=DOB_Month]').select("08").should('have.value','08')

        //3 Approach by using index
        //cy.get('select[name^=DOB_Month]').select(4)
        //verify the page title
        // cy.title().should('eq', "Automation Testing Practice")

        //Implicit Assertions {SHOULD, AND}

        // cy.url().should('include','blogspot.com')
        // cy.url().should('contain','testautomationpractice')
        // cy.url().should('eq','https://testautomationpractice.blogspot.com/')
        //  cy.url().should('not.eq','https://testautomationpractice.blogspot')

        // cy.url().should('include','blogspot.com')
        // .and('contain','testautomationpractice')
        // .and('eq','https://testautomationpractice.blogspot.com/')

        //Explicit assertions EXPECT=>BDD approach 
        // var expname = "GUI Elements"
        // cy.get('[itemprop="name"]').then((text) => {
        //     var txtval = text.text()
        //     //let actname = x.text()
        //     cy.log(txtval)
        //     expect(txtval).to.not.equal(expname)
        //     //Explicit assertions ASSERT=>TDD approach 
        //     assert.notEqual(expname, txtval)
        // })
        //Assertion on elements
        cy.get('[itemprop="name"]').should('be.visible')
        .and('exist')   
        
    })
})