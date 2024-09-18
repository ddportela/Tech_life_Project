class AreaDoProfessorPage {
    // Elementos da página
    get emailInput() { return cy.get('#email'); }
    get passwordInput() { return cy.get('#password'); }
    get loginButton() { return cy.get('.btn'); }
    get materialGridItem1() { return cy.get('.d-grid > :nth-child(1)'); }
    get materialGridItem2() { return cy.get('.d-grid > :nth-child(2)'); }
    get trashIcon() { return cy.get('.bi-trash'); }
    get pencilIcon() { return cy.get('.bi-pencil'); }
    get titleAulaInput() { return cy.get('#tituloAula'); }
    get descricaoAulaInput() { return cy.get('#descricaoAula'); }
    get aulaInput() { return cy.get('#aula'); }
    get materialApoioInput() { return cy.get('#materialApoio'); }
    get primaryButton() { return cy.get('.btn-primary'); }
    get tableHeader() { return cy.get('tbody > tr > th'); }
    get closeButton() { return cy.get('.btn-close'); }
  
    // Métodos de ação
    login(email, password) {
      this.emailInput.type(email);
      this.passwordInput.type(password);
      this.loginButton.click();
    }
  
    clickMaterialGridItem(index) {
      cy.get(`.d-grid > :nth-child(${index})`).click();
    }
  
    insertMaterial(titulo, descricao, aulaLink, materialLink) {
      this.titleAulaInput.type(titulo);
      this.descricaoAulaInput.type(descricao);
      this.aulaInput.type(aulaLink);
      this.materialApoioInput.type(materialLink);
      this.primaryButton.click();
    }
  
    editMaterial(titulo, descricao, aulaLink, materialLink) {
      this.pencilIcon.click();
      this.titleAulaInput.clear().type(titulo);
      this.descricaoAulaInput.clear().type(descricao);
      this.aulaInput.clear().type(aulaLink);
      this.materialApoioInput.clear().type(materialLink);
      this.primaryButton.click();
    }
  
    deleteMaterial() {
      this.trashIcon.click();
    }
  
    verifyMaterialExists() {
      this.tableHeader.should('be.visible');
    }
  
    verifyMaterialDoesNotExist() {
      this.tableHeader.should('not.exist');
    }
  }
  
  export default AreaDoProfessorPage;
  