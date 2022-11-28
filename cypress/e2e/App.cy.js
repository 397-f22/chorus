/* globals cy */
    
describe ('Test App', () => {

    it ('launches', () => {
      cy.visit ('/');
    });

    it ('load example button loads more than one selected beat', () => {
      cy.visit ('/0');
      cy.get('[data-cy=load-example-1]').click();
      cy.get('[data-cy=selected-beat]').should('exist');
    });

    it ('trash button clears all cells', () => {
      cy.visit ('/0');
      cy.get('[data-cy=load-example-1]').click();
      cy.get('[data-cy=Delete]').click();
      cy.get('[data-cy=selected-beat]').should('not.exist');
    });

    it ('pressing c# selects it as the selected note', () => {
      cy.visit ('/0');
      cy.get('[data-cy=61-unselected]').click();
      cy.get('[data-cy=61-selected]').should('exist');
    });
  
  });