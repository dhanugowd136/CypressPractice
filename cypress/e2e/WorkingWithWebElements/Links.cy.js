describe("Working with web elements", () => {
    it('working with Links ', () => {
        
        cy.visit("https://trello.com")
        cy.get('a[data-uuid="MJFtCCgVhXrVl7v9HA7EH_login"]').click()
        cy.origin('https://id.atlassian.com/', () => {
                cy.get('#username').type("dhanushashi99@gmail.com")
                cy.get('#login-submit > .css-178ag6o').click()
        })
    })

})