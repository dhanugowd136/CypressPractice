import LoginData from "../fixtures/LoginData.json"

describe("Assignment", () => {
    it("Deleting the first 10 rows using for loop", () => {
        cy.visit("/web/index.php/auth/login")
        cy.get("input[name='username']").type(LoginData.username)
        cy.get("input[type='password']").type(LoginData.password)
        cy.get("button[type='submit']").click();
        cy.get("a.oxd-main-menu-item.active").should("be.visible")
        cy.get(':nth-child(2) > .oxd-main-menu-item').click();
        for(let rows=0; rows <10; rows++){
        cy.get('i[class="oxd-icon bi-trash"]').eq('0').click();
        cy.get('button[class="oxd-button oxd-button--medium oxd-button--label-danger orangehrm-button-margin"]').click();
        }
    })
    it.only("Deleting the first 10 rows using for loop", () => {
        cy.visit("/web/index.php/auth/login")
        cy.get("input[name='username']").type(LoginData.username)
        cy.get("input[type='password']").type(LoginData.password)
        cy.get("button[type='submit']").click();
        for(let eq=0; eq <= 11; eq++){
            cy.get('span[class="oxd-text oxd-text--span oxd-main-menu-item--name"]').eq('0').should("be.visible")
        }
       // cy.get("a.oxd-main-menu-item.active").should("be.visible")
       
    })
})