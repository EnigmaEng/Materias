describe ('LoginTurista', () => {
    beforeEach (() => { 
        cy.visit('http://127.0.0.1:5173/')
    })

    it('Loguenado user Turista',() =>{
        cy.get('[href="/login"] > .bg-wwe').click()
        cy.contains('Iniciar Sesión')
        cy.get('#email').type('TuristaEmail@gmail.com')
        cy.get('#contrasena').type('SoyTurista123')
        cy.get(':nth-child(3) > .flex').click()
        cy.contains('Tus alojamientos')
        cy.visit('http://127.0.0.1:5173/editarPerfil')
        cy.get('#alias').type('Test_UserT')
        cy.get('#contrasena').type('SoyTurista123')
        cy.contains('Editar').click()
    })
})
