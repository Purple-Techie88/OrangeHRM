import my_profile_page, {
    personalDetails,
  } from "../../../page_objects/my_profile_page";
  import dashboard_page from "../../../page_objects/dashboard_page";
  describe("User is able to update Personal Details in profile", () => {
    beforeEach(() => {
      cy.generateUserName();
      cy.applicationLogin();
    });
  
    it("Update personal details", () => {
      const [firstName, lastName] = Cypress.env("testUserName").split(" ");
  
      dashboard_page.visit();
      my_profile_page.getItemFromMainMenu("My Info").click();
      cy.get(".orangehrm-tabs-item")
        .contains("Personal Details")
        .should("be.visible");
      personalDetails.getFirstNameField().clear().type(firstName);
      personalDetails.getLastNameField().clear().type(lastName);
      personalDetails.getBirthdateCalendar().click();
      personalDetails.selectBirthdateOnCalendar();
      personalDetails.getGenderRole("Male").click();
      personalDetails.getButtonByName("Save").click();
      cy.get(".oxd-toast-container").should("be.visible");
      personalDetails
        .getSuccessMessage()
        .should("contain.text", "Successfully Updated");
  
      personalDetails.getFirstNameField().should("have.value", firstName);
      personalDetails.getLastNameField().should("have.value", lastName);
    });
  });
  