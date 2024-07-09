describe('ATM Locator Test Scenarios', () => {
  it('ATM Search Test', () => {
    cy.visit('https://www.hsbc.co.in/')
    cy.contains('Find your nearest HSBC branch or ATM').click({ force: true });
    cy.url().should('include', '/ways-to-bank/branches/');
    cy.get('h1').contains('Branches & ATMs');
    cy.contains('Branch & ATM Locator').click({ force: true });
    cy.wait(10000);
    cy.get('input#searchInput').type('India').type('{enter}');
    cy.contains('Rajbhavan Road, Somajiguda , Hyderabad, India, 500082').should('be.visible');
    cy.contains('Show more results').click();
    cy.contains('Amar Avinash Corporate City, Bund Garden Road, Pune, India, 411001').should('be.visible');
    cy.get('a.social-icon-instagram').should('be.visible');
    cy.get('a.social-icon-facebook').should('be.visible');
    cy.get('a.social-icon-twitter').should('be.visible');
    cy.get('a.social-icon-youtube').should('be.visible');
    cy.get('div.header-logo>a>img').click();
    cy.title().should('eq', 'HSBC India - Credit Cards, NRI Services, Saving and Deposit');
    cy.contains('Privacy Statement').click({ force: true });
    cy.wait(10000);
    cy.screenshot('screenshot');
    cy.get('h1').contains('Privacy Statement');
  })
})
