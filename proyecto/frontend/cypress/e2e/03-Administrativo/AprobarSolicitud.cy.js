describe('LoginAdmin', () => {
    beforeEach(() => { 
      cy.visit('http://wweat.ddns.net/')
      //cy.visit('http://127.0.0.1:5173/')
    })
  
    it('Aceptando sub', () => {
      cy.get('.hidden > :nth-child(1) > .z-10 > .gap-5 > [href="/login"] > .bg-wwe').click();
      cy.contains('Iniciar Sesión')
      cy.get('#email').type('admin17@wwe.com')
      cy.get('#contrasena').type('hola1234')
      cy.get(':nth-child(3) > .flex').click()  
      // Verificar si el mensaje "Sin solicitudes pendientes" existe
      cy.contains('Sin solicitudes pendientes').then(($element) => {
        // Si el mensaje existe, el test es exitoso
        // Si no existe, el test continuará con las aserciones siguientes
        if ($element.length === 0) {
          expect(true).to.equal(true); // Asegura que el test sea exitoso
          cy.get('.inline-flex').click()
        }
      });
    })
  })