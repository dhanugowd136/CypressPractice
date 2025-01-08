var username = "Admin"
var password = "admin123"
describe('Verify login functionality', () => {

  it.only('Verify login with valid credentials', () => {

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
    const menuitems = {
      menu1: "Admin",
      menu2: "PIM",
      menu3: "Leave",
      menu4: "Time",
      menu5: "Recruitment"
    }
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    cy.get("input[name='username']").type(username)
    cy.get("input[type='password']").type(password)
    cy.get("button[type='submit']").click()
    for(let menu in menuitems){
      cy.contains(menuitems[menu]).should('be.visible')
    }
   // cy.get("a.oxd-main-menu-item.active").should("be.visible")
  })

  it('Verify login with valid username and invalid password', () => {

    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    cy.get("input[name='username']").type(username)
    cy.get("input[type='password']").type(password)
    cy.get("button[type='submit']").click()
    cy.contains("Invalid credentials").should("be.visible")
  })

  it('Verify login with Invalid username and Valid password', () => {
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    cy.get("input[name='username']").type("Adxasamin")
    cy.get("input[type='password']").type("admin123")
    cy.get("button[type='submit']").click()
    cy.contains("Invalid credentials").should("be.visible")
  })

  it('Verify login with Invalid username and InValid password', () => {
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    cy.get("input[name='username']").type("Adxasamin")
    cy.get("input[type='password']").type("admaxxin123")
    cy.get("button[type='submit']").click()
    cy.get("p.oxd-text.oxd-text--p.oxd-alert-content-text").should('be.visible')
    // cy.contains("Invalid credentials").should("be.visible")
  })
})