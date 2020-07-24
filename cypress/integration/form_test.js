describe('Inputs', () => {
    it('can reach site', () => {
        cy.visit('http://localhost:3005/pizza')
    })
    it('can make new name', () => {
        cy.visit('http://localhost:3005/pizza').get('input[name=name]').type('make it tasty')
    })
    it('can check boxes', () => {
        cy.get('[type="checkbox"]').check()
    })
    it('submit button works ', () => {
        cy.get('button').should('not.be.disabled')
    })
})