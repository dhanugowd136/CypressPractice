describe("Working with web elements", () => {
    it('working with Simple Alerts ', () => {
        //Simple Alert
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.contains('Click for JS Alert').click()
        cy.on('window:alert', (alertmsg) => {

            //to verify the text msg in the alert
            expect(alertmsg).to.equal('I am a JS Alert')

            return true
        })

    })
    it('working with Confirm Alert ', () => {
        //Confirm Alert
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.contains('Click for JS Confirm').click()
        cy.on('window:confirm', (alertmsg) => {

            //to verify the text msg in the simple alert
            expect(alertmsg).to.equal('I am a JS Confirm')
            return true
            //return false  will click on cancel
        })

    })
    it('working with Prompt Ok button ', () => {
        //Prompt OK Alert
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.window().then(($win) => {
            cy.stub($win, 'prompt').returns('Dhanu');
            cy.contains('Click for JS Prompt').click();
        })
        
        

    })
    it.only('working with Prompt cancel button ', () => {
        //Prompt cancel button
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.window().then(($win) => {
            cy.stub($win, 'prompt').callsFake(() => null);
            cy.contains('Click for JS Prompt').click();
        })
        
    
    })
})