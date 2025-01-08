describe("Working with web elements", () => {
    it('working with readFile and WriteFile ', () => {

        cy.writeFile('cypress/fixtures/Data/test1.txt', "Dhanu\n")

        //cy.writeFile('cypress/fixtures/module1/test.txt', "Ravi\n" )
        cy.writeFile('cypress/fixtures/Data/test1.txt', "Shashi", { flag: 'a+' }) // Append 

        cy.writeFile('cypress/fixtures/module1/sample.json', { "firstname": "Raju", "lastname": "G" })



    })
    it('Cypress Test Case - extracting text and saving in a file ', function () {

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

        cy.get('p[class="oxd-text oxd-text--p orangehrm-login-forgot-header"]').then((txt) => {

            var textvalue = txt.text()
            cy.writeFile('cypress/fixtures/module1/example.txt', textvalue);

            cy.readFile('cypress/fixtures/module1/test6.json').then((data) => {
                data.newKey = { 'extractedtext': textvalue }
                cy.writeFile('cypress/fixtures/module1/test6.json', JSON.stringify(data))
            })

        })
    })
    it("sample test 2", () => {

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        cy.get('p[class="oxd-text oxd-text--p"]').first().then((txt) => {


            var usertext = txt.text()

            cy.writeFile('cypress/fixtures/module1/creds.txt', usertext + "\n")
        })


        cy.get('p[class="oxd-text oxd-text--p"]').last().then((txt) => {


            var paswordtext = txt.text()

            cy.writeFile('cypress/fixtures/module1/creds.txt', paswordtext, { flag: 'a+' })
        })
    })
    it("sample test", () => {

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        cy.get('p[class="oxd-text oxd-text--p orangehrm-copyright"]').first().then((txt) => {

            var version = txt.text()

            Cypress.env('version', version);

            cy.log(Cypress.env("version"))
            cy.writeFile('cypress/fixtures/module2/version.json', { "versionnumber": version });


        })
    })

    //Read file

    it.only('Cypress Test Case - Validation of Data both Text file and Json ', function () {

        cy.readFile("cypress/fixtures/loginData.json").its("username").should("eq", "Admin")

        cy.readFile("cypress/fixtures/loginData.json").its("password").should("eq", "admin123")
        cy.readFile('cypress/fixtures/loginData.json').should('exist')

        cy.readFile("cypress/fixtures/module2/version.json").its("versionnumber").should("eq", "OrangeHRM OS 5.7")

        cy.readFile('cypress/fixtures/module1/test.txt').should('contain', 'Raju');

       //cy.readFile('cypress/fixtures/module1/test.txt').should('contain', 'Ravi\nRaju')
    })

})