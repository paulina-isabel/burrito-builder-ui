describe('homepage flow', () => {

  beforeEach(() => {
    cy.intercept('GET', 'http://localhost:3001/api/v1/orders', {
      statusCode: 200,
      fixture: 'orders.json'
    })
    .visit('http://localhost:3000');
  });

  it('displays proper info', () => {
    cy.contains('h1', 'Burrito Builder')
    cy.get('form').children()
      .should('have.length', 15)
      cy.get('[name="name"]')
    cy.get('button')
      .first()
      .should('have.attr', 'name', 'beans')
    cy.get('button')
      .last()
      .should('have.attr', 'name', 'submit')
    cy.get(':nth-child(1) > h3')
      .contains('Pat')
    cy.get(':nth-child(1) > .ingredient-list > :nth-child(1)')
      .contains('beans')
    cy.get('.order')
      .contains('Nothing selected')
  });
});
