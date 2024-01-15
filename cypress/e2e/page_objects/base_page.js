class BasePage {
  
    getItemFromMainMenu(menuItem) {
        return cy.get("ul.oxd-main-menu").find(menuItem);
    }

    getCloseButton(menuItem) {
        return cy.contains(/close/i);
    }
}
export default BasePage;
