describe('alura busca cursos', () => {
//Referência para ajudar na digitação dos códigos
/// <reference types="cypress" />
//Comando para não atrapalhar casos de "uncaught:exception"
Cypress.on("uncaught:exception", (err, runnable) => {
    return false;
});

    beforeEach(() => {
        //Arrange
        cy.visit('https://www.alura.com.br');
    })

    it('buscar curso de python', () => {
        //Act
        cy.get('#header-barraBusca-form-campoBusca').type('python');
        cy.get('.header-barraBusca-form-submit').click();

        //Assert
        cy.get('h4.busca-resultado-nome').should('contain', 'Curso Python: entendendo a Orientação a Objetos');        
    })
})