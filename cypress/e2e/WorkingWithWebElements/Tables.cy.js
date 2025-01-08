describe("Working with web elements", () => {
    it('working with Tables ', () => {
       
       cy.visit('https://the-internet.herokuapp.com/tables')

       cy.get('#table1>tbody>tr').should('have.length', 4)  //for rows
       cy.get('#table1>thead>tr>th').should('have.length', 6)  //for columns
       // to get the text in the call
       cy.get('#table1>tbody>tr:nth-child(3)>td:nth-child(2)').then((txtval) => {
        var textvalue = txtval.text()
        cy.log(textvalue)
        //assertion
        expect(textvalue).to.equal('Jason')
       })
    })

})