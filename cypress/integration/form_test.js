describe('Inputs', () => {
    it('can reach site', () => {
        cy.visit('http://localhost:3001/pizza')
        cy.get('.link').click({ multiple: true })
    })
    it('can make new name', () => {
        cy.visit('http://localhost:3001/pizza').get('input[name=name]').type('Bill Pizzabro')
    })
    it('can check boxes', () => {
        cy.get('[type="checkbox"]').check()
    })
    it('submit button works ', () => {
        cy.get('button').should('not.be.disabled')
    })
})