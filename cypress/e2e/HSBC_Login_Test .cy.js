describe('HSBC_Login_Test', () => {
  it('HSBC Login Test', () => {
    cy.visit('https://www.hsbc.co.in/');
    cy.get('div[class="header-logo lg-2"]').find("img").should('be.visible');
    cy.title().should('eq', 'HSBC India - Credit Cards, NRI Services, Saving and Deposit');
    cy.get('div>a[class="selected-item login-button only-one-link"]').contains(" Log On ").click({ force: true });
    //Cypress inconsistently passes/fails after clicking the Log On button due to website navigation to url https://www.hsbc.co.in/#modal! I added If/else steps to handle this.
    if (window.location.href === "https://www.hsbc.co.in/#modal") {
      cy.get(".crh-overlay").find(".crh-modal__close-button").click({ force: true });
    }
    else {
      cy.get('div>a[class="selected-item login-button only-one-link"]').contains(" Log On ").click({ force: true });
    }
    cy.get('div[class="frmDiv"]').contains('Log On').should('be.visible');
    cy.contains('Continue').should('be.visible').and('not.be.enabled'); 
    cy.get('#rememberMe').should('not.be.checked');
    cy.get('input#username').type('Abc@123.com');
    cy.contains('Continue').should('be.visible').and('be.enabled');
    cy.get('a#username_help_link>span>span[class="icon icon-circle-help-solid help-icon"]').should('be.visible');
    cy.get('a#username_help_link>span>span[class="icon icon-circle-help-solid help-icon"]').click({ force: true });
    cy.contains('Username').should('be.visible');
    cy.get('span[class="icon icon-delete"]').should('be.visible');
    cy.get('span[class="icon icon-delete"]').click({ force: true });
    cy.screenshot('screenshot');
  })
})

