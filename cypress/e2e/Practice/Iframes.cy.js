describe('Handling Iframes', () => {
    it.skip('Handling Iframes Appoach-1', () => {

        const iframe = cy.visit('https://the-internet.herokuapp.com/iframe')
        cy.get('#mce_0_ifr')
            .its('0.contentDocument.body')
            .should('be.visible')
            .then(cy.wrap);

        iframe.clear().type('Welcome{ctrl+a}');
        cy.get('[aria-label="Bold"]').click();
    })
    it('Handling Iframes Appoach-Thimmaraju', () => {

        cy.visit('https://jqueryui.com/checkboxradio/');
        cy.get('iframe[class="demo-frame"]').then(($iframe) => {
            let radio1 = $iframe.contents().find('[for="radio-1"]');
            cy.wrap(radio1).click()

        })
    })

    it.only('Handling Iframes using- IFRAME PLUGIN', () => {

        cy.visit('https://jqueryui.com/checkboxradio/');

            cy.frameLoaded('iframe[class="demo-frame')  // load the frame
            
            cy.iframe().find('label[for="checkbox-1"]').click()
            
            
    })
})