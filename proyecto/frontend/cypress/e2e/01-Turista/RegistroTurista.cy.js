describe ('Registro_Turista', () => {
    beforeEach (() => { 
        cy.visit('http://wweat.ddns.net/')
        //cy.visit('http://127.0.0.1:5173/')
    })
    it('Entrando al Registro',() =>{
        cy.contains('WHERE WE EAT')
        cy.get('.flex-col > .flex > [href="/registro"] > .font-bold').click()
        cy.get('#alias').type('Test_UserT')
        cy.get('#email').type('TuristaEmail@gmail.com',{ delay: 30 })
        cy.get('#contrasena').type('SoyTurista123',{ delay: 30 })
        cy.get('#confirmContrasena').type('SoyTurista123',{ delay: 30 })
        cy.get('#url_img_usuario').selectFile("./cypress/imgs/turista_hombre.jpeg");
        cy.get('#rol').select('Turista')
        cy.wait(200)
        cy.get('#nombres').type('Turista Cy',{ delay: 30 })
        cy.get('#apellidos').type('Apellido CY',{ delay: 30 })
        cy.get('#motivo_alojamiento').select('Trabajo')
        cy.wait(200)
        cy.get('#nacionalidad').select('Alemania')
        cy.wait(200)
        cy.get(':nth-child(10) > input').click()
        cy.get('.mb-8').click()
        cy.contains('Creacion de usuario exitosa')
    })
})