describe("Working with web elements", () => {
    it('working with Iframes ', () => {
        //for all the elements same process
        cy.visit("https://jqueryui.com/checkboxradio/")
        
       cy.get('iframe[class="demo-frame"]').then(($iframe)=> {
        var radio1 = $iframe.contents().find('label[for="radio-1"]')
        cy.wrap(radio1).click()
       })
    })

})