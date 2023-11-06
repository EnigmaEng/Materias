describe ('LoginAdmin', () => {
    beforeEach (() => { 
        cy.visit('http://wweat.ddns.net/')
        //cy.visit('http://127.0.0.1:5173/')
    })

    it('Login Administrativo',() =>{
        cy.get('.hidden > :nth-child(1) > .z-10 > .gap-5 > [href="/login"] > .bg-wwe').click();
        cy.contains('Iniciar Sesión');
        cy.get('#email').type('admin@admin.com')
        cy.get('#contrasena').type('hola1234')
        cy.get(':nth-child(3) > .flex').click()
        cy.contains('Bienvenido')
    })
})