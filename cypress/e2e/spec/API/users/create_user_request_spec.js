const { faker } = require("@faker-js/faker")


describe("Create user via POST call ", () => {
   beforeEach(() => {
      cy.generateUserName();
      cy.login();
   });

   it("Create a non admin user", () => {

      let userName = Cypress.env("testUserName");
      let userPassword = `${faker.lorem.word(7) + faker.number.int({ min: 100, max: 150 })}`;
      let employeeNumber = faker.number.int({ min: 100, max: 125 });
      let baseUrl = Cypress.config("baseUrl");
      let usersUrl = `${baseUrl}/web/index.php/api/v2/admin/users`;

      cy.request({
         method: 'POST',
         url: usersUrl,
         body: {
            username: userName,
            password: userPassword,
            status: true,
            userRoleId: 2,
            empNumber: employeeNumber
         }
      }).then((res) => {
         const userId = res.body.data.id
         cy.request(({
            method: "DELETE",
            url: usersUrl,
            body: {
               ids: [userId]
            } 
         }))
      })
   })
})

