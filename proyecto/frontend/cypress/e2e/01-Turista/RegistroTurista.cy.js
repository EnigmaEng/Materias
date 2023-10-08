describe ('Registro_Turista', () => {
    beforeEach (() => { 
        cy.visit('http://127.0.0.1:5173/')
    })
    it('Entrando al Registro',() =>{
        cy.contains('WHERE WE EAT')
        cy.get('.flex-col > .flex > [href="/registro"] > .font-bold').click()
        cy.get('#alias').type('Test_UserT')
        cy.get('#email').type('TuristaCY@gmail.com')
        cy.get('#contrasena').type('SoyTuristaja')
        cy.get('#confirmContrasena').type('SoyTuristaja')
        cy.get('#url_img_usuario').type('Foto_Turista.jpg')
        cy.get('#rol').select('Turista')
        cy.get('#nombres').type('Turista Cy')
        cy.get('#apellidos').type('Apellido CY')
        cy.get('#motivo_alojamiento').type('Diversion')
        cy.get('#nacionalidad').select('Alemania')
        cy.get(':nth-child(10) > input').click()
        cy.get('.mb-8').click()
        cy.contains('Registro exitoso')
    })
})