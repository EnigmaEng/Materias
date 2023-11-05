describe ('PerfilTurista', () => {
    beforeEach (() => { 
        cy.visit('http://wweat.ddns.net/')
    })

    it('Loguenado user Turista',() =>{
        cy.get('[href="/login"] > .bg-wwe').click()
        cy.contains('Iniciar Sesión')
        cy.get('#email').type('TuristaEmail@gmail.com')
        cy.get('#contrasena').type('SoyTurista123')
        cy.get(':nth-child(3) > .flex').click()
        cy.visit('http://127.0.0.1:5173/perfilTurista');
    })
})