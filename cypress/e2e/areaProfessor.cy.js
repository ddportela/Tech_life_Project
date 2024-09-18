import AreaDoProfessorPage from '../page/AreaDoProfessor';

describe('Área do Professor', () => {
  const page = new AreaDoProfessorPage();

  // Helper function to perform login
  beforeEach(() => {
    cy.visit('http://13.37.224.17:4200/');
    page.login('professor@techlife.com', '12345678');
  });

  // Insertion of study materials
  it('Cenário 1: Inserção de materiais de estudo', () => {
    cy.wait(3000);
    page.materialGridItem1.should('be.visible');
    cy.get('.active').should('be.visible');
    page.materialGridItem1.should('exist');
    cy.get('.active').should('exist');
  });

  // Inserting a link to a PDF file and the Class
  it('Cenário 2: Inserção de link de um arquivo PDF e da Aula', () => {
    cy.wait(3000);
    page.clickMaterialGridItem(2);
    page.insertMaterial('Aula 1 test', 'Aula 1 test', 'Link da aula', 'link PDF');
    page.verifyMaterialExists();
  });

  // Content management
  it('Cenário 3: Gerenciamento de conteúdo', () => {
    cy.wait(3000);
    page.editMaterial(' editando', ' editando', ' ditando', ' editando');
    cy.get('tbody > tr > th').click();
    page.closeButton.click();
    page.deleteMaterial();
    page.verifyMaterialDoesNotExist();
  });

  // Viewing shared content
  it('Cenário 4: Visualização de conteúdo compartilhado', () => {
    cy.wait(3000);
    page.clickMaterialGridItem(2);
    page.insertMaterial('Aula 1 test', 'Aula 1 test', 'Link da aula', 'link PDF');
    page.verifyMaterialExists();
    cy.get('tbody > tr > th').click();
    cy.get('.material').each(($material) => {
      cy.wrap($material).find('.data-upload').should('exist').and('not.be.empty');
      cy.wrap($material).find('.numero-visualizacoes').should('exist').and('not.be.empty');
    });
    page.deleteMaterial();
  });
});
