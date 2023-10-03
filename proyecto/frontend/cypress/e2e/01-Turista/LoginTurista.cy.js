describe ('LoginTurista', () => {
    beforeEach (() => { 
        cy.visit('http://127.0.0.1:5173/')
    })

    it('Entrando al Login',() =>{
        cy.contains('Where we eat')
        cy.get('.flex-col > .flex > [href="/login"] > .bg-white').click()
    })

    it('Loguenado user Turista',() =>{
        cy.get('.flex-col > .flex > [href="/login"] > .bg-white').click()
        cy.contains('Iniciar sesion')
        cy.get('#email').type('TuristaEmail@gmail.com')
        cy.get('#contrasena').type('SoyTurista123')
        cy.get('.justify-center > .px-4').click()
        cy.contains('Mis Reseñas')
    })
})
