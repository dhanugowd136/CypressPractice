describe('handling Mouse operations', () => {
    it.only('Mouseover', () => {
        //console error
        Cypress.on("uncaught:exception", (err, runnable) => {

            return false;
        });
        cy.visit('https://demo.opencart.com/')
        cy.get('.nav > :nth-child(1) > .dropdown-toggle').trigger('mouseover').click()
       cy.contains('PC').should('be.visible')

    })
    it('Right Click', () => {
        cy.visit('')
        //approach-1
        cy.get('').trigger('contextmenu');

        //approach-2
        cy.get('').rightclick()

    })
    it('Double Click', () => {
        cy.visit('https://testautomationpractice.blogspot.com/')
        //approach-1
       /* cy.get('button[ondblclick="myFunction1()"]').trigger('dblclick');
        cy.get('#field2').should('have.value','Hello World!') */

        //approach-2
        cy.get('button[ondblclick="myFunction1()"]').dblclick()
        cy.get('#field2').should('have.value','Hello World!')
    })
    it('Drag and drop using plugin', () => {
        cy.visit('https://testautomationpractice.blogspot.com/')
        cy.get('#draggable').should('be.visible')
        cy.get('#droppable').should('be.visible')
       cy.get('#draggable').drag('#droppable',{force:true})
    })
    it('Scrolling Page', () => {
    //     cy.visit('https://testautomationpractice.blogspot.com/')
    //    cy.get('#comboBox').click();
    //    cy.contains('Item 50').scrollIntoView({duration:2000}).click()
    //    cy.get('#comboBox').should('have.value','Item 50')

       //footer
       cy.visit('https://jqueryui.com/draggable/')
       cy.get('#legal').scrollIntoView()
       
    })

})