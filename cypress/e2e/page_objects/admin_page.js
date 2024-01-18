import BasePage from "./base_page";

class AdminPage extends BasePage {
  visit() {
    return cy.visit("/web/index.php/admin/viewSystemUsers");
  }
}
export default new AdminPage();
