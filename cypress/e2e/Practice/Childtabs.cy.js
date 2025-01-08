describe('handling Child tabs', () => {

    it('Handling tabs Approach-1', () => {

        cy.visit('https://the-internet.herokuapp.com/windows')
        cy.get('.example>a').invoke('removeAttr', 'target').click()
        //cy.get('.example>h3').should('have.text','New Window')
        cy.url().should('include', 'https://the-internet.herokuapp.com/windows/new')
        cy.wait(5000)
        //Operations
        cy.go(-1)
        //cy.go('back') //back to parent tab
    })

    it.only('Handling tabs Approach-2 both parent and child tabs domain should be same', () => {

        cy.visit('https://the-internet.herokuapp.com/windows')
        cy.get('.example>a').then((e)=>{
            var url=e.prop('href');
            cy.visit(url);
        }) 
        cy.url().should('include', 'https://the-internet.herokuapp.com/windows/new')
        cy.wait(5000)
        //Operations
        cy.go(-1)

    })
})