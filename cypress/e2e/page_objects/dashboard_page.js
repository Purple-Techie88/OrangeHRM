class DashboardPage {
    getUserDropdown(){
        return cy.get(".oxd-userdropdown-tab")
    }

    getUserMenuItem(menuItem){
        return cy.findByRole("menuitem", { name: menuItem})
    }

}
export default new DashboardPage();
