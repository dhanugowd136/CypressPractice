describe('Handling alerts', () => {
    it.skip('Javascript alert', () => {
        // Javascript Alert: it will have some text and an "ok" button
        cy.visit('https://testautomationpractice.blogspot.com/')
        cy.get('#alertBtn').click()
        cy.on('window:alert', (val) => {
            expect(val).to.contains('I am an alert box!')
        })
        //alert window automatically closed by cypress
        //validate the text (heroku website)
        //cy.get('#demo').should('have.text','You pressed OK!')
    })
    it('Javascript Confirm alert ok button', () => {
        // Javascript Confirm Alert: it will have some text with "ok" and "Cancel" button
        cy.visit('https://testautomationpractice.blogspot.com/')
        cy.get('#confirmBtn').click()
        cy.on('window:confirm', (val) => {
            expect(val).to.contains('Press a button!')
        })
        //cypress automatically closed alert window by usig ok button
        cy.get('#demo').should('have.text', 'You pressed OK!')
    })
    it('Javascript Confirm alert using cancel button', () => {
        // Javascript Confirm Alert: it will have some text with "ok" and "Cancel" button
        cy.visit('https://testautomationpractice.blogspot.com/')
        cy.get('#confirmBtn').click()
        cy.on('window:confirm', (val) => {
            expect(val).to.contains('Press a button!')
        })
        cy.on('window:confirm', () => false); //cypress closes slert window using cancel button
        cy.get('#demo').should('have.text', 'You pressed Cancel!')
    })

    // Javascript prompt Alert: it will have some text with a text box for user input along with "ok" and "Cancel" button
    it('Javascript prompt alert -ok button', () => {
        cy.visit('https://testautomationpractice.blogspot.com/')
        cy.window().then((win) => {
            cy.stub(win, 'prompt').returns('Dhanu')
        })
        cy.get('#promptBtn').click()
        cy.get('#demo').should('have.text', 'Hello Dhanu! How are you today?')
    })

    it('javascript prompt alert - Cancel button', () => {
        cy.visit('https://testautomationpractice.blogspot.com/')
        cy.window().then((val) => {
            cy.stub(val, 'prompt').callsFake(() => null);
        })
        cy.get('#promptBtn').click();
        cy.get('#demo').should('have.text', 'User cancelled the prompt.')
    })
    //1 Approach
    it.only('javascript Authenticate alert', () => {
        // 1 Approach
      /*  cy.visit('https://the-internet.herokuapp.com/basic_auth', {
            auth: {
                username: 'admin',
                password: 'admin'
            }
        })
        cy.get('div.example>p').should('have.contain','Congratulations! You must have the proper credentials.')
        */
       // 2 Approach 
       cy.visit('https://admin:admin@the-internet.herokuapp.com/basic_auth')
       cy.get('div.example>p').should('have.contain','Congratulations! You must have the proper credentials.')
    })


})