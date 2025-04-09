import "@testing-library/cypress/add-commands";
import { faker } from "@faker-js/faker";

// -- This headless login command validates the user name and password via an API call --A

Cypress.Commands.add(
  "loginApplication",
  (userName = Cypress.env('CYPRESS_USERNAME'), password = Cypress.env('CYPRESS_PASSWORD')) => {
    let headers = {
      "Content-Type": "text/html",
    };
    cy.request({
      ...headers,
      method: "GET",
      url: "https://opensource-demo.orangehrmlive.com",
    }).then((res) => {
      let token = res.body.split("&quot;")[1];
      // console.log(res.body)
      console.log(token);
      headers = {
        Accept: "text/html",
        "Content-Type": "application/json",
      };
      cy.request({
        ...headers,
        method: "POST",
        url: "https://opensource-demo.orangehrmlive.com/web/index.php/auth/validate",
        body: {
          _token: token,
          username: userName,
          password: password,
        },
      });
      console.log(res.body);
    });
  }
);

// creates a `testUserName` Cypress environment variable
Cypress.Commands.add("generateUserName", () => {
  const name = `${faker.person.firstName()} ${faker.person.lastName()}`;
  Cypress.env("testUserName", name);
  //Once full name is generated in the test, QA could split out the names
  //names to put in the first and last name fields
  //const [firstName, lastName] = Cypress.env('testUserName').split(' ');
});
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
