class BasePage {
  getItemFromMainMenu(menuItem) {
    return cy.get("ul.oxd-main-menu").find(menuItem);
  }

  getCloseButton(menuItem) {
    return cy.contains(/close/i);
  }

  getButtonByName(name) {
    return cy.get("button[type = 'submit']").contains(name).eq(0);
  }

  getSuccessMessage() {
    return cy.get(".oxd-toast-container");
  }
}
export default BasePage;
