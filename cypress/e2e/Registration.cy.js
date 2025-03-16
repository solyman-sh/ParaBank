import Registration from "../Pages/Registration/Registration";

const UserRegister = new Registration();
const baseUrl = Cypress.config("baseUrl")

describe("Para Bank Registration Page ", () => {
  it("User Registration Verify", () => {
    cy.visit(baseUrl);
    UserRegister.RegisterBtn();
    UserRegister.RegistrationwithFixture();
    
  });
});
