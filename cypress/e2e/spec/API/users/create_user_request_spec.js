const { faker } = require("@faker-js/faker")


describe("Create user via POST call ", () => {
   beforeEach(() => {
      cy.generateUserName();
      cy.login();
   });

   it("Create a non admin user", () => {

      let userName = Cypress.env("testUserName");
      let userPassword = `${faker.lorem.word(7) + faker.number.int({ min: 100, max: 150 })}`;
      let employeeNumbers = [112, 117, 109];
      let employeeNumber = employeeNumbers[Math.floor(Math.random() * employeeNumbers.length)];

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
         expect(res).property("status").eq(200);
         const userId = res.body.data.id
         cy.request(({
            method: "DELETE",
            url: usersUrl,
            body: {
               ids: [userId]
            } 
         }))
      }).then((res2) => {
         expect(res2).property("status").eq(200);
      }) 
   })
})

