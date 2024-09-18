import LoginPage from '../page/LoginPage';

describe('Tech Life Login Test', () => {
  const loginPage = new LoginPage();

  beforeEach(() => {
    cy.visit(Cypress.env('url'));
  });

  // Successful login with correct email and password
  it('Scenario 1: Successful login with correct email and password', () => {
    loginPage.standardLogin();
    cy.get('h4.mt-5').should('be.visible');
  });

  // Unsuccessful login with incorrect email and correct password
  it('Scenario 2: Unsuccessful login with incorrect email and correct password', () => {
    loginPage.getEmail().type('profesor@techlife.com');
    loginPage.getPassword().type('12345678');
    loginPage.getLoginButton().click();
    loginPage.getErrorMsg().should('be.visible');
  });

  // Unsuccessful login with correct email and incorrect password
  it('Scenario 3: Unsuccessful login with correct email and incorrect password', () => {
    loginPage.getEmail().type('professor@techlife.com');
    loginPage.getPassword().type('1234567');
    loginPage.getLoginButton().click();
    loginPage.getErrorMsg().should('be.visible');
  });

  // Unsuccessful login with incorrect email and incorrect password
  it('Scenario 4: Unsuccessful login with incorrect email and incorrect password', () => {
    loginPage.getEmail().type('profesor@techlife.com');
    loginPage.getPassword().type('1234567');
    loginPage.getLoginButton().click();
    loginPage.getErrorMsg().should('be.visible');
  });

  // Unsuccessful login with empty email and correct password
  it('Scenario 5: Unsuccessful login with empty email and correct password', () => {
    loginPage.getEmail().type(' ');
    loginPage.getPassword().type('12345678');
    loginPage.getLoginButton().click();
    loginPage.getErrorMsg().should('be.visible');
  });

  // Unsuccessful login with correct email and empty password
  it('Scenario 6: Unsuccessful login with correct email and empty password', () => {
    loginPage.getEmail().type('professor@techlife.com');
    loginPage.getPassword().type(' ');
    loginPage.getLoginButton().click();
    loginPage.getErrorMsg().should('be.visible');
  });

  // Unsuccessful login with empty email and empty password
  it('Scenario 7: Unsuccessful login with empty email and empty password', () => {
    loginPage.getEmail().type(' ');
    loginPage.getPassword().type(' ');
    loginPage.getLoginButton().click();
    loginPage.getErrorMsg().should('be.visible');
  });

  // Unsuccessful login with invalid email format
  it('Scenario 8: Unsuccessful login with invalid email format', () => {
    loginPage.getEmail().type('professor@.com');
    loginPage.getPassword().type('12345678');
    loginPage.getLoginButton().click();
    loginPage.getErrorMsg().should('be.visible');
  });

  // Successful login with extra spaces in email
  it('Scenario 9: Successful login with extra spaces in email', () => {
    loginPage.getEmail().type(' professor@techlife.com');
    loginPage.getPassword().type('12345678');
    loginPage.getLoginButton().click();
    cy.get('h4.mt-5').should('be.visible');
  });

  // Unsuccessful login with extra space in password
  it('Scenario 10: Unsuccessful login with extra space in password', () => {
    loginPage.getEmail().type('professor@techlife.com');
    loginPage.getPassword().type(' 12345678');
    loginPage.getLoginButton().click();
    loginPage.getErrorMsg().should('be.visible');
  });

  // Case sensitivity in password
  it('Scenario 11: Case sensitivity in password', () => {
    loginPage.getEmail().type('test@techlife.com');
    loginPage.getPassword().type('Tech123');
    loginPage.getLoginButton().click();
    cy.get('h4.mt-5').should('be.visible');
  });

  // Login with inactive account
  it('Scenario 12: Login with inactive account', () => {
    loginPage.getEmail().type('desativada@techlife.com');
    loginPage.getPassword().type('12345678');
    loginPage.getLoginButton().click();
    loginPage.getErrorMsg().should('be.visible');
  });
});