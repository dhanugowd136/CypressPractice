describe("Working with web elements", () => {
    it('verify GetText in any web elements ', () => {
        
        cy.visit("https://wikipedia.org/")
        //To get the Text in web elements
       cy.get('a[data-jsl10n="portal.app-links.url"]').then((txt) => {
        var txtval = txt.text()
        cy.log(txtval)
        //Assertion
        //expect(txtval).to.equal("Download Wikipedia for Android or iOS")
       })
    })

})