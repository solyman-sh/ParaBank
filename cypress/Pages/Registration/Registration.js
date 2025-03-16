class Registration {
  RegisterBtn() {
    cy.get("#loginPanel > :nth-child(3) > a").should("be.visible").click();
    cy.get(".title").should("be.visible");
    cy.wait(3000);
  }

  RegistrationwithFixture() {
    cy.fixture("Registration/registration").then((data) => {
      this.userdata = data;
      this.RegisterForm(
        this.userdata.Fname,
        this.userdata.Lname,
        this.userdata.Address,
        this.userdata.City,
        this.userdata.State,
        this.userdata.ZipCode,
        this.userdata.Phone,
        this.userdata.SSN,
        this.userdata.UserName,
        this.userdata.Password,
        this.userdata.RePass
      );
    });
  }

  RegisterForm(
    Fname,
    Lname,
    Address,
    City,
    State,
    ZipCode,
    Phone,
    SSN,
    UserName,
    Password,
    RePass
  ) {
    cy.get("input[id='customer.firstName']").should("be.visible").type(Fname);
    cy.get("input[id='customer.lastName']").should("be.visible").type(Lname);
    cy.get("input[id='customer.address.street']").should("be.visible").type(Address);
    cy.get("input[id='customer.address.city']").should("be.visible").type(City);
    cy.get("input[id='customer.address.state']").should("be.visible").type(State);
    cy.get("input[id='customer.address.zipCode']").should("be.visible").type(ZipCode);
    cy.get("input[id='customer.phoneNumber']").should("be.visible").type(Phone);
    cy.get("input[id='customer.ssn']").should("be.visible").type(SSN);
    cy.get("input[id='customer.username']").should("be.visible").type(UserName);
    cy.get("input[id='customer.password']").should("be.visible").type(Password);
    cy.get("#repeatedPassword").should("be.visible").type(RePass);
    cy.get("input[value='Register']").should("be.visible").click();

    // Check for username existence
    cy.get("body").then(($body) => {
      if ($body.find("span[id='customer.username.errors']").length > 0) {
        cy.get("span[id='customer.username.errors']").then(($error) => {
          if ($error.text().includes("This username already exists.")) {
            cy.log("Username already exists, please choose a different one");
            cy.get(".title").should("be.visible");
          }
        });
      } else {
        cy.wait(3000);
        cy.get(".title").should("be.visible");
        cy.wait(3000);
        // logout btn
        cy.get("a[href='logout.htm']").click();
        cy.wait(3000);
      }
    });
  }
}

export default Registration;
