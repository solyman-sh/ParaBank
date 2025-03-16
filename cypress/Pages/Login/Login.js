
class LoginPage {
    loginInput(userName, passWord) {
        cy.get("input[name='username']").should('be.visible').type(userName);  
        cy.get("input[name='password']").should('be.visible').type(passWord);  
        cy.get("input[value='Log In']").should('be.visible').click();
        cy.get("div[id='showOverview'] h1[class='title']").should('be.visible');
    }
}

export default LoginPage;
