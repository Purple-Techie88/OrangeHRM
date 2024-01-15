class DashboardPage {

    visit() {
        return cy.visit("/web/index.php/dashboard/index");
    }

    getUserDropdown(){
        return cy.get(".oxd-userdropdown-tab")
    }

    getUserMenuItem(menuItem){
        return cy.findByRole("menuitem", { name: menuItem})
    }

}
export default new DashboardPage();
