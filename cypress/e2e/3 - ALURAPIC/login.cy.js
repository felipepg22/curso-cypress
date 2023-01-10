describe('Login de usuários alura pic', () => {

    beforeEach(() => {
        //Arrange
        cy.visit('https://alura-fotos.herokuapp.com');  
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
})