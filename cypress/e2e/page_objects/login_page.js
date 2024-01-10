
class LoginPage {

    getUserNameInputField() {
        return cy.get("[name='username']");

    }

    getPasswordInputField() {
        return cy.get("[name='password']");
    }

    getLoginButton() {
        return  cy.findAllByRole("button", {name: "Login"});
    }
}
export default new LoginPage();