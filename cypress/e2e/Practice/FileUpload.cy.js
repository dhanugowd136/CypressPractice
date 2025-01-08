describe('File Upload using cypress file upload plugin ', () => {
    //using Cypress-File Upload plugin

    it('Single File Upload', () => {
        cy.visit('https://the-internet.herokuapp.com/upload')
        cy.get('#file-upload').attachFile('LoginData')
        cy.get('#file-submit').click();
        cy.wait(3000)
        cy.get('.example>h3').should('have.text', 'File Uploaded!')
    })
    it('FIle upload- Rename', () => {
        cy.visit('https://the-internet.herokuapp.com/upload')
        cy.get('#file-upload').attachFile({ filePath: 'LoginData', fileName: 'myfile' })
        cy.get('#file-submit').click();
        cy.wait(3000)
        cy.get('.example>h3').should('have.text', 'File Uploaded!')
    })
    it('FIle upload- Drag and drop', () => {
        cy.visit('https://the-internet.herokuapp.com/upload')
        cy.get('#drag-drop-upload').attachFile('Data1',{subjectType:"drag-n-drop"})
        //cy.get('#drag-drop-upload > .dz-preview > .dz-details > .dz-filename > span')
        cy.get('#drag-drop-upload > .dz-preview > .dz-details > .dz-filename > span').contains('Data1')
       
    })
    it('File upload- Multiple files', () => {
        cy.visit('https://testautomationpractice.blogspot.com/')
        cy.get('#multipleFilesInput').attachFile(['Data1','Data2']);
       
    })
    it('File upload- Shadow DOM', () => {
        cy.visit('https://testautomationpractice.blogspot.com/')
        cy.get('input[type="file"]' ,{includeShadowDom:true}).attachFile('LoginData')
       
    })

    //By default method Selectfile()
    it.only('File upload- by default method', () => {
        cy.visit('https://testautomationpractice.blogspot.com/')
        cy.get('#singleFileInput').selectFile('cypress/fixtures/Data1.txt')
       
    })
})