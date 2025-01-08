describe('Hooks and Tags', () => {

    before(()=>{
        cy.log('********* launch app*****')
    })
    after(()=>{
        cy.log('********* close app*****')
    })
    beforeEach(()=>{
        cy.log('********* login*****')
    })
    afterEach(()=>{
        cy.log('********* log out*****')
    })
    it('Search', () => {
        cy.log('********* Search*****')
    })
    it('Advanced Search', () => {
        cy.log('********* Advanced Search*****')
    })
    it('Listing products', () => {
        cy.log('********* Listing products *****')
    })
})