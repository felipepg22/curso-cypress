describe('Login e registro de usuarios alura pic', () => {

    beforeEach(() => {
      //Arrange
      cy.visit('https://alura-fotos.herokuapp.com')

     })

    it('verifica mensagens validacao', () => {
        //Act
        cy.contains('a', 'Register now').click();
        cy.contains('button', 'Register').click();
        cy.contains('button', 'Register').click();

        //Assert
        cy.contains('ap-vmessage', 'Email is required!').should('be.visible');
        cy.contains('ap-vmessage', 'Full name is required!').should('be.visible');
        cy.contains('ap-vmessage', 'User name is required!').should('be.visible');
        cy.contains('ap-vmessage', 'Password is required!').should('be.visible');
    })
})