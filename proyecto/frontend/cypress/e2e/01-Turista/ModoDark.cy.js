describe ('LoginTurista', () => {
    beforeEach (() => { 
        cy.visit('http://127.0.0.1:5173/')
    })

    it('Entrando al Login',() =>{
        cy.contains('WHERE WE EAT')
        cy.get('.flex-col > .absolute > .bg-blue-900').click()
    })
})