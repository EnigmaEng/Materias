describe ('Iniciando Modo Oscuro', () => {
    beforeEach (() => { 
        cy.visit('http://wweat.ddns.net/')
    })

    it('Entrando al Login',() =>{
        cy.contains('WHERE WE EAT')
        cy.get('.flex-col > .absolute > .bg-zinc-800').click()
    })
})