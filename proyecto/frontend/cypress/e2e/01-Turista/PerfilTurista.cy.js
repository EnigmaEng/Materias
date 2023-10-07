describe ('PerfilTurista', () => {
    beforeEach (() => { 
        cy.visit('http://127.0.0.1:5173/')
    })

    it('Entrando al Login',() =>{
        cy.contains('WHERE WE EAT')
        cy.get('.flex-col > .flex > [href="/login"] > .bg-white').click()
    })

    it('Loguenado user Turista',() =>{
        cy.get('.flex-col > .flex > [href="/login"] > .bg-white').click()
        cy.contains('Iniciar sesion')
        cy.get('#email').type('turista@gmail.com')
        cy.get('#contrasena').type('hola1234')
        cy.get('.justify-center > .px-4').click()
        cy.get(':nth-child(1) > .navbar > .flex-none > .dropdown > .btn > div.rounded-full > .w-14').click()
        cy.contains('Perfil').click()
    })
})