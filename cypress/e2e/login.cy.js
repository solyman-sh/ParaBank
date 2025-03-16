import LoginPage from "../Pages/Login/login";



const userLogin = new LoginPage()
const baseUrl = Cypress.config("baseUrl")


const username = Cypress.env("username")
const password = Cypress.env("password")


describe('User Login ', () => {
    it('User Login Veryfication', () => {
        cy.visit(baseUrl);
        userLogin.loginInput(username,password )
    });
});