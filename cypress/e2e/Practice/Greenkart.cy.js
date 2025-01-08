describe("Add products to thecart", () => {

    it("Adding banana, grapes, orange product to the cart", () => {
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        cy.get('div[class="products"]').within(() => {
            cy.contains('Carrot - 1 Kg').parent('div[class="product"]').find('button[type="button"]').click()
            cy.contains('Banana - 1 Kg').parent('div[class="product"]').find('button[type="button"]').click()
            cy.contains('Orange - 1 Kg').parent('div[class="product"]').find('button[type="button"]').click()
        })
        cy.get('img[alt="Cart"]').click()
        cy.get('div[class="cart-preview active"]').should('contain', "Carrot")
        cy.get('div[class="cart-preview active"]').should('contain', "Banana")
        cy.get('div[class="cart-preview active"]').should('contain', "Orange")

        cy.contains('PROCEED TO CHECKOUT').click()
    })
    it.only("Adding banana, grapes, orange product to the cart with search approach", () => {
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        cy.get('input[placeholder="Search for Vegetables and Fruits"]').type('Banana')
        cy.get('div[class="products"]').contains('Banana').parent().find('button[type="button"]').click()
        cy.get('input[placeholder="Search for Vegetables and Fruits"]').clear().type('Carrot')
        cy.get('div[class="products"]').contains('Carrot').parent().find('button[type="button"]').click()
        cy.get('input[placeholder="Search for Vegetables and Fruits"]').clear().type('Grapes')
        cy.get('div[class="products"]').contains('Grapes').parent().find('button[type="button"]').click()
        cy.get('img[alt="Cart"]').click()
        cy.get('div[class="cart-preview active"]').should('contain', "Carrot").and('contain','1')
        cy.get('div[class="cart-preview active"]').should('contain', "Banana")
        cy.get('div[class="cart-preview active"]').should('contain', "Grapes")

        cy.contains('PROCEED TO CHECKOUT').click()
    })
})