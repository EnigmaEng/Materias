describe ('LoginAdmin', () => {
    beforeEach (() => { 
        cy.visit('http://127.0.0.1:5173/')
    })

    it('Loguenado user Administrativo',() =>{
        cy.get('[href="/login"] > .bg-wwe').click()
        cy.contains('Iniciar Sesión')
        cy.get('#email').type('admin@admin.com')
        cy.get('#contrasena').type('12345678')
        cy.get(':nth-child(3) > .flex').click()
        cy.contains('Solicitudes')
        cy.get('.inline-flex').click()
    })
})