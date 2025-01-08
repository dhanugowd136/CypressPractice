describe("Working with web elements", ()=> {
    it('working with file upload using selectFile ', () => {
         //1 approach using selectFile method

        cy.visit("https://cgi-lib.berkeley.edu/ex/fup.html")
       cy.get('input[name="upfile"]').selectFile('cypress/fixtures/Admin/Practice websites.txt')
       cy.get('input[type="submit"]').click()

    })

    it('working with file upload using attachFile', () => {
        //2 approach using attachFile using plugin 
        //multiple files upload

       cy.visit("https://cgi-lib.berkeley.edu/ex/fup.html")
      cy.get('input[name="upfile"]').attachFile(['Admin/Practice websites.txt', 'Admin/Practice websites - Copy.txt'])
      cy.get('input[type="submit"]').click()

   })

   it.only('working with file download using downloadfile', () => {
      //  using cypress downloadfile plugin 

      cy.downloadFile('https://www.mykhel.com/img/2023/05/ms-dhoni-csk-1684140928.jpg?16092024040111', 'cypress/downloads', 'Dhoni.jpg')
      //Asserttion
      cy.readFile('cypress/downloads/Dhoni.jpg').should('exist')

     
 })
})