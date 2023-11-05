describe ('LoginTurista', () => {
    beforeEach (() => { 
        cy.visit('http://wweat.ddns.net/')
    })

    it('Loguenado user Turista',() =>{
        cy.get('.hidden > :nth-child(1) > .z-10 > .gap-5 > [href="/login"] > .bg-wwe').click()
        cy.contains('Iniciar Sesión')
        cy.get('#email').type('TuristaEmail@gmail.com')
        cy.get('#contrasena').type('SoyTurista123')
        cy.get(':nth-child(3) > .flex').click()
        cy.contains('Tus alojamientos')
    })
})
