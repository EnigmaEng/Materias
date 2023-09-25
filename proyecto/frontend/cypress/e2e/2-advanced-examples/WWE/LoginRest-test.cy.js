describe('LoginRest-Test', () =>{
    //Con Before Each colocamos la condicion de que antes de ejecutar cada test, siempre este en la pagina inicial
       beforeEach(() => {
        cy.visit('http://127.0.0.1:5173/')
    })

    it('Primer pagina abierta', () => {
        // Sirve para saber si nuestra pagina esta renderizando
        cy.contains('Where We Eat')
    })

    it('Login', () => {
        // Entrando al formulario de login
        cy.contains('Iniciar sesion').click()
    })

    it('SesionRest', () => {
        // Logueandonos con un usuario turista
        cy.contains('Iniciar sesion').click()
        cy.get('[placeholder=" Correo"]').type('RestauranteEmail@gmail.com')
        cy.get('[placeholder="Contraseña.."]').type('SoyRestaurante123')
        cy.get('.ml-4').click()
        cy.contains('Mis resenias')
    })

    })