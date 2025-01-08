describe('Handling tables', () => {
    beforeEach('login', () => {
        cy.visit('https://testautomationpractice.blogspot.com/')
    })
    it('verify total number of rows and columns', () => {

        cy.get('table[id="productTable"]>tbody>tr').should('have.length', '5')  //verify total number of rows
        cy.get('table[id="productTable"]>thead>tr>th').should('have.length', '4')  //verify the total number of columns
        cy.get('table[id="productTable"]>tbody>tr>td:nth-child(4)>input').eq(0).click().should('be.checked')  // click on check box
    })

    it('check cell data from specific row & column', () => {

        cy.get('table[id="productTable"]>tbody>tr:nth-child(3)>td:nth-child(3)').contains('$5.99')
    })
 
    it('Read all the rows and columns data in the first page', () => {
        cy.get('table[id="productTable"]>tbody>tr')
            .each(($row, index, $rows) => {
                cy.wrap($row).within(() => {
                    cy.get('td').each(($col, inex, $cols) => {
                        cy.log($col.text());
                    })
                })

            })

    })

    it('check cell data from specific row & column', () => {
        let totalpages = 4;
        for (let p = 1; p <= totalpages; p++) {
            if (totalpages > 1) {
                cy.log('Active page is' + p);
                cy.get('ul[class="pagination"]>li:nth-child(' + p + ')').click()
                cy.wait(2000)

                cy.get('table[id="productTable"]>tbody>tr').each(($row, index, $rows) => {
                    cy.wrap($row).within(() => {
                        cy.get('td:nth-child(2)').then((e) => {
                            cy.log(e.text());
                        })
                    })
                })
            }

        }
    })
    it.only('pagination',()=>{
        cy.get('#productTable').scrollIntoView()
        cy.get('ul[class="pagination"]>li>a').eq(2).click()
        cy.get('table[id="productTable"]>tbody>tr:nth-child(2)>td:nth-child(2)').should('have.text','Router');
    })
})