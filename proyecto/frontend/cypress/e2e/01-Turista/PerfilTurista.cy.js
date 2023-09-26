describe ('LoginTurista', () => {
    beforeEach (() => { 
        cy.visit('http://127.0.0.1:5173/')
    })

    it('Entrando al Login',() =>{
        cy.contains('Where We Eat')
        cy.get('.fixed > .flex > [href="/login"] > .bg-white').click()
    })

    it('Loguenado user Turista',() =>{
        cy.get('.fixed > .flex > [href="/login"] > .bg-white').click()
        cy.contains('Iniciar sesion')
        cy.get('#email').type('TuristaEmail@gmail.com')
        cy.get('#contrasena').type('SoyTurista123')
        cy.get('.ml-4').click()
        cy.get(':nth-child(1) > .navbar > .flex-none > .dropdown > .btn > div.rounded-full > .w-14').click()
        cy.contains('Perfil').click()
    })
})