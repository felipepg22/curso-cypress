describe('Login e registro de usuarios alura pic', () => {

    beforeEach(() => {
      //Arrange
      cy.visit('https://alura-fotos.herokuapp.com')

     })

     const usuarios = require('../../fixtures/usuarios.json');

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

    it('verifica mensagem de email inválido', () => {
        //Act
        cy.contains('a', 'Register now').click();
        cy.contains('button', 'Register').click();
        cy.get('input[formcontrolname="email"]').type('felipe');

        //Assert
        cy.contains('ap-vmessage', 'Invalid e-mail').should('be.visible');       
    })

    it('verifica mensagem de senha com menos de 8 caracteres', () => {
        //Act
        cy.contains('a', 'Register now').click();
        cy.contains('button', 'Register').click();
        cy.get('input[formcontrolname="password"]').type('123');
        cy.contains('button', 'Register').click();

        //Assert
        cy.contains('ap-vmessage', 'Mininum length is 8').should('be.visible');       
    })

    it('fazer login com usuario valido', () => {
        cy.login('flavio','123');
        cy.contains('a','(Logout)').should('be.visible');
    })

    it('fazer login com usuario inválido', () => {
        cy.login('felipe','1234');
        cy.on('window:alert', (str) => {
            expect(str).to.equal('Invalid user name or password');
        })
    })

    usuarios.forEach((usuario) => {

        it.only(`registra usuario ${usuario.userName}`, () => {
            cy.contains('a', 'Register now').click();
            cy.contains('button', 'Register').click();
            cy.registra(usuario.email, usuario.fullName, usuario.userName, usuario.password);
        })
    })

    
})