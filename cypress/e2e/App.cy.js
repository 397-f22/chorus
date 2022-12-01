/* globals cy */

describe('Test App', () => {

  it('launches', () => {
    cy.visit('/');
  });

  it('load example button loads more than one selected beat', () => {
    cy.visit('/0');
    cy.get('[data-cy=load-example-1]').click();
    cy.get('[data-cy=selected-beat]').should('exist');
  });

  it('trash button clears all cells', () => {
    cy.visit('/0');
    cy.get('[data-cy=load-example-1]').click();
    cy.get('[data-cy=Delete]').click();
    cy.get('[data-cy=selected-beat]').should('not.exist');
  });

  it('pressing c# selects it as the selected note', () => {
    cy.visit('/0');
    cy.get('[data-cy=61-unselected]').click();
    cy.get('[data-cy=61-selected]').should('exist');
  });

  it('settiing BPM value to 20', () => {
    cy.visit('/0');
    cy.get('[id=outlined-number]').focus().type("{selectall}").type("20").should('have.value', '20')
  });

  it('press play button', () => {
    cy.visit('/0');
    cy.get('[data-cy=play-btn]').click();
    cy.get('[data-cy=status-playing]').should('exist');
  });

  it('press stop button', () => {
    cy.visit('/0');
    cy.get('[data-cy=stop-btn]').click();
    cy.get('[data-cy=status-stop]').should('exist');
  });

  it('press the first button of bass drum row', () => {
    cy.visit('/0');
    cy.get('[id=beat-button-bass-drum-0]').click();
    cy.get('[data-cy=selected-beat]').should('exist');
  });
  it('press the first button of rimshot row', () => {
    cy.visit('/0');
    cy.get('[id=beat-button-rimshot-0]').click();
    cy.get('[data-cy=selected-beat]').should('exist');
  });

  it('press the first button of hand clap row', () => {
    cy.visit('/0');
    cy.get('[id=beat-button-hand-clap-0]').click();
    cy.get('[data-cy=selected-beat]').should('exist');
  });

  it('press the first button of hi hat row', () => {
    cy.visit('/0');
    cy.get('[id=beat-button-hi-hat-0]').click();
    cy.get('[data-cy=selected-beat]').should('exist');
  });

  it('press the first button of piano row', () => {
    cy.visit('/0');
    cy.get('[id=beat-button-piano-0]').click();
    cy.get('[data-cy=selected-beat]').should('exist');
  });

  it('press the first button of acoustic guitar row', () => {
    cy.visit('/0');
    cy.get('[id=beat-button-acoustic-guitar-0]').click();
    cy.get('[data-cy=selected-beat]').should('exist');
  });

  it('press the first button of electric guitar row', () => {
    cy.visit('/0');
    cy.get('[id=beat-button-electric-guitar-0]').click();
    cy.get('[data-cy=selected-beat]').should('exist');
  });
  it('press the first button of electric bass row', () => {
    cy.visit('/0');
    cy.get('[id=beat-button-electric-bass-0]').click();
    cy.get('[data-cy=selected-beat]').should('exist');
  });
  it('press the first button of trumpet row', () => {
    cy.visit('/0');
    cy.get('[id=beat-button-trumpet-0]').click();
    cy.get('[data-cy=selected-beat]').should('exist');
  });
  it('press the first button of trombone row', () => {
    cy.visit('/0');
    cy.get('[id=beat-button-trombone-0]').click();
    cy.get('[data-cy=selected-beat]').should('exist');
  });
  it('press the first button of bamboo flute row', () => {
    cy.visit('/0');
    cy.get('[id=beat-button-bamboo-flute-0]').click();
    cy.get('[data-cy=selected-beat]').should('exist');
  });






});