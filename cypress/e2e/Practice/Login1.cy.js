import login1 from "../../pageObjects/Loginpage1.po"
var username = "Admin"
var password = "admin123"
var invalidpwd ="dshgsmc55"
var invalidusername = "shgdsdjkhg"
describe('Verify login functionality', () => {

    it('Verify login with valid credentials', () => {
  
      // switch (Cypress.browser.name) //to get the browser name
      // {
      //   case "chrome":
      //     cy.viewport(1920, 1080)
      //     break;
      //   case "edge":
      //     cy.viewport("ipad-2")
      //     break;
      //   case "firefox":
      //     cy.viewport("iphone-7")
      //     break;
      // }
      
    //   cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    //   cy.get(login1.userinput).type(username)
    //   cy.get(login1.passwordinput).type(password)
    //   cy.get(login1.loginbtn()).click()
       // cy.contains(menuitems[menu]).should('be.visible')
       login1.LoginWithCreds(username ,password)
      cy.get("a.oxd-main-menu-item.active").should("be.visible")
    })
  
    it('Verify login with valid username and invalid password', () => {
  
      cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
      cy.get("input[name='username']").type(username)
      cy.get("input[type='password']").type(invalidpwd)
      cy.get("button[type='submit']").click()
      cy.contains("Invalid credentials").should("be.visible")
    })
  
    it('Verify login with Invalid username and Valid password', () => {
      cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
      cy.get("input[name='username']").type(invalidusername)
      cy.get("input[type='password']").type(password)
      cy.get("button[type='submit']").click()
      cy.contains("Invalid credentials").should("be.visible")
    })
  
    it('Verify login with Invalid username and InValid password', () => {
      cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
      cy.get("input[name='username']").type(invalidusername)
      cy.get("input[type='password']").type(invalidpwd)
      cy.get("button[type='submit']").click()
      cy.get("p.oxd-text.oxd-text--p.oxd-alert-content-text").should('be.visible')
      // cy.contains("Invalid credentials").should("be.visible")
    })
  })