var username = "Admin"
var password = "admin123"
describe("Working with web elements", ()=> {
    it('working with buttons ', () => {

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.get("input[name='username']").type(username)
        cy.get("input[type='password']").type(password)
        //cy.get("button[type='submit']").click().should("be.visible") //be.exist, be.enabled, be.disabled
        cy.get("button[type='submit']").click().should("not.be.disabled")
       
    })

    it.only('working with edit box', () => {

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.get("input[name='username']").type("Admin", {delay: 1000}) //{delay:0}, clear(), {force:true}
        cy.get("input[type='password']").type("admin123{enter}")  //{enter}
      //  cy.get("button[type='submit']").click().should("be.visible")
        
       
    })
})

