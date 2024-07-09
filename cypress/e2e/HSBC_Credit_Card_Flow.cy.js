describe('HSBC_Credit_Card_Flow', () => {
  it('HSBC Credit Card Flow Test', () => {
    cy.visit('https://www.hsbc.co.in/')
    cy.get('span.header-main-navigation-title').contains('Banking').should('be.visible').trigger('mouseover');
    cy.contains("Credit Cards").click({ force: true });
    cy.get('h1').contains('Credit cards').should('be.visible');
    cy.get('span.link.text').contains('HSBC Cashback Credit Card').should('be.visible');
    cy.get('a[data-event-name="hsbc cashback credit card|component:product list|position:1"]').click({ force: true });
    cy.get('a.A-BTNPINSEC-RW-ALL').contains('Apply now').should('be.visible');
    cy.url().should('include', '/credit-cards/products/visa-cashback/');
    cy.get('img#pp_intro_image_3').should('be.visible');
    cy.get('span.A-TYP22L-RW-ALL').contains('INR999').should('be.visible'); 
    cy.get('span.A-TYP22L-RW-ALL').contains('INR999 (waived if you spend more than INR200,000 per year)').should('be.visible');
    cy.get('div.LPMoverlay').find("img").should('be.visible'); 
    cy.get('div.header-logo').find("img").click({ force: true }); 
    cy.title().should('eq', 'HSBC India - Credit Cards, NRI Services, Saving and Deposit'); 
  })
})
