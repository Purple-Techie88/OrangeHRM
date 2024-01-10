import login_page from "../../../page_objects/login_page";
import dashboard_page from "../../../page_objects/dashboard_page";

describe("User can log in and out of OrangeHRM", () => {
    
    beforeEach(() => { 
        cy.visit("/");
});

    it("Valid username/password logs user in", () => {

        const userName = Cypress.env('userName');
        const password = Cypress.env('password');
        
        // cy.visit("/")
        login_page.getUserNameInputField().type(userName);
        login_page.getPasswordInputField().type(password);
        login_page.getLoginButton().click();
        cy.get(".oxd-main-menu").should("be.visible");
        dashboard_page.getUserDropdown().click();
        dashboard_page.getUserMenuItem(/logout/i).click();
    });


    it("Username/password required", () => {

        login_page.getUserNameInputField().type('{enter}');
        cy.get(".oxd-input-group__message").should("have.length", 2);
    });

    it("Invalid username/password denies user login", () => {
        
        login_page.getUserNameInputField().type("invalid");
        login_page.getPasswordInputField().type("invalid");
        login_page.getLoginButton().click();
        cy.get(".oxd-alert--error").should("be.visible").should("contain.text", 'Invalid credentials');
    
    });
})