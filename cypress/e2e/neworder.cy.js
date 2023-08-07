describe('new order', () => {

  beforeEach(() => {
    cy.intercept('GET', 'http://localhost:3001/api/v1/orders', {
      statusCode: 200,
      fixture: 'orders.json'
    })
    .visit('http://localhost:3000');
    cy.intercept('POST', 'http://localhost:3001/api/v1/orders', (req) => {
      
    }).as('postOrders');
  });

  it('should post a new order', () => {
    cy.get('[name="name"]').type('Paulina')
    cy.get('button')
      .first().click()
    cy.get('.order')
      .contains('beans')

    // cy.wait('@postOrders').then((interception) => {
    //   cy.get('button')
    //   .last().click()
    // })
  })
})